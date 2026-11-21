import { stack, type StackCategory } from '@/lib/content'
import StackIcon from './StackIcon'

const cats = Object.keys(stack) as StackCategory[]

export default function Stack() {
  return (
    <dl data-reveal className="divide-y divide-dashed divide-line">
      {cats.map((c) => (
        <div key={c} className="grid grid-cols-1 gap-2.5 py-4 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="meta pt-2">{c}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {stack[c].map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-raised/60 py-1.5 pl-2.5 pr-3 text-[13px] leading-none text-text-hi transition-colors hover:border-text-lo"
                >
                  <StackIcon name={s} className="h-3.5 w-3.5 shrink-0 text-text-md" />
                  {s}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
