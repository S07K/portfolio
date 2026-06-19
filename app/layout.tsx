import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Shubham Kumar — Builder',
  description:
    'Engineer, creator, and entrepreneur building things that matter. Currently working full-time on Albumio.',
  openGraph: {
    title: 'Shubham Kumar — Builder',
    description:
      'Engineer, creator, and entrepreneur building things that matter.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
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
