'use client'

import SectionReveal from './SectionReveal'
import OneAlbumLogo from './OneAlbumLogo'

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <SectionReveal className="flex items-center gap-4 mb-16">
          <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
            — 002 &nbsp; Currently Building
          </span>
          <div className="flex items-center gap-2 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-accent text-xs tracking-widest uppercase font-sans">
              Live
            </span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left — context */}
          <SectionReveal delay={0.1}>
            <p className="font-serif italic text-text-md leading-relaxed mb-8 max-w-lg"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              "I left a stable engineering career to find out who I actually am outside of it. OneAlbum is one of the things I&apos;m building."
            </p>
            <p className="text-text-md text-sm leading-loose font-sans max-w-lg">
              After four years shipping features for companies — EnableX, Paytm —
              I stepped away to explore on my own terms. Building products,
              making content, figuring out what sticks. OneAlbum is the first real
              product bet in that chapter. Early, and entirely mine.
            </p>
          </SectionReveal>

          {/* Right — OneAlbum card */}
          <SectionReveal delay={0.2}>
            <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">

              {/* Status badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
                  In Progress
                </span>
              </div>

              {/* Logo */}
              <div className="mb-8">
                <OneAlbumLogo markClassName="w-10 h-10" wordClassName="text-3xl" />
                <p className="text-text-lo text-sm font-serif italic mt-3">
                  One album for every moment.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                    The Spark
                  </p>
                  <p className="text-text-md text-sm leading-loose font-sans">
                    A gap in how people organize and share their visual memories.
                    Something between a private journal and a curated gallery —
                    built for depth, not engagement metrics.
                  </p>
                </div>

                <div className="w-full h-px bg-line" />

                <div>
                  <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                    The Role
                  </p>
                  <p className="text-text-md text-sm leading-loose font-sans">
                    Founder, product designer, engineer. Every decision is mine.
                    Every mistake is mine. That&apos;s the point.
                  </p>
                </div>

                <div className="w-full h-px bg-line" />

                <div className="flex flex-wrap gap-2 pt-1">
                  {['Next.js', 'TypeScript', 'Founder Mode'].map((tag) => (
                    <span
                      key={tag}
                      className="text-text-lo text-xs tracking-widest uppercase font-sans border border-line px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-line" />

                <a
                  href="https://onealbum.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-accent text-sm font-sans tracking-wide hover:opacity-80 transition-opacity"
                >
                  Visit onealbum.app
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
