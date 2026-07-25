'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'GitHub', href: 'https://github.com/S07K', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@function.shubham', external: true },
  { label: 'Work', href: '#chapters', external: false },
  { label: 'Connect', href: '#contact', external: false },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-3 sm:px-4 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 w-full sm:w-auto ${
          scrolled
            ? 'backdrop-blur-xl bg-canvas/80 border-line/70 shadow-[0_8px_32px_rgb(0_0_0/0.2)]'
            : 'backdrop-blur-md bg-canvas/60 border-line/40 shadow-[0_4px_16px_rgb(0_0_0/0.1)]'
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Logo pill */}
        <Link
          href="/"
          className="font-serif text-text-hi text-sm tracking-widest px-4 py-1.5 rounded-full hover:bg-surface/60 transition-colors duration-300 mr-auto sm:mr-0"
        >
          SK
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-line/60 mx-1" />

        {/* Nav links */}
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="text-text-md text-xs tracking-widest uppercase font-sans px-4 py-1.5 rounded-full hover:bg-surface/60 hover:text-text-hi transition-all duration-300 hidden sm:block"
          >
            {link.label}
          </a>
        ))}

        {/* Divider */}
        <div className="w-px h-4 bg-line/60 mx-1 hidden sm:block" />

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="text-text-md hover:text-text-hi hover:bg-surface/60 transition-all duration-300 w-8 h-8 rounded-full flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </motion.nav>
    </div>
  )
}
