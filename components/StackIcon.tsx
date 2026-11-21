import type { ReactNode } from 'react'
import {
  siApple,
  siCapacitor,
  siExpress,
  siFastapi,
  siFigma,
  siFramer,
  siGit,
  siGoogleplay,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRazorpay,
  siReact,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons'

// Brand marks (simple-icons, CC0), rendered monochrome via currentColor.
const brands: Record<string, SimpleIcon> = {
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  Tailwind: siTailwindcss,
  'Framer Motion': siFramer,
  'Node.js': siNodedotjs,
  Express: siExpress,
  FastAPI: siFastapi,
  Postgres: siPostgresql,
  Prisma: siPrisma,
  Supabase: siSupabase,
  Figma: siFigma,
  Git: siGit,
  Vercel: siVercel,
  Capacitor: siCapacitor,
  Stripe: siStripe,
  Razorpay: siRazorpay,
  // Store badges (used on case-study link pills)
  'App Store': siApple,
  'Google Play': siGoogleplay,
}

// Line icons for concepts that have no logo.
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}
const concepts: Record<string, ReactNode> = {
  'LLM apps': (
    <g {...stroke}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M12 8.5v4M10 10.5h4" />
    </g>
  ),
  'AI agents': (
    <g {...stroke}>
      <rect x="5" y="8" width="14" height="11" rx="2.5" />
      <path d="M12 8V4.5M9.5 13h.01M14.5 13h.01M2.5 13v2M21.5 13v2" />
      <circle cx="12" cy="3.8" r="0.9" />
    </g>
  ),
  RAG: (
    <g {...stroke}>
      <ellipse cx="10" cy="5.5" rx="6" ry="2.5" />
      <path d="M4 5.5v9c0 1.4 2.7 2.5 6 2.5M16 5.5V9" />
      <path d="M4 10c0 1.4 2.7 2.5 6 2.5" />
      <circle cx="16.5" cy="15.5" r="3" />
      <path d="m18.8 17.8 2.2 2.2" />
    </g>
  ),
  'Tool calling': (
    <g {...stroke}>
      <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17v3h3l5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />
    </g>
  ),
  'Structured outputs': (
    <g {...stroke}>
      <path d="M8 4H7a2 2 0 0 0-2 2v3.5L3.5 12 5 14.5V18a2 2 0 0 0 2 2h1M16 4h1a2 2 0 0 1 2 2v3.5l1.5 2.5-1.5 2.5V18a2 2 0 0 1-2 2h-1" />
    </g>
  ),
  'Design systems': (
    <g {...stroke}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <circle cx="16.5" cy="16.5" r="3.5" />
    </g>
  ),
  UX: (
    <g {...stroke}>
      <path d="m5 4 5.5 15 2.2-6.3L19 10.5 5 4Z" />
      <path d="m13 13 5 5" />
    </g>
  ),
}

export default function StackIcon({ name, className = 'h-3.5 w-3.5' }: { name: string; className?: string }) {
  const brand = brands[name]
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden focusable="false">
        <path d={brand.path} />
      </svg>
    )
  }
  const concept = concepts[name]
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      {concept ?? <circle cx="12" cy="12" r="3" fill="currentColor" />}
    </svg>
  )
}
