'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Memory {
  id: number
  type: 'note' | 'moment' | 'quote' | 'milestone'
  content: string
  label?: string
  date?: string
  rotation: number
  accent?: boolean
}

const memories: Memory[] = [
  {
    id: 1,
    type: 'quote',
    content: '"The first draft of anything is shit." — Hemingway. I think about this every time I push to prod.',
    date: 'A constant',
    rotation: -2.1,
    accent: false,
  },
  {
    id: 2,
    type: 'milestone',
    content: 'Resigned from Paytm without a plan. Just knew I needed space to find out what I actually wanted. Walked out and felt lighter than I had in months.',
    label: 'The Leap',
    date: 'June 2026',
    rotation: 1.4,
    accent: true,
  },
  {
    id: 3,
    type: 'moment',
    content: 'Shipped a Ruby app in 2 days with zero prior Ruby knowledge. Sleep-deprived, wired on coffee, and incredibly alive.',
    label: 'First time',
    date: 'July 2022',
    rotation: -1.8,
    accent: false,
  },
  {
    id: 4,
    type: 'note',
    content: 'Camera taught me that composition is everything. The frame decides what matters. So does the code.',
    date: '2023',
    rotation: 2.5,
    accent: false,
  },
  {
    id: 5,
    type: 'milestone',
    content: 'First YouTube video hit 1k views. Small number. Didn\'t care. Someone watched something I made — that was enough.',
    label: 'Content',
    date: '2025',
    rotation: -1.2,
    accent: false,
  },
  {
    id: 6,
    type: 'quote',
    content: '"Done is better than perfect." Easy to say. Hard to internalize. Still working on it.',
    rotation: 1.9,
    accent: false,
  },
  {
    id: 7,
    type: 'moment',
    content: 'Albumio started as a random conversation with a friend. No whiteboard, no plan — just an idea that refused to go away. He\'s not full-time but he\'s been in it, helped with deployment and more. Some things begin in a room, not alone.',
    label: 'Day Zero',
    rotation: -0.8,
    accent: true,
  },
  {
    id: 8,
    type: 'note',
    content: 'Delhi → the internet. Building for people I\'ll never meet, about problems I figured out from my own experience.',
    rotation: 2.2,
    accent: false,
  },
]

const typeIcon: Record<Memory['type'], string> = {
  note: '✦',
  moment: '◎',
  quote: '"',
  milestone: '▲',
}

function PinCard({ memory, index }: { memory: Memory; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, rotate: memory.rotation - 2 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: memory.rotation }
          : { opacity: 0, y: 32, rotate: memory.rotation - 2 }
      }
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.08,
      }}
      whileHover={{
        rotate: 0,
        scale: 1.03,
        zIndex: 10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="relative cursor-default"
      style={{ transformOrigin: 'top center' }}
    >
      {/* Pin dot */}
      <div
        className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 shadow-md ${
          memory.accent
            ? 'bg-accent'
            : 'bg-text-lo'
        }`}
      />

      {/* Card body */}
      <div
        className={`relative p-5 pt-6 flex flex-col gap-3 ${
          memory.accent
            ? 'bg-accent/8 border border-accent/25 shadow-[0_8px_32px_rgb(0_0_0/0.25),inset_0_1px_0_rgb(var(--accent)/0.08)]'
            : 'glass-card'
        }`}
        style={{
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        {/* Type glyph */}
        <span
          className={`text-xs font-sans tracking-widest ${
            memory.accent ? 'text-accent' : 'text-text-lo'
          }`}
        >
          {typeIcon[memory.type]}
          {memory.label && (
            <span className="ml-2 uppercase tracking-widest">
              {memory.label}
            </span>
          )}
        </span>

        {/* Content */}
        <p
          className={`font-serif leading-relaxed ${
            memory.accent ? 'text-text-hi' : 'text-text-md'
          }`}
          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}
        >
          {memory.content}
        </p>

        {/* Date */}
        {memory.date && (
          <span className="text-text-lo text-xs tracking-widest uppercase font-sans mt-auto pt-1 border-t border-line/50">
            {memory.date}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Canvas() {
  return (
    <section className="py-24 md:py-32 border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-text-lo text-xs tracking-widest uppercase font-sans mb-6">
            — 004 &nbsp; The Canvas
          </p>
          <h2
            className="font-serif text-text-hi leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Pinned Memories
          </h2>
          <p className="text-text-md text-sm leading-loose font-sans mt-4 max-w-xl">
            Fragments that didn&apos;t fit a résumé. Things I remember because they
            shaped how I think.
          </p>
        </motion.div>

        {/* Masonry-style pinboard */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-0">
          {memories.map((memory, i) => (
            <div key={memory.id} className="break-inside-avoid mb-6 pt-3">
              <PinCard memory={memory} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
