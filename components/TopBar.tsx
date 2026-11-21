'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { MoonIcon, SunIcon } from './Icons'

type Key = 'work' | 'experience' | 'contact'

const nav: { key: Key; label: string; href: string }[] = [
  { key: 'work', label: 'Work', href: '/#work' },
  { key: 'experience', label: 'Experience', href: '/#experience' },
  { key: 'contact', label: 'Contact', href: '/#contact' },
]

// Which nav item each page section belongs to. Sections not listed
// (intro, stack) leave nothing active.
const sectionToNav: Record<string, Key | null> = {
  work: 'work',
  projects: 'work',
  activity: 'work',
  experience: 'experience',
  stack: null,
  contact: 'contact',
}

/** Scroll-spy: the section whose top has passed ~40% of the viewport wins. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<Key | null>(null)
  useEffect(() => {
    if (!enabled) return
    const ids = Object.keys(sectionToNav)
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.4
      let current: Key | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = sectionToNav[id]
      }
      // At the very bottom the last section can't reach the line; treat it as active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact'
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled])
  return active
}

export default function TopBar() {
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const spied = useActiveSection(isHome)
  const active: Key | null = isHome ? spied : pathname.startsWith('/work/') ? 'work' : null
  const reduced = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      {/* Aligned to the vertical grid lines, which run through the bar */}
      <div className="rail-box flex h-12 items-center justify-between px-4 sm:border-x sm:border-line">
        <Link href="/" aria-label="Shubh, Shubham Kumar, home" className="-ml-1 flex h-11 items-center px-1 font-serif text-xl leading-none text-text-hi">
          Shubh
        </Link>
        <nav aria-label="Primary" className="flex h-full items-center gap-1.5 sm:gap-3">
          {nav.map((n) => {
            const on = active === n.key
            return (
              <Link
                key={n.key}
                href={n.href}
                aria-current={on ? 'location' : undefined}
                className={`meta relative flex h-full items-center px-2 transition-colors duration-200 hover:text-text-hi ${
                  on ? 'text-text-hi' : ''
                }`}
              >
                {n.label}
                {on ? (
                  // A playhead sliding along the navbar's bottom rule
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    className="absolute inset-x-2 -bottom-px h-[2px] bg-text-hi"
                    transition={reduced ? { duration: 0 } : { type: 'tween', ease: [0.2, 0.7, 0.2, 1], duration: 0.3 }}
                  />
                ) : null}
              </Link>
            )
          })}
          <button
            type="button"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
            }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="-mr-3 grid h-11 w-11 place-items-center rounded-full text-text-lo transition-colors hover:text-text-hi"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
