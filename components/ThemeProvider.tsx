'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

type Theme = 'dark' | 'light'
type Origin = { x: number; y: number }

const ThemeContext = createContext<{ theme: Theme; toggle: (origin?: Origin) => void }>({
  theme: 'dark',
  toggle: () => {},
})

function apply(next: Theme) {
  document.documentElement.classList.toggle('light', next === 'light')
  try {
    localStorage.setItem('theme', next)
  } catch {}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // The boot script in layout.tsx already applied the class; just sync state.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark')
  }, [])

  const toggle = useCallback(
    (origin?: Origin) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      const swap = () =>
        flushSync(() => {
          apply(next)
          setTheme(next)
        })

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!document.startViewTransition || reduced) {
        swap()
        return
      }

      // Circular reveal of the new theme, expanding from the toggle button.
      const x = origin?.x ?? window.innerWidth - 40
      const y = origin?.y ?? 24
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

      const transition = document.startViewTransition(swap)
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          {
            duration: 500,
            easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
    },
    [theme],
  )

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
