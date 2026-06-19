'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const socials = [
  { label: 'GitHub', href: 'https://github.com/S07K' },
  { label: 'YouTube', href: 'https://www.youtube.com/@function.shubham' },
  { label: 'Instagram', href: 'https://www.instagram.com/function.shubham/' },
]

export default function Nav() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 mix-blend-normal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-7 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-text-hi text-lg tracking-widest hover:text-accent transition-colors duration-300"
        >
          SK
        </Link>

        <nav className="flex items-center gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-lo text-xs tracking-widest uppercase hover:text-text-md transition-colors duration-300 font-sans"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-text-lo text-xs tracking-widest uppercase hover:text-accent transition-colors duration-300 font-sans"
          >
            Connect
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
