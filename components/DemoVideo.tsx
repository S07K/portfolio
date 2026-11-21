'use client'

import { useEffect, useRef, useState } from 'react'

const FPS = 30

function timecode(s: number) {
  const pad = (n: number) => String(n).padStart(2, '0')
  const f = Math.floor((s % 1) * FPS)
  const t = Math.floor(s)
  return `${pad(Math.floor(t / 3600))}:${pad(Math.floor(t / 60) % 60)}:${pad(t % 60)}:${pad(f)}`
}

/**
 * Case-study demo in the site's letterbox frame.
 * - Muted, looping, plays only while in view; poster shows first.
 * - Native controls appear on hover / keyboard focus (always on touch).
 * - Reduced motion: poster only, never autoplays.
 * - Corner metadata: REC + running timecode, like the hero reel.
 */
export default function DemoVideo({
  mp4,
  webm,
  poster,
  title,
}: {
  mp4: string
  webm?: string
  poster: string
  title: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const tcRef = useRef<HTMLSpanElement>(null)
  const [reduced, setReduced] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [touch, setTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    setTouch(window.matchMedia('(hover: none)').matches)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Play only while on screen (and never under reduced motion).
  useEffect(() => {
    const v = videoRef.current
    const wrap = wrapRef.current
    if (!v || !wrap || reduced) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [reduced])

  // Timecode follows the video's own clock.
  useEffect(() => {
    if (!playing) return
    let raf = 0
    const tick = () => {
      const v = videoRef.current
      if (v && tcRef.current) tcRef.current.textContent = timecode(v.currentTime)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  const label = 'font-mono text-[10px] uppercase tracking-[0.12em] text-[#ededed]/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.7)]'

  return (
    <figure>
      <div
        ref={wrapRef}
        className="film-frame group relative aspect-[16/10] bg-black"
        onPointerEnter={() => setShowControls(true)}
        onPointerLeave={() => setShowControls(false)}
        onFocus={() => setShowControls(true)}
        onBlur={() => setShowControls(false)}
      >
        {reduced ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={`${title} demo (still)`} className="absolute inset-0 h-full w-full object-contain" />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            controls={touch || showControls}
            aria-label={`${title} product demo`}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={mp4} type="video/mp4" />
            {webm ? <source src={webm} type="video/webm" /> : null}
          </video>
        )}

        {/* soft scrim so the labels read on light product UIs */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/55 to-transparent" />
        {/* viewfinder metadata, top corners only so it never covers the controls */}
        <div aria-hidden className="pointer-events-none absolute inset-x-3 top-2.5 flex justify-between sm:inset-x-4 sm:top-3">
          <span className={`${label} flex items-center gap-1.5`}>
            <span className={`h-[7px] w-[7px] rounded-full ${playing ? 'rec-dot bg-[#ef4444]' : 'border border-[#ededed]/70'}`} />
            {playing ? 'REC' : reduced ? 'STILL' : 'STBY'}
          </span>
          <span ref={tcRef} className={`${label} tabular-nums`}>
            00:00:00:00
          </span>
        </div>
      </div>
      <figcaption className="meta mt-2 flex justify-between gap-4 px-3 text-[10px] sm:px-4">
        <span>{title} - product demo</span>
        <span>Muted · {touch ? 'tap' : 'hover'} for controls</span>
      </figcaption>
    </figure>
  )
}
