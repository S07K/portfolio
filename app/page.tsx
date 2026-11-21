import TopBar from '@/components/TopBar'
import Reel from '@/components/Reel'
import Intro from '@/components/Intro'
import { Section } from '@/components/Section'
import FrameCard from '@/components/FrameCard'
import CellGrid from '@/components/CellGrid'
import Experience from '@/components/Experience'
import Frames from '@/components/Frames'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GitHubActivity from '@/components/GitHubActivity'
import BadgeDock from '@/components/BadgeDock'
import { YouTubeIcon } from '@/components/Icons'
import { featured, frames, links, projects } from '@/lib/content'

export default function Home() {
  let frame = 0
  const next = () => ++frame

  return (
    <>
      <TopBar />
      <main id="main">
        <Reel />
        <Intro />

        <Section id="work" scene="SC.01" title="Featured work" dashed={false} aside="3 case studies">
          <CellGrid>
            {featured.map((p) => (
              <FrameCard key={p.name} project={p} frame={next()} />
            ))}
          </CellGrid>
        </Section>

        <Section id="projects" scene="SC.02" title="Projects">
          <CellGrid>
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

        <Section id="frames" scene="SC.04" title="Frames" aside="Stills & motion">
          <p data-reveal className="mb-6 max-w-[34rem] text-text-md">
            I shoot photo and video - it’s where I learned that framing decides what matters.
            Same instinct, different medium.
          </p>
          <Frames frames={frames} />
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="pill mt-6"
          >
            <YouTubeIcon className="h-3 w-3" /> Watch on YouTube - @function.shubham
          </a>
        </Section>

        <Section id="stack" scene="KIT" title="Stack">
          <Stack />
        </Section>

        <Section id="contact" scene="SC.05" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
      <BadgeDock />
    </>
  )
}
