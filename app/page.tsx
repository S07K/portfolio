import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import Chapters from '@/components/Chapters'
import MediaGallery from '@/components/MediaGallery'
import Canvas from '@/components/Canvas'
import Journey from '@/components/Journey'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-canvas min-h-screen">
      <Nav />
      <Hero />
      <CurrentlyBuilding />
      <Chapters />
      <MediaGallery />
      <Canvas />
      <Journey />
      <Contact />
    </main>
  )
}
