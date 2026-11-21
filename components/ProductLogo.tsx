import type { ReactNode } from 'react'
import { GlobeIcon } from './Icons'

/*
 * Product marks in their real brand colours, redrawn from each product's own
 * app icon. Dark tiles get a faint hairline so they don't vanish on the dark
 * theme's near-black background.
 */
const round = { fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const K = 'M18 16 L36 16 L36 40 L58 16 L80 16 L50 50 L84 84 L64 84 L36 58 L36 84 L18 84 Z'

function Tile({ size, rx, fill }: { size: number; rx: number; fill: string }) {
  const inset = size / 64
  return (
    <>
      <rect width={size} height={size} rx={rx} fill={fill} />
      <rect
        x={inset}
        y={inset}
        width={size - inset * 2}
        height={size - inset * 2}
        rx={rx - inset}
        fill="none"
        stroke="rgb(255 255 255 / 0.14)"
        strokeWidth={inset * 2}
      />
    </>
  )
}

const marks: Record<string, { viewBox: string; body: ReactNode }> = {
  GuildOS: {
    viewBox: '0 0 32 32',
    body: (
      <>
        <Tile size={32} rx={9} fill="#315b46" />
        <g fill="#f4f8f4">
          <rect x="6" y="6" width="8" height="8" rx="2" />
          <rect x="18" y="6" width="8" height="10" rx="2" />
          <rect x="6" y="18" width="10" height="8" rx="2" />
        </g>
        <rect x="20" y="20" width="6" height="6" rx="2" fill="#a8c981" />
      </>
    ),
  },
  Kitevo: {
    viewBox: '0 0 100 100',
    body: (
      <>
        <Tile size={100} rx={22} fill="#111110" />
        <g transform="translate(50,50) scale(0.76) translate(-50,-50)">
          <g transform="translate(3.5,4.5)">
            <path d={K} transform="translate(-9,-9)" fill="#6366f1" />
            <path d={K} transform="translate(-4.5,-4.5)" fill="#c97b4b" />
            <path d={K} fill="#f5f3f0" />
          </g>
        </g>
      </>
    ),
  },
  OneAlbum: {
    viewBox: '0 0 32 32',
    body: (
      <>
        <Tile size={32} rx={7} fill="#0a0a0b" />
        <g transform="translate(5,5) scale(0.22)" fill="#f4f4f5">
          <circle cx="50" cy="18" r="4.6" />
          <circle cx="77.7" cy="34" r="4.6" />
          <circle cx="77.7" cy="66" r="4.6" />
          <circle cx="50" cy="82" r="4.6" />
          <circle cx="22.3" cy="66" r="4.6" />
          <circle cx="22.3" cy="34" r="4.6" />
          <rect x="37" y="37" width="26" height="26" rx="7" />
        </g>
      </>
    ),
  },
  Cutaway: {
    viewBox: '0 0 32 32',
    body: (
      <>
        <Tile size={32} rx={8} fill="#5b7cfa" />
        <path d="M21 11.4a7 7 0 1 0 0 9.2" stroke="#ffffff" strokeWidth="3.2" {...round} />
      </>
    ),
  },
  'Task Tracker': {
    viewBox: '0 0 32 32',
    body: (
      <>
        <Tile size={32} rx={8} fill="#111827" />
        <path d="M10 16.5l4 4 8-9" stroke="#ffffff" strokeWidth="3" {...round} />
      </>
    ),
  },
}

/** True when the product has a real logo (not just a generic fallback). */
export const hasLogo = (name: string) => name in marks

export default function ProductLogo({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const mark = marks[name]
  if (!mark) return <GlobeIcon className={className} />
  return (
    <svg viewBox={mark.viewBox} className={className} aria-hidden focusable="false">
      {mark.body}
    </svg>
  )
}
