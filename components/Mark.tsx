import type { ReactNode } from 'react'

/**
 * Hand-drawn emphasis on a word: a highlighter stroke swept behind it, or a
 * loose pen circle drawn around it. Pure SVG + CSS (no JS), so the text is
 * there instantly and the mark animates in on top. Respects reduced motion.
 *
 *   <Mark>design</Mark>                      highlighter (default)
 *   <Mark variant="circle">design</Mark>     circled
 *   <Mark delay={0.35}>experience</Mark>     stagger multiple marks
 */
export default function Mark({
  children,
  variant = 'highlight',
  delay = 0,
}: {
  children: ReactNode
  variant?: 'highlight' | 'circle'
  delay?: number
}) {
  const style = { animationDelay: `${0.4 + delay}s` }

  if (variant === 'circle') {
    return (
      <span className="mark-circle relative isolate mx-[0.22em] inline-block whitespace-nowrap text-text-hi">
        <svg
          aria-hidden
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -left-[0.35em] -right-[0.35em] -top-[0.3em] -bottom-[0.25em] -z-10 h-[calc(100%+0.55em)] w-[calc(100%+0.7em)] overflow-visible"
        >
          {/* one continuous stroke that overshoots its start, like a real pen */}
          <path
            pathLength={1}
            style={style}
            d="M150 9 C 110 1, 40 3, 16 22 C -6 40, 12 68, 70 75 C 130 82, 192 70, 196 44 C 200 20, 160 6, 96 8 C 70 9, 52 13, 40 18"
          />
        </svg>
        {children}
      </span>
    )
  }

  return (
    <span className="mark-hl relative isolate inline-block whitespace-nowrap text-text-hi">
      <svg
        aria-hidden
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -left-[0.18em] bottom-[0.04em] -z-10 h-[0.92em] w-[calc(100%+0.36em)]"
        style={style}
      >
        {/* slightly ragged marker edges and a tilt, so it reads as hand-drawn */}
        <path d="M1.5 5.2 C 18 2.6, 52 3.4, 98.6 1.8 L 99.2 20.6 C 70 22.4, 30 21.2, 0.8 23.2 Z" />
      </svg>
      {children}
    </span>
  )
}
