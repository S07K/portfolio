import { OG_SIZE, publicImage, renderOg } from '@/lib/og'
import { caseStudies, getCaseStudy } from '@/lib/content'

export const alt = 'Case study by Shubham Kumar'
export const size = OG_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

// Case-study share image: the product's own screenshot behind its name.
export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  const shot = await publicImage(cs?.poster.replace(/^\//, '') ?? 'media/reel-poster.jpg')
  const index = caseStudies.findIndex((c) => c.slug === slug) + 1
  return renderOg({
    shot,
    kicker: `Case study · ${String(index).padStart(2, '0')}`,
    title: cs?.name ?? 'Case study',
    subtitle: cs?.logline ?? '',
    footer: 'SHUBHAM KUMAR',
  })
}
