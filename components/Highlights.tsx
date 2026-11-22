import Image from 'next/image'
import { highlights, type Highlight } from '@/lib/content'
import { LinkedInIcon, XIcon } from './Icons'

/**
 * Running carousel of short quotes (X replies, LinkedIn recommendations).
 * Pure CSS marquee: the list is rendered twice and the track slides by half
 * its width, so the loop is seamless. Pauses on hover/focus; under reduced
 * motion it becomes a plain horizontal scroller.
 */
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
          <span className="block truncate text-[15px] font-medium leading-tight text-text-hi">{h.name}</span>
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
