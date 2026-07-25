'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setFormState('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border border-line px-5 py-4 text-text-hi text-sm font-sans placeholder:text-text-lo focus:outline-none focus:border-text-md transition-colors duration-300'

  return (
    <section id="contact" className="py-24 md:py-40 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* CTA Heading */}
        <SectionReveal className="mb-20">
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-8">
            — 006 &nbsp; Connect
          </p>
          <h2
            className="font-serif text-text-hi leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            {/* PLACEHOLDER — swap with your chosen CTA */}
            If you&apos;re building something real,
            <span className="italic text-text-md"> I want to hear about it.</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — context */}
          <SectionReveal delay={0.1} className="space-y-8">
            <p className="text-text-md text-sm leading-loose font-sans">
              I&apos;m not looking for just any opportunity. I&apos;m looking for the right
              conversation — with founders, builders, and makers who are serious
              about what they&apos;re working on.
            </p>
            <p className="text-text-md text-sm leading-loose font-sans">
              If something I&apos;ve built resonates, or if you think there&apos;s something
              worth talking about — send a note. I read every message.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { label: 'GitHub', href: 'https://github.com/S07K' },
                { label: 'YouTube', href: 'https://www.youtube.com/@function.shubham' },
                { label: 'Instagram', href: 'https://www.instagram.com/function.shubham/' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubham-kumar-957a33200/' },
                { label: 'Twitter / X', href: 'https://twitter.com/0700shubham' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-line pb-4 group"
                >
                  <span className="text-text-md text-sm tracking-widest uppercase font-sans group-hover:text-text-hi transition-colors duration-300">
                    {s.label}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-text-lo group-hover:text-text-hi transition-colors duration-300"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2v6" />
                  </svg>
                </a>
              ))}
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal delay={0.2}>
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-line p-10 flex flex-col items-start gap-4"
              >
                <div className="w-8 h-8 border border-accent flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                    <path d="M2 7l4 4 6-6" />
                  </svg>
                </div>
                <p className="font-serif text-text-hi text-xl">Message received.</p>
                <p className="text-text-md text-sm font-sans leading-loose">
                  I&apos;ll get back to you within a day or two. In the meantime, feel
                  free to explore the work above.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-text-lo text-xs tracking-widest uppercase font-sans hover:text-text-md transition-colors duration-300 mt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-text-lo text-xs tracking-widest uppercase font-sans block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-text-lo text-xs tracking-widest uppercase font-sans block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-text-lo text-xs tracking-widest uppercase font-sans block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What are you working on?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-400/70 text-xs font-sans tracking-widest uppercase">
                    Something went wrong. Try again or reach out on socials.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full border border-line px-6 py-4 text-text-md text-xs tracking-widest uppercase font-sans hover:border-text-md hover:text-text-hi transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formState === 'sending' ? (
                    <>
                      <span className="w-3 h-3 border border-text-md border-t-transparent rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 10L10 2M10 2H4M10 2v6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </SectionReveal>

        </div>

        {/* Footer */}
        <SectionReveal className="mt-24 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start gap-4">
          <span className="font-serif text-text-lo text-sm">
            Shubham Kumar
          </span>
          <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
            Designed &amp; built with intention. © {new Date().getFullYear()}
          </span>
        </SectionReveal>

      </div>
    </section>
  )
}
