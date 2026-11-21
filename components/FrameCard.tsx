'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, type CSSProperties } from 'react'
import type { Project } from '@/lib/content'
import { ArrowUpRight, GitHubIcon, GlobeIcon } from './Icons'
import ProductLogo, { hasLogo } from './ProductLogo'

function frameTimecode(n: number) {
  // Deterministic, plausible-looking slate timecode per frame.
  const pad = (x: number) => String(x).padStart(2, '0')
  return `00:${pad(n)}:${pad((n * 17 + 8) % 60)}:${pad((n * 7 + 3) % 24)}`
}

export default function FrameCard({
  project,
  frame,
  featured = false,
}: {
  project: Project
  frame: number
  featured?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [clipReady, setClipReady] = useState(false)
  const [clipFailed, setClipFailed] = useState(false)
  const canClip = Boolean(project.clip) && !clipFailed

  const start = () => {
    const v = videoRef.current
    if (!v || !canClip) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return
    if (!v.src) v.src = project.clip!
    v.play().catch(() => {})
  }
  const stop = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setClipReady(false)
  }

  const caseHref = project.slug ? `/work/${project.slug}` : undefined
  const tint = { '--h': project.tint[0], '--s': project.tint[1] } as CSSProperties

  return (
    <article data-reveal className="group" onPointerEnter={start} onPointerLeave={stop}>
      <div className="meta mb-1.5 flex items-center justify-between text-[10px]">
        <span>FR {String(frame).padStart(3, '0')}</span>
        <span className="tabular-nums">{frameTimecode(frame)}</span>
      </div>

      {/* Tinted panel with the screenshot centered; lifts on hover */}
      <div
        style={tint}
        className={`tint-panel relative overflow-hidden rounded-[10px] border border-line/60 ${
          featured ? 'aspect-[16/10]' : 'aspect-[16/10]'
        }`}
      >
        {caseHref ? (
          <Link href={caseHref} tabIndex={-1} aria-hidden className="absolute inset-0 z-[2]" />
        ) : null}
        <div
          className="tint-shot absolute inset-x-[6%] top-[21%] aspect-[16/10] overflow-hidden rounded-t-[8px] bg-raised ring-1 ring-black/10"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={featured ? '(max-width: 728px) 85vw, 560px' : '(max-width: 640px) 85vw, 270px'}
            className={`object-cover object-top transition-opacity duration-300 ${clipReady ? 'opacity-0' : ''}`}
          />
          {project.clip ? (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden
              tabIndex={-1}
              onPlaying={() => setClipReady(true)}
              onError={() => setClipFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                clipReady ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          {hasLogo(project.name) ? (
            <ProductLogo name={project.name} className="h-[22px] w-[22px] shrink-0" />
          ) : null}
          <h3 className={`font-serif leading-none text-text-hi ${featured ? 'text-[30px]' : 'text-[24px]'}`}>
            {caseHref ? (
              <Link href={caseHref} className="underline-offset-4 hover:underline">
                {project.name}
              </Link>
            ) : (
              project.name
            )}
          </h3>
          {project.live ? (
            <span className="meta flex items-center gap-1.5 text-[10px] text-text-md">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
              Live
            </span>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {project.site ? (
            <a
              href={project.site.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} - ${project.site.label}`}
              title={project.site.label}
              className="grid h-8 w-8 place-items-center text-text-lo transition-colors hover:text-text-hi"
            >
              <GlobeIcon className="h-4 w-4" />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              title="Source on GitHub"
              className="grid h-8 w-8 place-items-center text-text-lo transition-colors hover:text-text-hi"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <p className={`mt-2 text-text-md ${featured ? 'text-[15px]' : 'text-[14px]'}`}>{project.summary}</p>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <ul className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Tags">
          {project.tags.map((t) => (
            <li key={t} className="meta text-[10px]">
              {t}
            </li>
          ))}
        </ul>
        {caseHref ? (
          <Link
            href={caseHref}
            className="meta inline-flex items-center gap-1 text-text-hi underline-offset-4 hover:underline"
          >
            Case study <ArrowUpRight className="h-3 w-3" />
          </Link>
        ) : null}
      </div>
    </article>
  )
}
