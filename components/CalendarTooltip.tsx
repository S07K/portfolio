'use client'

import { useRef, useState, type ReactNode } from 'react'

type Tip = { text: string; x: number; y: number }

/**
 * Instant hover popover for the contribution calendar. Uses one delegated
 * listener: any descendant with `data-tip` shows its text centred above it.
 * Lives outside the calendar's horizontal scroller so it never gets clipped.
 */
export default function CalendarTooltip({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tip, setTip] = useState<Tip | null>(null)

  const onOver = (e: React.PointerEvent) => {
    const cell = (e.target as HTMLElement).closest<HTMLElement>('[data-tip]')
    const box = ref.current
    if (!cell || !box) return setTip(null)
    const c = cell.getBoundingClientRect()
    const b = box.getBoundingClientRect()
    setTip({ text: cell.dataset.tip!, x: c.left + c.width / 2 - b.left, y: c.top - b.top })
  }

  return (
    <div ref={ref} className="relative" onPointerOver={onOver} onPointerLeave={() => setTip(null)}>
      {children}
      {tip ? (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-line bg-raised px-2.5 py-1.5 text-[12px] leading-none text-text-hi shadow-[0_6px_20px_-6px_rgb(0_0_0/0.5)]"
          style={{ left: tip.x, top: tip.y - 8 }}
        >
          {tip.text}
        </div>
      ) : null}
    </div>
  )
}
