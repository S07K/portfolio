'use client'

import { useEffect } from 'react'

/**
 * Adds `.in` to every [data-reveal] element as it scrolls into view.
 * Lives in the root layout, which can hydrate before page segments mount,
 * so it also watches the DOM for [data-reveal] nodes added later.
 */
export default function RevealObserver() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add('in')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target)
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    const scan = () =>
      document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el))
    scan()

    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
