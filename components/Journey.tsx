'use client'

import SectionReveal from './SectionReveal'

interface Milestone {
  period: string
  role: string
  company: string | null
  companyUrl?: string
  status: 'active' | 'closed' | 'milestone'
  tags: string[]
  description: string
}

const milestones: Milestone[] = [
  {
    period: 'June 2026 — Present',
    role: 'Independent — Building & Creating',
    company: 'OneAlbum + more',
    status: 'active',
    tags: ['Entrepreneurship', 'Product', 'Full-stack', 'Content'],
    description:
      'Left full-time employment to find out what I actually want to build. Exploring product, content, and ideas on my own terms. OneAlbum is one of those bets — not the only one.',
  },
  {
    period: 'Sept 2025 — June 2026',
    role: 'Sr. Software Engineer',
    company: 'Paytm',
    status: 'closed',
    tags: ['Vue', 'Frontend Engineering'],
    description:
      'Frontend engineering in the PIBPL (Paytm Insurance Broking) team. A short chapter that confirmed what I already suspected — I needed space to figure out what I actually wanted.',
  },
  {
    period: 'July 2023 — Aug 2025',
    role: 'Sr. Software Engineer',
    company: 'EnableX',
    status: 'closed',
    tags: ['React', 'TypeScript', 'SaaS', 'API Integrations'],
    description:
      'Led frontend for a Chatbot Builder SaaS. Integrated Stripe, PayU, Calendly, Salesforce, HubSpot, and Zendesk — covering 80% of the market. Enhanced usability by 40%. Owned the product surface end to end.',
  },
  {
    period: 'July 2022 — July 2023',
    role: 'Engineer Trainee',
    company: 'EnableX',
    status: 'closed',
    tags: ['JavaScript', 'WebRTC', 'Ruby', 'Video APIs'],
    description:
      'Shipped a Ruby application server in two days from zero knowledge of the language. Built video API interfaces, SaaS product UIs, and learned that speed of learning matters more than prior knowledge.',
  },
  {
    period: 'May — June 2021',
    role: 'Frontend Developer',
    company: 'Teach For India',
    companyUrl: undefined,
    status: 'closed',
    tags: ['HTML', 'CSS', 'Web Design'],
    description:
      'Designed and built a campaign web interface for a high-impact education initiative. My first professional experience understanding that good design is invisible.',
  },
  {
    period: '2020',
    role: 'Started learning to build for the web',
    company: null,
    status: 'milestone',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: '',
  },
  {
    period: '2019',
    role: 'B.Sc. (Hons.) Computer Science',
    company: 'Shaheed Sukhdev College, University of Delhi',
    status: 'milestone',
    tags: ['CS', 'Physics', 'Mathematics'],
    description: '',
  },
]

export default function Journey() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <SectionReveal className="mb-20">
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-6">
            — 005 &nbsp; The Journey
          </p>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            How I Got Here
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            Not a résumé. A sequence of decisions that compounds into who I am now.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-line hidden md:block" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className={`relative md:pl-12 ${i < milestones.length - 1 ? 'pb-12' : ''}`}>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 -translate-x-1/2 hidden md:block">
                    {m.status === 'active' ? (
                      <span className="flex w-3 h-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                      </span>
                    ) : m.status === 'milestone' ? (
                      <span className="w-2 h-2 rounded-full border border-line block bg-canvas" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-text-lo block" />
                    )}
                  </div>

                  <div className={`${m.status === 'milestone' ? 'py-4' : 'glass-card p-7 hover:border-accent/20 transition-colors duration-300'}`}>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                          {m.period}
                        </p>
                        <h3
                          className={`font-serif leading-tight ${m.status === 'milestone' ? 'text-text-md' : 'text-text-hi'}`}
                          style={{ fontSize: m.status === 'milestone' ? '1rem' : 'clamp(1.1rem, 2vw, 1.4rem)' }}
                        >
                          {m.role}
                        </h3>
                        {m.company && (
                          <p className={`text-sm font-sans mt-1 ${m.status === 'active' ? 'text-accent' : 'text-text-md'}`}>
                            {m.company}
                          </p>
                        )}
                      </div>

                      {m.status === 'active' && (
                        <div className="flex items-center gap-2 self-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                          <span className="text-accent text-xs tracking-widest uppercase font-sans">
                            Now
                          </span>
                        </div>
                      )}
                    </div>

                    {m.description && (
                      <p className="text-text-md text-sm leading-loose font-sans mb-4">
                        {m.description}
                      </p>
                    )}

                    {m.tags.length > 0 && m.status !== 'milestone' && (
                      <div className="flex flex-wrap gap-2">
                        {m.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-text-lo text-xs tracking-widest uppercase font-sans border border-line px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
