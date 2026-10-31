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
      <div aria-hidden="true" className="relative h-[260px] sm:h-[340px] md:h-[440px] overflow-hidden">
        <Image
          src="/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/0 via-canvas/20 to-canvas" />
      </div>
    </main>
  )
}
