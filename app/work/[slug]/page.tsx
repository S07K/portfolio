import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import { Rule, Slate } from '@/components/Section'
import { ArrowUpRight, GitHubIcon } from '@/components/Icons'
import ProductLogo from '@/components/ProductLogo'
import StackIcon from '@/components/StackIcon'
import { caseStudies, featured, getCaseStudy } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return { title: `${cs.name} - Case study`, description: cs.logline }
}

type LinkMap = Record<string, string>

/** Turns known phrases (domains, "GitHub", store names) into new-tab links. */
function RichText({ text, links }: { text: string; links: LinkMap }) {
  const phrases = Object.keys(links).sort((a, b) => b.length - a.length)
  if (!phrases.length) return <>{text}</>
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'g'))
  return (
    <>
      {parts.map((part, i) =>
        links[part] ? (
          <a
            key={i}
            href={links[part]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-hi underline decoration-text-lo underline-offset-4 transition-colors hover:decoration-text-hi"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  )
}

function hasPublicFile(p: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', p))
}

function Block({ scene, title, children }: { scene: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <Rule dashed />
      <div className="col py-12">
        <div className="mx-auto max-w-[var(--col)]">
          <Slate scene={scene} title={title} />
          <div data-reveal>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default async function CaseStudyPage({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  const project = featured.find((p) => p.slug === slug)
  if (!cs || !project) notFound()

  const demoExists = hasPublicFile(cs.demo)
  const linkMap: LinkMap = {
    ...(project.site ? { [project.site.label]: project.site.href } : {}),
    ...(project.github ? { GitHub: project.github } : {}),
    ...Object.fromEntries((cs.links ?? []).map((l) => [l.label, l.href])),
  }

  return (
    <>
      <TopBar />
      <main id="main">
        <div className="col pb-10 pt-10 sm:pt-14">
          <div className="mx-auto max-w-[var(--col)]">
            <Link href="/#work" className="meta hover:text-text-hi">
              ← Back to work
            </Link>
            <h1 className="mt-6 font-serif text-[52px] leading-[0.95] text-text-hi sm:text-[68px]">{cs.name}</h1>
            <p className="mt-4 max-w-[34rem] text-[17px] text-text-md">{cs.logline}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <dt className="meta">Role</dt>
                <dd className="mt-1 text-[13px] text-text-hi">{cs.role}</dd>
              </div>
              <div>
                <dt className="meta">Year</dt>
                <dd className="mt-1 text-[13px] text-text-hi">{cs.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="meta">Stack</dt>
                <dd className="mt-1 text-[13px] text-text-hi">{project.tags.join(' / ')}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.site ? (
                <a href={project.site.href} target="_blank" rel="noopener noreferrer" className="pill">
                  <ProductLogo name={project.name} className="h-3.5 w-3.5" /> {project.site.label}
                </a>
              ) : null}
              {cs.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pill">
                  <StackIcon name={l.label} className="h-3.5 w-3.5" /> {l.label}
                </a>
              ))}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="pill">
                  <GitHubIcon className="h-3 w-3" /> Source
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Demo slot */}
        <div className="relative z-[2] mx-auto w-full max-w-[880px] px-4 sm:px-6">
          <div className="meta mb-2 flex justify-between gap-4 px-3 text-[10px] sm:px-4">
            <span>Demo</span>
            <span>{demoExists ? 'Muted · click for controls' : 'Footage pending'}</span>
          </div>
          <div className="film-frame aspect-video">
            {demoExists ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={cs.demo}
                poster={cs.poster}
                controls
                muted
                playsInline
                preload="none"
              />
            ) : (
              <>
                <Image
                  src={cs.poster}
                  alt={`${cs.name} preview`}
                  fill
                  priority
                  sizes="(max-width: 880px) 100vw, 880px"
                  className="object-cover object-top"
                />
              </>
            )}
          </div>
        </div>

        <Block scene="01" title="Problem">
          <div className="space-y-4 text-text-md">
            {cs.problem.map((p) => (
              <p key={p}>
                <RichText text={p} links={linkMap} />
              </p>
            ))}
          </div>
        </Block>

        <Block scene="02" title="Design decisions">
          <ol className="space-y-6">
            {cs.decisions.map((d, i) => (
              <li key={d.title} className="grid gap-1 sm:grid-cols-[40px_1fr] sm:gap-4">
                <span className="meta pt-1 text-text-hi">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-[22px] leading-tight text-text-hi">{d.title}</h3>
                  <p className="mt-1.5 text-text-md">
                    <RichText text={d.body} links={linkMap} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block scene="03" title={cs.aiTitle ?? 'How the AI works'}>
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {cs.ai.map((a, i) => (
              <li key={a.title} className="bg-canvas p-5">
                <p className="meta text-text-hi">Step {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-serif text-[20px] leading-tight text-text-hi">{a.title}</h3>
                <p className="mt-1.5 text-[14px] text-text-md">
                  <RichText text={a.body} links={linkMap} />
                </p>
              </li>
            ))}
          </ol>
        </Block>

        <Block scene="04" title="Result">
          <div className="space-y-4 text-text-md">
            {cs.result.map((p) => (
              <p key={p}>
                <RichText text={p} links={linkMap} />
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {caseStudies
              .filter((c) => c.slug !== cs.slug)
              .map((c) => (
                <Link key={c.slug} href={`/work/${c.slug}`} className="meta inline-flex items-center gap-1 text-text-hi underline-offset-4 hover:underline">
                  Next: {c.name} <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
          </div>
        </Block>
      </main>
      <Footer />
    </>
  )
}
