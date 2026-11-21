import { Children, type ReactNode } from 'react'

/**
 * Two-column grid of bordered cells. On sm+ it bleeds out to the vertical
 * grid lines so the cell borders join the page grid. An odd last row gets a
 * hatched filler cell so the grid always closes.
 */
export default function CellGrid({ children }: { children: ReactNode }) {
  const items = Children.toArray(children)
  const odd = items.length % 2 === 1

  return (
    <div className="bleed-rail grid border-t border-line sm:grid-cols-2">
      {items.map((child, i) => (
        <div key={i} className="border-b border-line py-8 sm:p-6 sm:[&:nth-child(odd)]:border-r">
          {child}
        </div>
      ))}
      {odd ? <div aria-hidden className="cell-hatch hidden border-b border-line sm:block" /> : null}
    </div>
  )
}
