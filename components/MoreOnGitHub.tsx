import type { CSSProperties } from 'react'
import { GITHUB_USER } from '@/lib/github'
import { frameTimecode } from '@/lib/frame'
import { ArrowUpRight, GitHubIcon } from './Icons'

/**
 * Fills the empty slot in an odd-length project grid. Styled like a
 * FrameCard: frame label + timecode, a tinted panel, title, mono link line.
 */
export default function MoreOnGitHub({
  frame,
  label,
  contributions,
}: {
  frame: number // position it follows, for the timecode
  label: string // e.g. "003A"
  contributions?: number
}) {
  const href = `https://github.com/${GITHUB_USER}`
  const tint = { '--h': 0, '--s': 0 } as CSSProperties

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className="group flex h-full flex-col"
      aria-label={`More on GitHub${contributions ? `: ${contributions.toLocaleString('en-US')} contributions in the last year` : ''}`}
    >
      <div className="meta mb-1.5 flex items-center justify-between text-[10px]">
        <span>FR {label}</span>
        <span className="tabular-nums">{frameTimecode(frame)}</span>
      </div>

      <div
        style={tint}
        className="tint-panel relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-line/60 text-center"
      >
        <GitHubIcon className="h-9 w-9 text-text-hi transition-transform duration-300 motion-safe:group-hover:-translate-y-1" />
        {contributions ? (
          <p className="mt-4 text-text-hi">
            <span className="font-serif text-[40px] leading-none">{contributions.toLocaleString('en-US')}</span>
            <span className="meta mt-1.5 block">contributions · last 12 months</span>
          </p>
        ) : (
          <p className="meta mt-4">@{GITHUB_USER}</p>
        )}
      </div>

      <h3 className="mt-4 font-serif text-[24px] leading-none text-text-hi">More on GitHub</h3>
      <p className="mt-2 text-[14px] text-text-md">Open-source work, experiments and everything in between.</p>
      <p className="meta mt-3 inline-flex items-center gap-1 text-text-hi group-hover:underline">
        github.com/{GITHUB_USER} <ArrowUpRight className="h-3 w-3" />
      </p>
    </a>
  )
}
