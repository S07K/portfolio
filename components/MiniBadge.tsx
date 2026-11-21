import Image from 'next/image'
import { site } from '@/lib/content'

/**
 * Static crew-pass card for small screens, where the swinging lanyard badge
 * (BadgeDock) has no gutter to hang in. Same identity, no physics.
 */
export default function MiniBadge() {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 2]
  return (
    <div className="relative max-w-[360px] overflow-hidden rounded-xl border border-line bg-raised" aria-label="Crew pass">
      {/* header band with hairline hatch, like the desktop badge */}
      <div
        aria-hidden
        className="h-3"
        style={{
          background:
            'repeating-linear-gradient(-45deg, rgb(var(--text-hi) / 0.08) 0 1px, transparent 1px 6px), rgb(var(--line))',
        }}
      />
      <div className="flex items-center gap-4 p-4">
        <Image
          src="/media/avatar.png"
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full ring-1 ring-line ring-offset-2 ring-offset-raised"
        />
        <div className="min-w-0">
          <p className="meta text-[10px]">Crew pass · SC.00</p>
          <p className="mt-1 font-serif text-[22px] leading-none text-text-hi">{site.name}</p>
          <p className="mt-1 text-[13px] text-text-md">{site.title}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-dashed border-line px-4 py-2.5">
        <span className="meta flex items-center gap-1.5 text-[10px] text-text-md">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" /> Open to roles · Remote
        </span>
        <span aria-hidden className="flex h-4 items-stretch gap-[1.5px]">
          {bars.map((w, i) => (
            <span key={i} style={{ width: w }} className={i % 2 ? '' : 'bg-text-md'} />
          ))}
        </span>
      </div>
    </div>
  )
}
