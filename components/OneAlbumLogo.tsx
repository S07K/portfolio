'use client'

/**
 * OneAlbum brand lockup — network-node icon + serif wordmark.
 * Rendered inline (not a raster asset) so it stays crisp and adapts to
 * the site's light/dark theme via currentColor + CSS vars.
 */

function OneAlbumMark({ className = '' }: { className?: string }) {
  // 6 outer nodes forming a regular hexagon (point-up), matching the app icon:
  // vertical pair (N/S) at full radius, four corners at 60° increments.
  const cx = 256
  const cy = 256
  const R = 158
  const hx = R * Math.cos(Math.PI / 6) // ≈ 137 — horizontal offset of corners
  const hy = R * Math.sin(Math.PI / 6) // = 79  — vertical offset of corners
  const nodes = [
    { x: cx, y: cy - R }, // N
    { x: cx, y: cy + R }, // S
    { x: cx + hx, y: cy - hy }, // NE
    { x: cx - hx, y: cy - hy }, // NW
    { x: cx + hx, y: cy + hy }, // SE
    { x: cx - hx, y: cy + hy }, // SW
  ]

  return (
    <svg
      viewBox="76 76 360 360"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Spokes */}
      <g stroke="currentColor" strokeWidth={16} strokeLinecap="round" opacity={0.85}>
        {nodes.map((n, i) => {
          // Start each line just outside the central square, end just before the node.
          const dx = n.x - cx
          const dy = n.y - cy
          const len = Math.hypot(dx, dy)
          const ux = dx / len
          const uy = dy / len
          const start = 74
          const end = len - 38
          return (
            <line
              key={i}
              x1={cx + ux * start}
              y1={cy + uy * start}
              x2={cx + ux * end}
              y2={cy + uy * end}
            />
          )
        })}
      </g>

      {/* Outer nodes */}
      <g fill="currentColor">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={20} />
        ))}
      </g>

      {/* Center — stacked photo cards: back card offset up-right, white card front-left */}
      <rect
        x={212}
        y={196}
        width={104}
        height={104}
        rx={28}
        fill="currentColor"
        opacity={0.4}
      />
      <rect
        x={196}
        y={212}
        width={104}
        height={104}
        rx={28}
        fill="currentColor"
      />
      {/* Lens / sun dot punched out of the front card's top-left */}
      <circle cx={224} cy={240} r={14} style={{ fill: 'rgb(var(--canvas))' }} />
    </svg>
  )
}

export default function OneAlbumLogo({
  className = '',
  markClassName = 'w-9 h-9',
  wordClassName = 'text-2xl',
}: {
  className?: string
  markClassName?: string
  wordClassName?: string
}) {
  return (
    <span className={`inline-flex items-center gap-3 text-text-hi ${className}`}>
      <OneAlbumMark className={markClassName} />
      <span className={`font-serif leading-none ${wordClassName}`}>OneAlbum</span>
    </span>
  )
}
