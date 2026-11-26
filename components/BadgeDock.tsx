'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import QRCode from 'qrcode'
import LanyardBadge from '@/components/ui/lanyard-badge'
import { useTheme } from './ThemeProvider'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { featured, links, site } from '@/lib/content'
import ProductLogo from './ProductLogo'

/*
 * A crew-pass badge that drops in on a lanyard in the left gutter once the
 * intro has scrolled out of view. Desktop only: it lives outside the vertical
 * grid lines, so it needs a gutter wide enough to hang in.
 *
 * Front: clapperboard band, avatar, name, role, barcode.
 * Back:  bio, tags, clickable contact links and a QR code to the site.
 */

const RAIL = 832 // keep in sync with --rail in globals.css
const MIN_GUTTER = 210

type Palette = { card: string; ink: string; soft: string; line: string; band: string; hatch: string }

/** Solid header band with faint hairline diagonals, like a printed ID card. */
const band = (p: Palette) =>
  `repeating-linear-gradient(-45deg, ${p.hatch} 0 1px, transparent 1px 0.55em), linear-gradient(180deg, rgb(255 255 255 / 0.06), transparent 70%), ${p.band}`

/**
 * A link that works inside the draggable card. The badge listens for native
 * pointerdown on the card to start a drag / flip, so stop it here natively
 * (React's synthetic stopPropagation runs too late for a native listener).
 */
function CardLink({ href, children }: { href: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const stop = (e: Event) => e.stopPropagation()
    el.addEventListener('pointerdown', stop)
    return () => el.removeEventListener('pointerdown', stop)
  }, [])
  const external = href.startsWith('http')
  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onKeyDown={(e) => e.stopPropagation()} // Enter opens the link, not a flip
      className="flex items-center gap-[0.55em] underline-offset-2 hover:underline"
      style={{ cursor: 'pointer' }}
    >
      {children}
    </a>
  )
}

function QR({ value, color }: { value: string; color: string }) {
  const { size, path } = useMemo(() => {
    const q = QRCode.create(value, { errorCorrectionLevel: 'M' })
    const n = q.modules.size
    let d = ''
    for (let y = 0; y < n; y++)
      for (let x = 0; x < n; x++) if (q.modules.get(x, y)) d += `M${x} ${y}h1v1h-1z`
    return { size: n, path: d }
  }, [value])
  return (
    <svg viewBox={`-1 -1 ${size + 2} ${size + 2}`} shapeRendering="crispEdges" className="h-full w-full" aria-hidden>
      <path d={path} fill={color} />
    </svg>
  )
}

function Barcode({ ink }: { ink: string }) {
  // Deterministic bar widths, so the barcode is identical on every render.
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 1]
  return (
    <div className="flex h-full items-stretch justify-center gap-[0.11em]" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} style={{ width: `${w * 0.075}em`, background: i % 2 ? 'transparent' : ink }} />
      ))}
    </div>
  )
}

function Front({ cw, p }: { cw: number; p: Palette }) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center text-center"
      style={{ background: p.card, color: p.ink, fontSize: cw / 15, boxShadow: `inset 0 0 0 1px ${p.line}` }}
    >
      {/* clapperboard band */}
      <div className="w-full" style={{ height: '3.4em', background: band(p) }} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/avatar.png"
        alt=""
        draggable={false}
        className="rounded-full"
        style={{
          width: '5.8em',
          height: '5.8em',
          marginTop: '-2.9em',
          background: p.card,
          boxShadow: `0 0 0 0.22em ${p.card}, 0 0 0 0.3em ${p.line}`,
        }}
      />

      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="font-serif" style={{ fontSize: '1.8em', lineHeight: 1 }}>
          {site.name}
        </p>
        <p className="mt-[0.35em]" style={{ fontSize: '0.72em', color: p.soft }}>
          {site.title}
        </p>
        <p className="mt-[0.9em] font-mono uppercase" style={{ fontSize: '0.46em', letterSpacing: '0.22em' }}>
          Independent · Delhi
        </p>
        <p
          className="mt-[1.1em] inline-flex items-center gap-[0.5em] rounded-full font-mono"
          style={{ fontSize: '0.46em', padding: '0.5em 1.1em', border: `1px solid ${p.line}`, letterSpacing: '0.04em' }}
        >
          <span className="inline-block rounded-full" style={{ width: '0.9em', height: '0.9em', background: '#22c55e' }} />
          Open to roles · Remote
        </p>
      </div>

      <div className="w-full px-[1.1em] pb-[0.8em]">
        <div style={{ height: '1.9em' }}>
          <Barcode ink={p.ink} />
        </div>
        <p className="mt-[0.35em] font-mono" style={{ fontSize: '0.42em', letterSpacing: '0.3em', color: p.soft }}>
          SK 0700 2026
        </p>
      </div>
    </div>
  )
}

function Back({ cw, p }: { cw: number; p: Palette }) {
  const building = featured.map((f) => ({ name: f.name, href: f.site!.href }))
  const contact = [
    { label: 'Email', href: `mailto:${site.email}`, Icon: MailIcon },
    { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
    { label: 'GitHub', href: links.github, Icon: GitHubIcon },
    { label: 'Resume', href: links.resume, Icon: FileIcon },
  ]
  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ background: p.card, color: p.ink, fontSize: cw / 15, boxShadow: `inset 0 0 0 1px ${p.line}` }}
    >
      <div className="w-full" style={{ height: '1.5em', background: band(p) }} />

      <div className="flex flex-1 flex-col px-[1.05em] pb-[0.95em] pt-[0.9em]">
        <p className="font-serif" style={{ fontSize: '1.35em', lineHeight: 1 }}>
          {site.name}
        </p>
        <p className="mt-[0.25em]" style={{ fontSize: '0.6em', color: p.soft }}>
          {site.title}
        </p>

        <p className="mt-[0.8em]" style={{ fontSize: '0.6em', lineHeight: 1.45 }}>
          Designs and builds AI products end to end, from the interface people use to the agents behind it.
        </p>

        <div className="mt-[0.8em] flex flex-wrap gap-[0.4em]">
          {['AI products', 'Design eng', 'Since 2022'].map((t) => (
            <span
              key={t}
              className="rounded-full font-mono"
              style={{ fontSize: '0.42em', padding: '0.4em 0.9em', border: `1px solid ${p.line}`, letterSpacing: '0.04em' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-[1.1em]" style={{ borderTop: `1px dashed ${p.line}`, paddingTop: '0.8em' }}>
          <p className="font-mono uppercase" style={{ fontSize: '0.4em', letterSpacing: '0.2em', color: p.soft }}>
            Now building
          </p>
          <ul className="mt-[0.55em] space-y-[0.45em]" style={{ fontSize: '0.58em' }}>
            {building.map((b) => (
              <li key={b.name}>
                <CardLink href={b.href}>
                  <ProductLogo name={b.name} className="h-[1.15em] w-[1.15em]" />
                  {b.name}
                </CardLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-end justify-between gap-[0.6em]">
          <ul className="space-y-[0.5em]" style={{ fontSize: '0.56em' }}>
            {contact.map(({ label, href, Icon }) => (
              <li key={label}>
                <CardLink href={href}>
                  <Icon className="h-[1.05em] w-[1.05em]" />
                  {label}
                </CardLink>
              </li>
            ))}
          </ul>
          <div className="shrink-0 rounded-[0.35em] bg-white p-[0.25em]" style={{ width: '4.1em', height: '4.1em' }}>
            <QR value={site.url} color="#000" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BadgeDock() {
  const { theme } = useTheme()
  const [past, setPast] = useState(false)
  const [gutter, setGutter] = useState(0)

  // Show once the intro is fully above the viewport.
  useEffect(() => {
    const el = document.getElementById('intro')
    if (!el) return
    const io = new IntersectionObserver(([e]) => setPast(!e.isIntersecting && e.boundingClientRect.top < 0))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      setGutter((w - Math.min(w - 48, RAIL)) / 2)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Never on small screens (MiniBadge shows inline there), and only with room to hang.
  if (gutter < MIN_GUTTER || gutter * 2 + RAIL < 1024) return null

  const cw = Math.round(Math.min(200, gutter - 56))
  // The card is a raised surface in the page's own theme; the strap contrasts
  // with the page so the lanyard reads at a glance.
  const p: Palette =
    theme === 'dark'
      ? { card: '#171717', ink: '#f2f2f2', soft: '#9a9a9a', line: '#2f2f2f', band: '#2b2b2b', hatch: 'rgb(255 255 255 / 0.07)' }
      : { card: '#ffffff', ink: '#111111', soft: '#6b6b6b', line: '#dddddd', band: '#161616', hatch: 'rgb(255 255 255 / 0.09)' }
  const strap =
    theme === 'dark' ? { strapColor: '#e9e6df', inkColor: '#1a1a1a' } : { strapColor: '#161616', inkColor: '#d9d6cf' }

  return (
    <div
      aria-hidden={!past}
      className="badge-dock pointer-events-none fixed left-0 top-0 z-30 transition-opacity duration-300"
      style={{ width: gutter, height: '100svh', opacity: past ? 1 : 0 }}
    >
      {/* Mount on reveal so it drops in mid-swing each time */}
      {past ? (
        <LanyardBadge
          key={theme}
          front={<Front cw={cw} p={p} />}
          back={<Back cw={cw} p={p} />}
          strapText=""
          strapLabel="AI PRODUCT ENGINEER"
          {...strap}
          cardWidth={cw}
          flipButton={false}
          height="100svh"
        />
      ) : null}
    </div>
  )
}
