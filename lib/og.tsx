import fs from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

// Shared renderer for Open Graph images: a letterboxed "still frame" with the
// site's viewfinder overlay, in the site's own fonts.

export const OG_SIZE = { width: 1200, height: 630 }

const INK = '#ededed'
const SOFT = '#a8a8a8'
const REC = '#ef4444'
const OK = '#22c55e'

/** Data URI for a file in /public. */
export async function publicImage(rel: string) {
  const buf = await fs.readFile(path.join(process.cwd(), 'public', rel))
  const ext = path.extname(rel).slice(1).replace('jpg', 'jpeg')
  return `data:image/${ext};base64,${buf.toString('base64')}`
}

/**
 * Fetch a Google Font subset containing only `text`, as WOFF (which the OG
 * renderer supports). An old user agent makes Google serve WOFF, not WOFF2.
 */
async function googleFont(family: string, weight: number, text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&text=${encodeURIComponent(text)}`,
        { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30' } },
      )
    ).text()
    const url = css.match(/url\((https:[^)]+)\)/)?.[1]
    if (!url) return null
    return await (await fetch(url)).arrayBuffer()
  } catch {
    return null // fall back to the default font rather than failing the image
  }
}

type Props = {
  background?: string // data URI, full-frame still behind the text
  shot?: string // data URI, product screenshot framed on the right instead
  kicker: string // small mono line above the title
  title: string // serif headline
  subtitle: string // line under the title
  avatar?: string // data URI, round
  status?: string // green-dot line
  footer?: string // bottom-left label
}

export async function renderOg(p: Props) {
  const mono = [p.kicker, p.subtitle, p.status, p.footer, 'REC 00:00:24:00 24 FPS ISO 400 DELHI, IN'].join(' ')
  const [serifData, monoData] = await Promise.all([
    googleFont('Instrument Serif', 400, p.title),
    googleFont('JetBrains Mono', 500, mono.toUpperCase() + mono),
  ])
  const fonts = [
    ...(serifData ? [{ name: 'Serif', data: serifData, weight: 400 as const, style: 'normal' as const }] : []),
    ...(monoData ? [{ name: 'Mono', data: monoData, weight: 500 as const, style: 'normal' as const }] : []),
  ]
  const monoStyle = { fontFamily: 'Mono', fontSize: 18, letterSpacing: 2, color: INK }

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0a0a0a', position: 'relative' }}>
        {/* 2.39:1 frame = 1200x502, letterbox bars top and bottom */}
        {p.background ? (
          <img
            src={p.background}
            width={1200}
            height={502}
            style={{ position: 'absolute', top: 64, left: 0, width: 1200, height: 502, objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <div style={{ position: 'absolute', top: 64, left: 0, width: 1200, height: 502, background: '#141414' }} />
        )}
        {p.background ? (
          <div
            style={{
              position: 'absolute',
              top: 64,
              left: 0,
              width: 1200,
              height: 502,
              background: 'linear-gradient(90deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.82) 45%, rgba(10,10,10,0.35) 100%)',
            }}
          />
        ) : null}

        {/* product screenshot as a window rising out of the frame, like the cards */}
        {p.shot ? (
          <div style={{ position: 'absolute', top: 64, left: 0, width: 1200, height: 502, display: 'flex', overflow: 'hidden' }}>
            <img
              src={p.shot}
              width={640}
              height={400}
              style={{
                position: 'absolute',
                left: 640,
                top: 120,
                width: 640,
                height: 400,
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: 14,
                border: '1px solid #2e2e2e',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8)',
              }}
            />
          </div>
        ) : null}

        {/* viewfinder */}
        <div style={{ position: 'absolute', top: 22, left: 40, display: 'flex', alignItems: 'center', gap: 10, ...monoStyle }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: REC }} />
          REC
        </div>
        <div style={{ position: 'absolute', top: 22, right: 40, display: 'flex', ...monoStyle }}>00:00:24:00</div>
        <div style={{ position: 'absolute', bottom: 22, left: 40, display: 'flex', ...monoStyle }}>{p.footer ?? '24 FPS · ISO 400'}</div>
        <div style={{ position: 'absolute', bottom: 22, right: 40, display: 'flex', ...monoStyle }}>DELHI, IN</div>

        <div style={{ position: 'absolute', left: 80, top: 64, height: 502, width: p.shot ? 520 : 860, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {p.avatar ? (
            <img
              src={p.avatar}
              width={96}
              height={96}
              style={{ width: 96, height: 96, borderRadius: 48, border: `3px solid ${INK}`, marginBottom: 26 }}
            />
          ) : null}
          <div style={{ display: 'flex', ...monoStyle, fontSize: 18, letterSpacing: 4, color: SOFT }}>{p.kicker.toUpperCase()}</div>
          <div style={{ display: 'flex', marginTop: 12, fontFamily: 'Serif', fontSize: 104, lineHeight: 1, letterSpacing: -1, color: INK }}>
            {p.title}
          </div>
          <div style={{ display: 'flex', marginTop: 20, fontFamily: 'Mono', fontSize: p.shot ? 21 : 24, lineHeight: 1.4, color: SOFT }}>
            {p.subtitle}
          </div>
          {p.status ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 26, ...monoStyle, fontSize: 20, letterSpacing: 1 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: OK }} />
              {p.status}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  )
}
