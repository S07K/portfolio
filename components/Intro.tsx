import { links, site } from '@/lib/content'
import Mark from './Mark'
import MiniBadge from './MiniBadge'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon, XIcon } from './Icons'

const pills = [
  { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
  { label: 'X', href: links.x, Icon: XIcon },
  { label: 'Mail', href: `mailto:${site.email}`, Icon: MailIcon },
  { label: 'Resume', href: links.resume, Icon: FileIcon },
]

export default function Intro() {
  return (
    <div id="intro" className="col pb-14 pt-10 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-[var(--col)]">
        <h1 className="font-serif text-[52px] leading-[0.95] tracking-[-0.01em] text-text-hi sm:text-[68px]">
          {site.name}
        </h1>
        <p className="meta mt-3 text-text-md">{site.title}</p>

        <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-text-md">
          I <Mark>design</Mark> and build AI products end to end - from the{' '}
          <Mark variant="circle" delay={0.35}>
            experience
          </Mark>{' '}
          people see to the agents behind it.
        </p>

        <p className="mt-6 flex items-start gap-2 font-mono text-[12px] leading-relaxed text-text-md">
          <span aria-hidden className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-ok shadow-[0_0_8px_rgb(var(--ok)/0.6)]" />
          <span>{site.status}</span>
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Contact links">
          {pills.map(({ label, href, Icon }) => {
            const external = href.startsWith('http')
            return (
              <li key={label}>
                <a
                  href={href}
                  className="pill"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon className="h-3 w-3" />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Small screens: a static crew pass instead of the swinging lanyard badge */}
        <div className="mt-8 lg:hidden">
          <MiniBadge />
        </div>
      </div>
    </div>
  )
}
