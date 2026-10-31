'use client'

import SectionReveal from './SectionReveal'

interface Project {
  name: string
  brief: string
  url: string
}

const projects: Project[] = [
  {
    name: 'RAG Chat',
    brief:
      'Ask questions about your own documents and get answers grounded in the exact passages, with citations.',
    url: 'https://rag-chat-qqme.onrender.com',
  },
  {
    name: 'Task Tracker',
    brief:
      'A calendar-based task manager with an AI assistant that can find, create, reschedule, and delete tasks.',
    url: 'https://task-tracker-frontend-eta.vercel.app/',
  },
  {
    name: 'PostProAI',
    brief:
      'Generate an AI image and publish it straight to Instagram without switching between apps.',
    url: 'https://post-pro-ai.vercel.app/',
  },
  {
    name: 'Chhatramate',
    brief:
      'A student note-taking app designed end-to-end, from information architecture to a clickable prototype.',
    url: 'https://www.figma.com/proto/uMmE2f1Us1kTAS7OGfjKS9/CHHATRAMATE?node-id=15%3A34&starting-point-node-id=15%3A34',
  },
  {
    name: 'AQI Monitor',
    brief:
      'A landing page that makes live air-quality data feel urgent, credible, and easy to understand.',
    url: 'https://www.figma.com/proto/PK0b1v1DUNTflTSoJEAmyC/AQI-2?type=design&node-id=8-164&t=OAtnCQ3pVnE1n7pa-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A164&show-proto-sidebar=1&mode=design',
  },
  {
    name: 'Prana Air',
    brief:
      'A wellness-led landing page for an air-quality product, designed around breathing room.',
    url: 'https://www.figma.com/proto/bIwpFb3uN2vRP7wnk3o8da/Prana-Air?type=design&t=yEMv9RTWfKuOaC7y-1&scaling=contain&page-id=0%3A1&starting-point-node-id=15%3A264&node-id=15-264&mode=design',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <SectionReveal className="mb-16">
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-6">
            — 003 &nbsp; The Work
          </p>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Projects
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            A selection of products and interfaces I&apos;ve built.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <SectionReveal key={project.name} delay={0.1 + index * 0.05} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface/20 p-7 md:p-8 transition-colors duration-500 hover:border-accent/30"
              >
                <h3 className="font-serif text-text-hi text-2xl leading-snug transition-colors duration-300 group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-3 text-text-md text-sm leading-relaxed font-sans">
                  {project.brief}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-accent text-xs tracking-widest uppercase font-sans">
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
