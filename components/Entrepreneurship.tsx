'use client'

import { ReactNode } from 'react'
import SectionReveal from './SectionReveal'
import OneAlbumLogo from './OneAlbumLogo'

interface ProductLink {
  label: string
  href: string
  image?: { src: string; width: number; height: number; className?: string }
}

interface ProductCardProps {
  wordmark: ReactNode
  tagline: string
  description: string
  media: { src: string; alt: string }
  tags: string[]
  status?: string
  links?: ProductLink[]
  delay?: number
}

function ProductCard({
  wordmark,
  tagline,
  description,
  media,
  tags,
  status = 'Live',
  links,
  delay = 0,
}: ProductCardProps) {
  return (
    <SectionReveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden border border-line bg-surface/20 transition-colors duration-500 hover:border-accent/30">

        {/* Media */}
        <div className="relative aspect-[1.91/1] shrink-0 overflow-hidden border-b border-line bg-canvas">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.src}
            alt={media.alt}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute top-4 right-4 flex items-center gap-2 border border-line bg-canvas px-2.5 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-text-hi text-[9px] font-medium tracking-widest uppercase font-sans">
              {status}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div>
            {wordmark}
            <p className="mt-2 font-serif text-sm italic text-text-lo">
              {tagline}
            </p>
          </div>

          <p className="mt-4 text-text-md text-sm leading-relaxed font-sans">
            {description}
          </p>

          <div className="mt-auto pt-7">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-text-lo text-[10px] tracking-widest uppercase font-sans border border-line px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {links && links.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5">
                {links.map((link) =>
                  link.image ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={link.image.src}
                        alt={link.label}
                        width={link.image.width}
                        height={link.image.height}
                        className={link.image.className ?? 'h-9 w-auto'}
                      />
                    </a>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-accent text-xs font-sans tracking-wide transition-opacity hover:opacity-80"
                    >
                      {link.label}
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <SectionReveal className="mb-16">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
            <p className="text-text-lo text-xs tracking-widest uppercase font-sans">
              — 002 &nbsp; Founder Mode
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-accent text-xs tracking-widest uppercase font-sans">
                Building in public
              </span>
            </div>
          </div>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Entrepreneurship
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            A season of building on my own terms — no playbook, no safety net.
          </p>
        </SectionReveal>

        {/* Lead — context */}
        <SectionReveal delay={0.1} className="mb-14 max-w-2xl">
          <p className="font-serif italic text-text-md leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            "I left a stable engineering career to find out who I actually am outside of it. Building my own startups is one of the ways I&apos;m finding out."
          </p>
          <p className="text-text-md text-sm leading-loose font-sans">
            After four years shipping features for companies — EnableX, Paytm —
            I stepped away to build on my own. Taking the risk, learning in
            public, and seeing how far I can go before the runway ends.
          </p>
        </SectionReveal>

        {/* Startups */}
        <SectionReveal className="mb-8">
          <div className="flex items-center gap-6">
            <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
              The Startups
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <ProductCard
            delay={0.15}
            wordmark={<OneAlbumLogo markClassName="w-9 h-9" wordClassName="text-2xl" />}
            tagline="One album for every moment."
            description="One QR code puts everyone's event photos into a single shared album — built for depth, not engagement metrics."
            media={{ src: '/startups/onealbum.png', alt: 'OneAlbum landing page' }}
            tags={['Next.js', 'TypeScript', 'Founder Mode']}
            links={[
              {
                label: 'Download on the App Store',
                href: 'https://apps.apple.com/app/id6797670766',
                image: { src: '/app-store-badge.svg', width: 120, height: 40, className: 'h-9 w-auto' },
              },
              {
                label: 'Get it on Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.joinonealbum.app',
                image: { src: '/google-play-badge.png', width: 646, height: 250, className: 'h-10 w-auto' },
              },
              { label: 'onealbum.app', href: 'https://onealbum.app' },
            ]}
          />

          <ProductCard
            delay={0.25}
            wordmark={
              <span className="inline-flex items-center gap-3 text-text-hi">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/kitevo-icon.svg" alt="Kitevo" width={36} height={36} className="w-9 h-9" />
                <span className="font-serif leading-none text-2xl">Kitevo</span>
              </span>
            }
            tagline="The media kit that keeps itself current."
            description="A live media kit for creators — real Instagram and YouTube numbers in one link, so brands see current stats instead of an outdated PDF."
            media={{ src: '/startups/kitevo.png', alt: 'Kitevo landing page' }}
            tags={['Creator Economy', 'Live Data', 'Building in Public']}
            links={[{ label: 'getkitevo.com', href: 'https://getkitevo.com' }]}
          />

          <ProductCard
            delay={0.35}
            wordmark={
              <span className="inline-flex items-center gap-3 text-text-hi">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/guildos-icon.svg" alt="GuildOS" width={36} height={36} className="w-9 h-9" />
                <span className="font-serif leading-none text-2xl">GuildOS</span>
              </span>
            }
            tagline="Your AI creative studio."
            description="Launched in October 2026. An AI-powered design studio where specialist agents handle direction, UX, design, copy, and review, backed by a custom orchestration pipeline."
            media={{ src: '/startups/guildos.png', alt: 'GuildOS landing page' }}
            tags={['Next.js', 'AI Agents', 'Postgres']}
            links={[{ label: 'guildos.design', href: 'https://guildos.design' }]}
          />
        </div>
      </div>
    </section>
  )
}
