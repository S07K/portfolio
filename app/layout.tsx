import type { Metadata } from 'next'
import { Playfair_Display, Inter, Caveat } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-indol-three-50.vercel.app'),
  title: 'Shubham Kumar — Builder',
  description: 'Engineer, creator, and entrepreneur building things that matter.',
  openGraph: {
    title: 'Shubham Kumar — Builder',
    description: 'Engineer, creator, and entrepreneur building things that matter.',
    type: 'website',
    url: 'https://portfolio-indol-three-50.vercel.app',
    images: [{ url: '/shubham-profile.png', width: 800, height: 800, alt: 'Shubham Kumar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Kumar — Builder',
    description: 'Engineer, creator, and entrepreneur building things that matter.',
    images: ['/shubham-profile.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply stored theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')})()`,
          }}
        />
      </head>
      <body className="bg-canvas font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
