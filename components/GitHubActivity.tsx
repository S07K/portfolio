import { getContributions, GITHUB_USER, type Day } from '@/lib/github'
import { ArrowUpRight, GitHubIcon } from './Icons'
import CalendarTooltip from './CalendarTooltip'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Activity is the one place green carries meaning here, so cells use --ok.
const levelStyle: Record<Day['level'], string> = {
  0: 'rgb(var(--line) / 0.7)',
  1: 'rgb(var(--ok) / 0.28)',
  2: 'rgb(var(--ok) / 0.5)',
  3: 'rgb(var(--ok) / 0.75)',
  4: 'rgb(var(--ok))',
}

const parse = (s: string) => new Date(`${s}T00:00:00Z`)
const label = (d: Day) => {
  const dt = parse(d.date)
  const when = `${MONTHS[dt.getUTCMonth()]} ${dt.getUTCDate()}, ${dt.getUTCFullYear()}`
  return `${d.count === 0 ? 'No' : d.count} contribution${d.count === 1 ? '' : 's'} on ${when}`
}

/** Group days into Sunday-first week columns, padding the first week. */
function toWeeks(days: Day[]) {
  const weeks: (Day | null)[][] = []
  let week: (Day | null)[] = Array(parse(days[0].date).getUTCDay()).fill(null)
  for (const d of days) {
    week.push(d)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)])
  return weeks
}

/** Month label for a column when a new month starts in it (and isn't crowded). */
function monthLabels(weeks: (Day | null)[][]) {
  let lastCol = -4
  return weeks.map((w, i) => {
    const first = w.find(Boolean)
    if (!first) return ''
    const dt = parse(first.date)
    if (dt.getUTCDate() > 7 || i - lastCol < 3) return ''
    lastCol = i
    return MONTHS[dt.getUTCMonth()]
  })
}

export default async function GitHubActivity() {
  const cal = await getContributions()

  if (!cal) {
    return (
      <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="pill">
        <GitHubIcon className="h-3 w-3" /> Activity on GitHub
      </a>
    )
  }

  const weeks = toWeeks(cal.days)
  const months = monthLabels(weeks)
  const cols = weeks.length

  return (
    <div data-reveal>
      <dl className="mb-6 grid grid-cols-3 gap-4">
        {[
          ['Last 12 months', cal.total.toLocaleString('en-US'), 'contributions'],
          ['Longest streak', String(cal.longestStreak), cal.longestStreak === 1 ? 'day' : 'days'],
          ['Current streak', String(cal.currentStreak), cal.currentStreak === 1 ? 'day' : 'days'],
        ].map(([k, v, unit]) => (
          <div key={k}>
            <dt className="meta">{k}</dt>
            <dd className="mt-1 text-text-hi">
              <span className="font-serif text-[30px] leading-none">{v}</span>{' '}
              <span className="text-[13px] text-text-md">{unit}</span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Calendar: scrolls sideways on small screens rather than squashing */}
      <CalendarTooltip>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <figure
          role="img"
          aria-label={`${cal.total} GitHub contributions in the last year, longest streak ${cal.longestStreak} days.`}
          className="min-w-[600px]"
        >
          <div className="grid gap-x-[3px]" style={{ gridTemplateColumns: `28px repeat(${cols}, minmax(0, 1fr))` }}>
            <span />
            {months.map((m, i) => (
              <span key={i} className="meta h-4 overflow-visible whitespace-nowrap text-[10px]" aria-hidden>
                {m}
              </span>
            ))}
          </div>
          <div
            className="grid gap-[3px]"
            style={{ gridTemplateColumns: `28px repeat(${cols}, minmax(0, 1fr))`, gridTemplateRows: 'repeat(7, auto)', gridAutoFlow: 'column' }}
            aria-hidden
          >
            {DAYS.map((d, i) => (
              <span key={d} className="meta flex items-center text-[10px] leading-none">
                {i % 2 === 1 ? d : ''}
              </span>
            ))}
            {weeks.flatMap((w, wi) =>
              w.map((d, di) =>
                d ? (
                  <span
                    key={d.date}
                    data-tip={label(d)}
                    className="aspect-square rounded-[2px] transition-transform duration-150 hover:scale-125"
                    style={{ background: levelStyle[d.level] }}
                  />
                ) : (
                  <span key={`p${wi}-${di}`} className="aspect-square" />
                ),
              ),
            )}
          </div>
        </figure>
      </div>
      </CalendarTooltip>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="meta tap gap-1.5 text-text-hi underline-offset-4 hover:underline"
        >
          <GitHubIcon className="h-3 w-3" /> @{GITHUB_USER} <ArrowUpRight className="h-3 w-3" />
        </a>
        <div className="meta flex items-center gap-1.5 text-[10px]" aria-hidden>
          Less
          {([0, 1, 2, 3, 4] as const).map((l) => (
            <span key={l} className="h-[10px] w-[10px] rounded-[2px]" style={{ background: levelStyle[l] }} />
          ))}
          More
        </div>
      </div>
    </div>
  )
}
