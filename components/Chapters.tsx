'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

interface Project {
  index: string
  name: string
  spark: string
  build: string
  impact: string
  techStack: string[]
  url: string
  image: string
  type: 'fullstack' | 'design'
}

const projects: Project[] = [
  // ── Fullstack ──────────────────────────────────────────────
  {
    index: '01',
    name: 'PostProAI',
    spark:
      'Social media creation is broken — AI generates the image, but publishing it still meant downloading, uploading, and clicking through three apps manually.',
    build:
      'Full-stack web app. AI image generation pipeline wired directly to the Instagram Graph API. TypeScript, React, Redux, Node, Express, Firebase for storage, deployed on Vercel.',
    impact:
      'Zero-friction creation-to-publish flow — generate an image and post straight to Instagram, no app-switching. Live and functional.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'Firebase'],
    url: 'https://post-pro-ai.vercel.app/',
    image: '/projects/PostProAI.png',
    type: 'fullstack',
  },
  {
    index: '02',
    name: 'Task Tracker',
    spark:
      'Every productivity app tries to do everything. I wanted one that just tracks — daily, weekly, monthly — with real auth and real persistence.',
    build:
      'TypeScript React frontend with Node/Express backend. Email verification, JWT auth, MongoDB Atlas, deployed on Vercel. Clean API, clean state.',
    impact:
      'Live, functional, and a foundation I keep building on. Handles multi-period task tracking with full user sessions.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://task-tracker-frontend-eta.vercel.app/',
    image: '/projects/taskTracker.png',
    type: 'fullstack',
  },
  // ── Design ─────────────────────────────────────────────────
  {
    index: '03',
    name: 'Chhatramate',
    spark:
      'Students scatter notes across ten different surfaces. I wanted to design a tool that treats note-taking as a first-class experience, not an afterthought.',
    build:
      'Solo UI/UX from scratch — information architecture, user flows, component design, and a full clickable prototype. Entirely in Figma.',
    impact:
      'A complete design system for a student-focused product, from blank canvas to polished, navigable prototype.',
    techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
    url: 'https://www.figma.com/proto/uMmE2f1Us1kTAS7OGfjKS9/CHHATRAMATE?node-id=15%3A34&starting-point-node-id=15%3A34',
    image: '/projects/chhatramate.png',
    type: 'design',
  },
  {
    index: '04',
    name: 'AQI Monitor',
    spark:
      'A startup needed a landing page that made an invisible product — air quality data — feel urgent, credible, and real.',
    build:
      'Freelance UI/UX design. Built a visual language around environmental data, color coding, and geographic context. Delivered in Figma.',
    impact:
      'High-fidelity prototype delivered and adopted as the client\'s design foundation for their web presence.',
    techStack: ['Figma', 'UI/UX Design', 'Freelance'],
    url: 'https://www.figma.com/proto/PK0b1v1DUNTflTSoJEAmyC/AQI-2?type=design&node-id=8-164&t=OAtnCQ3pVnE1n7pa-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A164&show-proto-sidebar=1&mode=design',
    image: '/projects/AQIApp.png',
    type: 'design',
  },
  {
    index: '05',
    name: 'Prana Air',
    spark:
      'Another AQI startup — this one needed a premium, wellness-adjacent feel. Not a data dashboard. A brand experience.',
    build:
      'Freelance landing page design. Focus on breathing room (literally), natural visual rhythm, and communicating product value without relying on text.',
    impact:
      'Full prototype delivered in Figma. Clean, breathable layout that matched the product\'s wellness positioning.',
    techStack: ['Figma', 'UI/UX Design', 'Freelance'],
    url: 'https://www.figma.com/proto/bIwpFb3uN2vRP7wnk3o8da/Prana-Air?type=design&t=yEMv9RTWfKuOaC7y-1&scaling=contain&page-id=0%3A1&starting-point-node-id=15%3A264&node-id=15-264&mode=design',
    image: '/projects/pranaAir.png',
    type: 'design',
  },
]

function ProjectCard({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <SectionReveal>
      <div className={`grid grid-cols-1 lg:grid-cols-[120px_1fr_340px] gap-8 lg:gap-12 py-14 ${!isLast ? 'border-b border-line' : ''} group`}>

        {/* Index */}
        <div className="flex lg:flex-col items-start gap-4 lg:gap-2">
          <span
            className="font-serif text-text-lo leading-none select-none"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {project.index}
          </span>
          <span className="text-text-lo text-xs tracking-widest uppercase font-sans mt-1 lg:mt-2 hidden lg:block">
            {project.type === 'fullstack' ? 'Fullstack' : 'Design'}
          </span>
        </div>

        {/* Story */}
        <div className="space-y-7">
          <h3
            className="font-serif text-text-hi group-hover:text-accent transition-colors duration-300 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
          >
            {project.name}
          </h3>

          <div className="space-y-5">
            <div>
              <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                The Spark
              </p>
              <p className="text-text-md text-sm leading-loose font-sans">
                {project.spark}
              </p>
            </div>
            <div>
              <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                The Build
              </p>
              <p className="text-text-md text-sm leading-loose font-sans">
                {project.build}
              </p>
            </div>
            <div>
              <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-2">
                The Impact
              </p>
              <p className="text-text-md text-sm leading-loose font-sans">
                {project.impact}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className="text-text-lo text-xs tracking-widest uppercase font-sans border border-line px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-text-md text-xs tracking-widest uppercase font-sans hover:text-accent transition-colors duration-300"
          >
            View Project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 10L10 2M10 2H4M10 2v6" />
            </svg>
          </a>
        </div>

        {/* Image */}
        <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden border border-line bg-surface">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 340px"
          />
          <div className="absolute inset-0 bg-canvas/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

      </div>
    </SectionReveal>
  )
}

export default function Chapters() {
  const fullstack = projects.filter((p) => p.type === 'fullstack')
  const design = projects.filter((p) => p.type === 'design')

  return (
    <section id="chapters" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <SectionReveal className="mb-20">
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-6">
            — 003 &nbsp; The Work
          </p>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Chapters
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            Every project has a before and after. Here&apos;s the full story of each one.
          </p>
        </SectionReveal>

        {/* Fullstack */}
        <div className="mb-20">
          <SectionReveal>
            <div className="flex items-center gap-6 mb-2">
              <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
                Fullstack &amp; Engineering
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </SectionReveal>
          {fullstack.map((p, i) => (
            <ProjectCard key={p.index} project={p} isLast={i === fullstack.length - 1} />
          ))}
        </div>

        {/* Design */}
        <div>
          <SectionReveal>
            <div className="flex items-center gap-6 mb-2">
              <span className="text-text-lo text-xs tracking-widest uppercase font-sans">
                UI / UX Design
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </SectionReveal>
          {design.map((p, i) => (
            <ProjectCard key={p.index} project={p} isLast={i === design.length - 1} />
          ))}
        </div>

        {/* GitHub link */}
        <SectionReveal className="mt-16 pt-8 border-t border-line">
          <a
            href="https://github.com/S07K?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-text-md text-xs tracking-widest uppercase font-sans hover:text-accent transition-colors duration-300"
          >
            See all repositories on GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 10L10 2M10 2H4M10 2v6" />
            </svg>
          </a>
        </SectionReveal>

      </div>
    </section>
  )
}
