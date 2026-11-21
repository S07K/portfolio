// Responsive check: screenshots + overflow + tap-target audit at key widths.
//   node scripts/shoot-mobile.mjs <outDir> [baseUrl]
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import path from 'node:path'

const [outDir = '.shots', base = 'http://localhost:4517'] = process.argv.slice(2)
const WIDTHS = [375, 390, 768, 1024]
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome', headless: true })
for (const w of WIDTHS) {
  const page = await browser.newPage({
    viewport: { width: w, height: 844 },
    deviceScaleFactor: 2,
    isMobile: w < 768,
    hasTouch: w < 1024,
    reducedMotion: 'reduce', // deterministic screenshots (reveals/grain settle)
  })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)

  await page.screenshot({ path: path.join(outDir, `${w}-hero.png`) })
  await page.evaluate(() => document.getElementById('work')?.scrollIntoView())
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(outDir, `${w}-work.png`) })
  await page.evaluate(() => document.getElementById('intro')?.nextElementSibling?.scrollIntoView({ block: 'end' }))

  const report = await page.evaluate(() => {
    const overflow = document.documentElement.scrollWidth - window.innerWidth
    const small = [...document.querySelectorAll('a[href], button, [role="button"], [role="tab"]')]
      .filter((el) => {
        const r = el.getBoundingClientRect()
        const cs = getComputedStyle(el)
        return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && !el.closest('[aria-hidden="true"]')
      })
      .map((el) => {
        const r = el.getBoundingClientRect()
        return { el: (el.getAttribute('aria-label') || el.textContent || el.tagName).trim().replace(/\s+/g, ' ').slice(0, 28), w: Math.round(r.width), h: Math.round(r.height) }
      })
      .filter((t) => t.w < 44 || t.h < 44)
    const badge = !!document.querySelector('.badge-dock canvas')
    return { overflow, small, badge }
  })
  console.log(`\n== ${w}px  overflow=${report.overflow}px  swingingBadge=${report.badge}  smallTargets=${report.small.length}`)
  const uniq = [...new Map(report.small.map((t) => [t.el, t])).values()]
  console.log(uniq.slice(0, 40).map((t) => `  ${t.w}x${t.h}  ${t.el}`).join('\n'))
  await page.close()
}
await browser.close()
