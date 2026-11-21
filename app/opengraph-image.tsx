import { OG_SIZE, publicImage, renderOg } from '@/lib/og'
import { site } from '@/lib/content'

export const alt = `${site.name} - ${site.title}`
export const size = OG_SIZE
export const contentType = 'image/png'

// Home page share image: reel still, avatar, name, title and availability.
export default async function OpengraphImage() {
  const [background, avatar] = await Promise.all([
    publicImage('media/reel-poster.jpg'),
    publicImage('media/avatar.png'),
  ])
  return renderOg({
    background,
    avatar,
    kicker: site.title,
    title: site.name,
    subtitle: 'Designs and builds AI products end to end.',
    status: 'Open to AI Product & Design Engineer roles · Remote',
  })
}
