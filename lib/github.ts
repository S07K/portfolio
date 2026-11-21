// Live GitHub contribution calendar, fetched on the server and cached.
//
// - With GITHUB_TOKEN set: GitHub's official GraphQL API.
// - Without it: the public github-contributions-api.jogruber.de mirror
//   (the same source the react-github-calendar library uses).
//
// Either way the page stays static and re-fetches at most every 6 hours.

export const GITHUB_USER = 'S07K'
const REVALIDATE = 21600 // 6h

export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export type Calendar = {
  total: number
  days: Day[]
  longestStreak: number
  currentStreak: number
  source: 'github' | 'public'
}

const LEVELS: Record<string, Day['level']> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

async function fromGitHub(token: string): Promise<Day[]> {
  const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{
    weeks{contributionDays{date contributionCount contributionLevel}}}}}}`
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
    next: { revalidate: REVALIDATE },
  })
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const json = await res.json()
  const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks
  if (!Array.isArray(weeks)) throw new Error('Unexpected GitHub API response')
  return weeks.flatMap((w: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
    w.contributionDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      level: LEVELS[d.contributionLevel] ?? 0,
    })),
  )
}

async function fromPublicMirror(): Promise<Day[]> {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, {
    next: { revalidate: REVALIDATE },
  })
  if (!res.ok) throw new Error(`Contributions mirror ${res.status}`)
  const json = await res.json()
  if (!Array.isArray(json?.contributions)) throw new Error('Unexpected mirror response')
  return json.contributions as Day[]
}

function streaks(days: Day[]) {
  let longest = 0
  let run = 0
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0
    longest = Math.max(longest, run)
  }
  // Current streak: count back from today; a quiet "today" doesn't break it yet.
  let current = 0
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++
    else if (i === days.length - 1) continue
    else break
  }
  return { longest, current }
}

export async function getContributions(): Promise<Calendar | null> {
  const token = process.env.GITHUB_TOKEN
  try {
    const days = token ? await fromGitHub(token) : await fromPublicMirror()
    const { longest, current } = streaks(days)
    return {
      total: days.reduce((n, d) => n + d.count, 0),
      days,
      longestStreak: longest,
      currentStreak: current,
      source: token ? 'github' : 'public',
    }
  } catch (err) {
    console.error('[github] contributions unavailable:', err)
    return null
  }
}
