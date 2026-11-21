import TopBar from '@/components/TopBar'
import Reel from '@/components/Reel'
import Intro from '@/components/Intro'
import { Section } from '@/components/Section'
import FrameCard from '@/components/FrameCard'
import CellGrid from '@/components/CellGrid'
import Experience from '@/components/Experience'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GitHubActivity from '@/components/GitHubActivity'
import MoreOnGitHub from '@/components/MoreOnGitHub'
import { getContributions } from '@/lib/github'
import BadgeDock from '@/components/BadgeDock'
import { featured, projects } from '@/lib/content'

export default async function Home() {
  // Same cached fetch GitHubActivity uses, so this costs nothing extra.
  const contributions = (await getContributions())?.total
  let frame = 0
  const next = () => ++frame

  return (
    <>
      <TopBar />
      <main id="main">
        <Reel />
        <Intro />

        <Section id="work" scene="SC.01" title="Featured work" dashed={false} aside="3 case studies">
          <CellGrid filler={<MoreOnGitHub frame={featured.length} label={`${String(featured.length).padStart(3, '0')}A`} contributions={contributions} />}>
            {featured.map((p) => (
              <FrameCard key={p.name} project={p} frame={next()} />
            ))}
          </CellGrid>
        </Section>

        <Section id="projects" scene="SC.02" title="Projects">
          <CellGrid
            filler={
              <MoreOnGitHub
                frame={featured.length + projects.length}
                label={`${String(featured.length + projects.length).padStart(3, '0')}A`}
                contributions={contributions}
              />
            }
          >
            {projects.map((p) => (
              <FrameCard key={p.name} project={p} frame={next()} />
            ))}
          </CellGrid>
        </Section>

        <Section id="activity" scene="LOG" title="GitHub activity" aside="Live from GitHub">
          <GitHubActivity />
        </Section>

        <Section id="experience" scene="SC.03" title="Experience" aside="~4 yrs">
          <Experience />
        </Section>

        <Section id="stack" scene="KIT" title="Stack">
          <Stack />
        </Section>

        <Section id="contact" scene="SC.04" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
      <BadgeDock />
    </>
  )
}
