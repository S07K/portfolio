import { Children, type ReactNode } from 'react'

/**
 * Two-column grid of bordered cells. On sm+ it bleeds out to the vertical
 * grid lines so the cell borders join the page grid.
 *
 * When the item count is odd, the last row has an empty slot. If a `filler`
 * is given it fills that slot (two-column layout only, since a single column
 * has no gap); otherwise a hatched cell closes the grid.
 */
export default function CellGrid({ children, filler }: { children: ReactNode; filler?: ReactNode }) {
  const items = Children.toArray(children)
  const odd = items.length % 2 === 1

  return (
    <div className="bleed-rail grid border-t border-line sm:grid-cols-2">
      {items.map((child, i) => (
        <div key={i} className="border-b border-line py-8 sm:p-6 sm:[&:nth-child(odd)]:border-r">
          {child}
        </div>
      ))}
      {odd ? (
        filler ? (
          <div className="hidden border-b border-line sm:block sm:p-6">{filler}</div>
        ) : (
          <div aria-hidden className="cell-hatch hidden border-b border-line sm:block" />
        )
      ) : null}
    </div>
  )
}
