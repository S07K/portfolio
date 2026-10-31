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
    </main>
  )
}
