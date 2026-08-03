'use client'

import { ReactNode } from 'react'
import SectionReveal from './SectionReveal'
import OneAlbumLogo from './OneAlbumLogo'

interface ProductCardProps {
  wordmark: ReactNode
  tagline: string
  spark: string
  role: string
  tags: string[]
  status?: string
  links?: { label: string; href: string }[]
  delay?: number
}

function ProductCard({ wordmark, tagline, spark, role, tags, status = 'In Progress', links, delay = 0 }: ProductCardProps) {
  return (
    <SectionReveal delay={delay}>
      <div className="glass-card h-full p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">

        {/* Status badge */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
            {status}
          </span>
        </div>

        {/* Wordmark */}
        <div className="mb-8">
          {wordmark}
          <p className="text-text-lo text-sm font-serif italic mt-3">
            {tagline}
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
              The Spark
            </p>
            <p className="text-text-md text-sm leading-loose font-sans">
              {spark}
            </p>
          </div>

          <div className="w-full h-px bg-line" />

          <div>
            <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
              The Role
            </p>
            <p className="text-text-md text-sm leading-loose font-sans">
              {role}
            </p>
          </div>

          <div className="w-full h-px bg-line" />

          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-text-lo text-xs tracking-widest uppercase font-sans border border-line px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {links && links.length > 0 && (
            <>
              <div className="w-full h-px bg-line" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-accent text-sm font-sans tracking-wide hover:opacity-80 transition-opacity"
                  >
                    {l.label}
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </SectionReveal>
  )
}

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

        {/* Lead — context */}
        <SectionReveal delay={0.1} className="mb-14 max-w-2xl">
          <p className="font-serif italic text-text-md leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            "I left a stable engineering career to find out who I actually am outside of it. Building my own startups is one of the ways I&apos;m finding out."
          </p>
          <p className="text-text-md text-sm leading-loose font-sans">
            After four years shipping features for companies — EnableX, Paytm —
            I stepped away to explore on my own terms. Building products,
            making content, figuring out what sticks. A couple of early product
            bets so far — entirely mine.
          </p>
        </SectionReveal>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          <ProductCard
            delay={0.15}
            status="Live"
            wordmark={<OneAlbumLogo markClassName="w-10 h-10" wordClassName="text-3xl" />}
            tagline="One album for every moment."
            spark="A gap in how people organize and share their visual memories. Something between a private journal and a curated gallery — built for depth, not engagement metrics."
            role="Founder, product designer, engineer. Every decision is mine. Every mistake is mine. That's the point."
            tags={['Next.js', 'TypeScript', 'Founder Mode']}
            links={[
              { label: 'Get it on Google Play', href: 'https://play.google.com/store/apps/details?id=com.joinonealbum.app' },
              { label: 'onealbum.app', href: 'https://onealbum.app' },
            ]}
          />

          <ProductCard
            delay={0.25}
            wordmark={
              <span className="font-serif text-text-hi leading-none block" style={{ fontSize: '2rem' }}>
                Kitevo
              </span>
            }
            tagline="The media kit that keeps itself current."
            spark="Every creator pitching a brand hits the same wall — the media kit is a PDF, and a PDF is out of date the moment it's exported. Kitevo replaces it with a live link that pulls real numbers straight from Instagram and YouTube — followers, engagement, audience, growth — so a brand can trust what it's looking at."
            role="Founder and builder, in public. Sharing the progress, the design decisions, and the occasional thing that went wrong."
            tags={['Creator Economy', 'Live Data', 'Building in Public']}
          />

        </div>
      </div>
    </section>
  )
}
