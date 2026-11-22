import Image from 'next/image'
import { highlights, type Highlight } from '@/lib/content'
import { LinkedInIcon, XIcon } from './Icons'

/**
 * Running carousel of short quotes (X replies, LinkedIn recommendations).
 * Pure CSS marquee: the list is rendered twice and the track slides by half
 * its width, so the loop is seamless. Pauses on hover/focus; under reduced
 * motion it becomes a plain horizontal scroller.
 */
/** X blue verified tick (Heroicons check-badge, MIT). X accounts only. */
function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] shrink-0 text-[#1d9bf0]"
      fill="currentColor"
      role="img"
      aria-label="Verified on X"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Card({ h, hidden = false }: { h: Highlight; hidden?: boolean }) {
  const Logo = h.source === 'x' ? XIcon : LinkedInIcon
  return (
    <a
      href={h.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      aria-label={hidden ? undefined : `${h.name} on ${h.source === 'x' ? 'X' : 'LinkedIn'}: “${h.quote}”`}
      className="flex w-[290px] shrink-0 flex-col gap-4 rounded-xl border border-line bg-raised/40 p-5 transition-colors duration-200 hover:border-text-lo sm:w-[340px] sm:p-6"
    >
      <span className="flex items-start gap-3">
        <Image src={h.avatar} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full bg-line object-cover" />
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1 text-[15px] font-medium leading-tight text-text-hi">
            <span className="truncate">{h.name}</span>
            {h.verified && h.source === 'x' ? <VerifiedBadge /> : null}
          </span>
          <span className="mt-0.5 block truncate text-[13px] text-text-lo">{h.handle}</span>
        </span>
        <Logo className="mt-0.5 h-4 w-4 shrink-0 text-text-lo" />
      </span>
      <span className="text-[16px] leading-snug text-text-md">“{h.quote}”</span>
    </a>
  )
}

export default function Highlights() {
  return (
    <div data-reveal className="bleed-rail marquee" aria-label="What people say">
      <div className="marquee-track">
        <div className="marquee-set">
          {highlights.map((h) => (
            <Card key={h.href + h.name} h={h} />
          ))}
        </div>
        {/* duplicate set for the seamless loop; hidden from assistive tech */}
        <div className="marquee-set marquee-clone" aria-hidden>
          {highlights.map((h) => (
            <Card key={`clone-${h.href}${h.name}`} h={h} hidden />
          ))}
        </div>
      </div>
    </div>
  )
}
