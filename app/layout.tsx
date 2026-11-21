import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import RevealObserver from '@/components/RevealObserver'
import { site } from '@/lib/content'
import './globals.css'

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const title = `${site.name} - ${site.title}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s - ${site.name}` },
  description: site.description,
  openGraph: {
    siteName: site.name,
    title,
    description: site.description,
    type: 'website',
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

// Runs before first paint: apply saved theme, and flag that JS is available so
// below-the-fold reveals can opt in (content is never hidden without JS).
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light')d.classList.add('light')}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-canvas font-sans text-[15px] leading-relaxed">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-canvas focus:px-3 focus:py-2 focus:text-text-hi"
        >
          Skip to content
        </a>
        {/* Technical grid: vertical hairlines on the column edges, full page height */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden sm:block">
          <div className="rail-box h-full border-x border-line" />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
        <RevealObserver />
      </body>
    </html>
  )
}
