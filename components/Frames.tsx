'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Frame } from '@/lib/content'

function Sprockets() {
  return (
    <div
      aria-hidden
      className="h-3.5 w-full"
      style={{
        backgroundImage:
          'linear-gradient(to right, transparent 5px, #3a3a3a 5px, #3a3a3a 13px, transparent 13px)',
        backgroundSize: '18px 7px',
        backgroundPosition: '0 center',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

const exif = (f: Frame) => `${f.lens} · ${f.aperture} · ${f.shutter} · ISO ${f.iso}`

export default function Frames({ frames }: { frames: Frame[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number, el: HTMLButtonElement) => {
    openerRef.current = el
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const close = useCallback(() => dialogRef.current?.close(), [])
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + frames.length) % frames.length)),
    [frames.length],
  )

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    const onClose = () => {
      setIndex(null)
      openerRef.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    dlg.addEventListener('close', onClose)
    dlg.addEventListener('keydown', onKey)
    return () => {
      dlg.removeEventListener('close', onClose)
      dlg.removeEventListener('keydown', onKey)
    }
  }, [step])

  const current = index === null ? null : frames[index]

  return (
    <>
      <div data-reveal className="-mx-4 bg-[#141414] px-3 sm:mx-0 sm:px-3">
        <Sprockets />
        <ul className="grid grid-cols-2 gap-2 py-1 sm:grid-cols-4">
          {frames.map((f, i) => (
            <li key={f.src}>
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                className="group block w-full text-left"
                aria-label={`Open photo ${i + 1}: ${f.alt}`}
              >
                <span className="relative block aspect-[4/5] overflow-hidden bg-black">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 165px"
                    className="object-cover opacity-90 transition duration-300 group-hover:opacity-100 motion-safe:group-hover:scale-[1.03]"
                  />
                </span>
                <span className="mt-1.5 flex items-baseline justify-between gap-2 font-mono text-[9.5px] uppercase tracking-[0.06em] text-[#9a9a9a]">
                  <span className="text-[#ededed]">{String(i + 1).padStart(2, '0')}A</span>
                  <span className="truncate">
                    {f.lens} {f.aperture} {f.shutter}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <Sprockets />
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox m-0 h-full w-full bg-transparent p-0 text-[#ededed] backdrop:bg-black/90"
        aria-label="Photo viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        {current ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="relative h-[78vh] w-full max-w-5xl">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="flex w-full max-w-5xl items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#9a9a9a]">
              <button type="button" onClick={() => step(-1)} className="px-2 py-1 hover:text-[#ededed]" aria-label="Previous photo">
                ← Prev
              </button>
              <p className="text-center" aria-live="polite">
                <span className="text-[#ededed]">{String(index! + 1).padStart(2, '0')}A</span>
                <span className="mx-2">·</span>
                {exif(current)}
                {current.place ? <span className="hidden sm:inline"> · {current.place}</span> : null}
              </p>
              <button type="button" onClick={() => step(1)} className="px-2 py-1 hover:text-[#ededed]" aria-label="Next photo">
                Next →
              </button>
            </div>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="absolute right-4 top-4 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#9a9a9a] hover:text-[#ededed]"
            >
              Close ✕
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
