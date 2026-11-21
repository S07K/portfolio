'use client'

import { useEffect, useRef, useState } from 'react'
import { preload } from 'react-dom'
import { reel, site } from '@/lib/content'

const FPS = 24

function formatTimecode(seconds: number) {
  const total = Math.floor(seconds * FPS)
  const f = total % FPS
  const s = Math.floor(total / FPS)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`
}

function Corner({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-3 w-3 border-[#ededed]/70 sm:h-4 sm:w-4 ${className}`} />
}

export default function Reel() {
  // Poster is the LCP element - fetch it early.
  preload(reel.poster, { as: 'image', fetchPriority: 'high' })

  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const tcRef = useRef<HTMLSpanElement>(null)
  const [playing, setPlaying] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  // Respect reduced motion: never autoplay, show the poster still.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Play only while on screen, not reduced-motion, and not paused by the user.
  useEffect(() => {
    const v = videoRef.current
    const wrap = wrapRef.current
    if (!v || !wrap) return
    if (reduced || userPaused) {
      v.pause()
      return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    })
    io.observe(wrap)
    return () => io.disconnect()
  }, [reduced, userPaused])

  // Running timecode - accumulates across loops like a camera that keeps rolling.
  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    let elapsed = Number(tcRef.current?.dataset.elapsed ?? 0)
    const tick = (now: number) => {
      elapsed += (now - last) / 1000
      last = now
      if (tcRef.current) {
        tcRef.current.textContent = formatTimecode(elapsed)
        tcRef.current.dataset.elapsed = String(elapsed)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  const live = playing && !reduced

  return (
    <div className="relative z-[2] mx-auto w-full max-w-[880px] px-4 sm:px-6">
      <div
        ref={wrapRef}
        className="relative aspect-[2.39/1] w-full overflow-hidden bg-black ring-1 ring-line"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={reel.webm} type="video/webm" />
          <source src={reel.mp4} type="video/mp4" />
        </video>

        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />

        {/* Viewfinder */}
        <div className="absolute inset-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#ededed]/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.6)] sm:inset-4 sm:text-[10.5px]">
          <Corner className="left-0 top-0 border-l border-t" />
          <Corner className="right-0 top-0 border-r border-t" />
          <Corner className="bottom-0 left-0 border-b border-l" />
          <Corner className="bottom-0 right-0 border-b border-r" />

          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            disabled={reduced}
            aria-label={userPaused ? 'Play reel' : 'Pause reel'}
            className="absolute left-3 top-2 flex items-center gap-1.5 disabled:cursor-default sm:left-5 sm:top-3"
          >
            {live ? (
              <>
                <span className="rec-dot h-[7px] w-[7px] rounded-full bg-[#ef4444]" />
                <span>REC</span>
              </>
            ) : (
              <>
                <span className="h-[7px] w-[7px] rounded-full border border-[#ededed]/70" />
                <span>{reduced ? 'STILL' : 'STBY'}</span>
              </>
            )}
          </button>

          <span ref={tcRef} className="absolute right-3 top-2 tabular-nums sm:right-5 sm:top-3" aria-hidden>
            00:00:00:00
          </span>
          <span className="absolute bottom-2 left-3 sm:bottom-3 sm:left-5" aria-hidden>
            {FPS} FPS <span className="mx-1 opacity-50">·</span> ISO 400
          </span>
          <span className="absolute bottom-2 right-3 sm:bottom-3 sm:right-5" aria-hidden>
            {site.location}
          </span>
          {/* Center reticle */}
          <span aria-hidden className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-[#ededed]/35" />
          <span aria-hidden className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-[#ededed]/35" />
        </div>
      </div>
      <p className="meta mt-2 flex justify-between gap-4 px-3 sm:px-4">
        <span>Reel - shot &amp; graded by me</span>
        <span>2.39 : 1</span>
      </p>
    </div>
  )
}
