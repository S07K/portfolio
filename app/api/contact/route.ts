import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = String(body?.name ?? '').trim().slice(0, 200)
    const email = String(body?.email ?? '').trim().slice(0, 200)
    const message = String(body?.message ?? '').trim().slice(0, 5000)

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const recipient = process.env.CONTACT_EMAIL
    if (!apiKey || !recipient) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: recipient,
      replyTo: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, ' ')}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;</p>
        <p style="white-space: pre-wrap;">${escape(message)}</p>
      `,
    })
    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
