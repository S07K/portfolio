import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Entrepreneurship from '@/components/Entrepreneurship'
import Projects from '@/components/Projects'
import MediaGallery from '@/components/MediaGallery'
import Canvas from '@/components/Canvas'
import Journey from '@/components/Journey'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-canvas min-h-screen">
      <Nav />
      <Hero />
      <Entrepreneurship />
      <Projects />
      <MediaGallery />
      <Canvas />
      <Journey />
      <Contact />

      {/* Footer artwork — fades up into the page */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[440px] overflow-hidden">
        <Image
          src="/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/0 via-canvas/20 to-canvas" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-8 md:px-16 pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <span className="font-serif text-[#FAF5ED] text-sm drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              Shubham Kumar
            </span>
            <span className="text-[#FAF5ED]/75 text-xs tracking-widest uppercase font-sans drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              Designed &amp; built with intention. © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
