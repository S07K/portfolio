'use client'

import { useState } from 'react'
import { site } from '@/lib/content'
import { ArrowUpRight } from './Icons'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full border-b border-line bg-transparent py-2.5 text-[15px] text-text-hi placeholder:text-text-lo/80 transition-colors focus:border-text-hi focus:outline-none'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <div data-reveal>
      <p className="font-serif text-[30px] leading-[1.1] text-text-hi sm:text-[36px]">
        Building something with AI that people should actually enjoy using?{' '}
        <span className="italic text-text-md">I’d love to hear about it.</span>
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-[13px] text-text-hi underline-offset-4 hover:underline"
      >
        {site.email} <ArrowUpRight className="h-3 w-3" />
      </a>

      {state === 'success' ? (
        <div className="mt-10 border border-line p-6" role="status">
          <p className="meta text-ok">● Message received</p>
          <p className="mt-2 text-text-md">Thanks for writing - I’ll reply within a day or two.</p>
          <button type="button" onClick={() => setState('idle')} className="meta mt-4 hover:text-text-hi">
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="meta">Name</span>
              <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block">
              <span className="meta">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={field}
              />
            </label>
          </div>
          <label className="block">
            <span className="meta">Message</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What are you working on?"
              className={`${field} resize-none`}
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="meta" aria-live="polite">
              {state === 'error' ? (
                <span className="text-rec">Couldn’t send - try email instead.</span>
              ) : state === 'sending' ? (
                'Sending…'
              ) : (
                'I read every message.'
              )}
            </p>
            <button
              type="submit"
              disabled={state === 'sending'}
              className="pill border-text-lo text-text-hi hover:border-text-hi disabled:opacity-50"
            >
              Send message <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
