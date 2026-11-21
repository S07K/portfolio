import type { ReactNode } from 'react'

/** Full-bleed rule with small registration ticks where it crosses the column edges. */
export function Rule({ dashed = false }: { dashed?: boolean }) {
  return (
    <div className={dashed ? 'rule-dashed' : 'rule'} aria-hidden>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0">
        <div className="rail-box relative h-0">
          <span className="absolute -left-[4px] -top-[4px] hidden h-[9px] w-[9px] sm:block">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-text-lo/60" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-text-lo/60" />
          </span>
          <span className="absolute -right-[4px] -top-[4px] hidden h-[9px] w-[9px] sm:block">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-text-lo/60" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-text-lo/60" />
          </span>
        </div>
      </div>
    </div>
  )
}

/** Shot-list label: "SC.01 - WORK", with a shutter-wipe reveal. */
export function Slate({
  id,
  scene,
  title,
  aside,
}: {
  id?: string
  scene: string
  title: string
  aside?: ReactNode
}) {
  return (
    <div data-reveal className="mb-8 flex items-baseline justify-between gap-4">
      <h2 id={id} className="meta text-text-md">
        <span className="slate-shutter">
          <span className="text-text-hi">{scene}</span>
          <span className="mx-2 text-text-lo">-</span>
          {title}
        </span>
      </h2>
      {aside ? <div className="meta">{aside}</div> : null}
    </div>
  )
}

export function Section({
  id,
  scene,
  title,
  aside,
  dashed = true,
  children,
}: {
  id: string
  scene: string
  title: string
  aside?: ReactNode
  dashed?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="scroll-mt-16">
      <Rule dashed={dashed} />
      <div className="col py-14 sm:py-16">
        <div className="mx-auto max-w-[var(--col)]">
          <Slate id={`${id}-label`} scene={scene} title={title} aside={aside} />
          {children}
        </div>
      </div>
    </section>
  )
}
