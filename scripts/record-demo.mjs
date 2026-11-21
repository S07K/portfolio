// Record short product demos with Playwright (system Chrome, 1280x800).
// Public pages only: scrolls and follows public links. Never signs in or
// types into forms.
//
//   node scripts/record-demo.mjs kitevo|guildos
//
// Raw .webm recordings land in .demo-raw/; scripts/encode-demo.sh turns
// them into public/media/demos/{project}.mp4|webm|jpg.
import { chromium } from 'playwright'
import { mkdirSync, renameSync, readdirSync, rmSync } from 'node:fs'
import path from 'node:path'

const VIEW = { width: 1280, height: 800 }
const RAW = path.resolve('.demo-raw')

/** Smooth, human-paced scroll through `px` pixels. */
async function glide(page, px, ms = 2600) {
  const steps = Math.max(1, Math.round(ms / 16))
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, px / steps)
    await page.waitForTimeout(16)
  }
}

async function open(page, url) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {})
  await page.waitForTimeout(1800) // let entrance animations settle
}

const flows = {
  async kitevo(page) {
    await open(page, 'https://getkitevo.com')
    await page.mouse.move(1270, 400) // keep the cursor off the content
    await page.waitForTimeout(1200)
    await glide(page, 1400, 3200)
    await page.waitForTimeout(900)
    await glide(page, 1400, 3200)
    await page.waitForTimeout(900)
    // Public live media kit
    await open(page, 'https://getkitevo.com/kit/demo')
    await page.waitForTimeout(1200)
    await glide(page, 1100, 3000)
    await page.waitForTimeout(1000)
    // Free tools
    await open(page, 'https://getkitevo.com/tools')
    await page.waitForTimeout(1600)
    await open(page, 'https://getkitevo.com/tools/rate-calculator')
    await page.waitForTimeout(1200)
    await glide(page, 500, 1800)
    await page.waitForTimeout(1400)
  },
  async guildos(page) {
    await open(page, 'https://guildos.design')
    await page.mouse.move(1270, 400)
    await page.waitForTimeout(1500)
    // Landing page + the in-page product preview; the studio itself is behind /signin.
    for (let i = 0; i < 5; i++) {
      await glide(page, 900, 2800)
      await page.waitForTimeout(1100)
    }
  },
}

const name = process.argv[2]
if (!flows[name]) {
  console.error(`usage: node scripts/record-demo.mjs ${Object.keys(flows).join('|')}`)
  process.exit(1)
}

rmSync(path.join(RAW, name), { recursive: true, force: true })
mkdirSync(path.join(RAW, name), { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const context = await browser.newContext({
  viewport: VIEW,
  deviceScaleFactor: 1,
  recordVideo: { dir: path.join(RAW, name), size: VIEW },
})
const page = await context.newPage()
await flows[name](page)
await context.close() // flushes the video
await browser.close()

const file = readdirSync(path.join(RAW, name)).find((f) => f.endsWith('.webm'))
renameSync(path.join(RAW, name, file), path.join(RAW, `${name}.webm`))
console.log(`recorded .demo-raw/${name}.webm`)
