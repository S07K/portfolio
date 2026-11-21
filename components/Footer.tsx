import { links } from '@/lib/content'
import { Rule } from './Section'

export default function Footer() {
  return (
    <footer>
      <Rule />
      <div className="col py-8">
        <div className="meta mx-auto flex max-w-[var(--col)] flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Shubham Kumar - End of reel</span>
          <span className="flex gap-4">
            <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-text-hi">
              YouTube
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-text-hi">
              Instagram
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-hi">
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
