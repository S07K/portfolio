import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const recipient = process.env.CONTACT_EMAIL
    if (!apiKey || !recipient) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: recipient,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #0A0A0A; color: #6B6B6B;">
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #2E2E2E; margin-bottom: 32px;">
            New message from your portfolio
          </p>
          <h2 style="font-size: 24px; color: #F0EDE8; margin-bottom: 8px; font-weight: 400;">
            ${name}
          </h2>
          <p style="font-size: 13px; color: #6B6B6B; margin-bottom: 32px;">
            <a href="mailto:${email}" style="color: #C9A96E;">${email}</a>
          </p>
          <div style="border-top: 1px solid #1E1E1E; padding-top: 24px;">
            <p style="font-size: 14px; line-height: 1.8; color: #6B6B6B; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
