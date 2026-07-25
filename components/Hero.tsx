'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  {
    label: 'GitHub', href: 'https://github.com/S07K',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/0700shubham',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: 'YouTube', href: 'https://www.youtube.com/@function.shubham',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/function.shubham/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>,
  },
  {
    label: 'X', href: 'https://twitter.com/0700shubham',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
]

// Profile card — story anchor
const PROFILE = {
  src: '/shubham-profile.png',
  top: '13%', left: '33%', width: '34%',
  rotation: -1,
  threadOriginX: 50,
  threadOriginY: 52,
}

// Three branches — what I actually do
const BRANCHES = [
  {
    id: 1, type: 'video' as const,
    src: '/content-creator.mp4',
    caption: 'content creation',
    label: 'Content Creator',
    labelX: 16, labelY: 60,
    top: '63%', left: '3%', width: '26%', rotation: -8,
    pinX: 16, pinY: 65,
  },
  {
    id: 2, type: 'video' as const,
    src: '/hero-bg.mp4',
    caption: 'engineering',
    label: 'Engineer',
    labelX: 50, labelY: 63,
    top: '66%', left: '37%', width: '26%', rotation: 2,
    pinX: 50, pinY: 67,
  },
  {
    id: 3, type: 'image' as const,
    src: '/entrepreneur.jpg',
    caption: 'entrepreneur',
    label: 'Builder',
    labelX: 83, labelY: 57,
    top: '60%', left: '70%', width: '26%', rotation: 8,
    pinX: 83, pinY: 62,
  },
]

function Pin({ gold = false }: { gold?: boolean }) {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
      <div
        className="w-4 h-4 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        style={{
          background: gold
            ? 'radial-gradient(circle at 35% 30%, rgb(var(--accent)), #7a5010)'
            : 'radial-gradient(circle at 35% 30%, #ff9a9a, #c0392b 55%, #7b0000)',
        }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-canvas">

      {/* Grid background — mobile only (desktop grid lives in the right panel) */}
      <div className="lg:hidden absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(var(--text-hi) / 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgb(var(--text-hi) / 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
      }} />

      {/* Mobile profile polaroid — top right corner */}
      <div className="lg:hidden absolute top-20 right-6 z-10">
        <motion.div
          className="relative pt-3"
          style={{ rotate: 3 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="w-3.5 h-3.5 rounded-full shadow-md"
              style={{ background: 'radial-gradient(circle at 35% 30%, rgb(var(--accent)), #7a5010)' }} />
          </div>
          <div className="w-28 bg-white pt-1.5 px-1.5 pb-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROFILE.src} alt="Shubham Kumar"
                className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <p className="text-center mt-1 text-[5px] tracking-[0.18em] uppercase text-neutral-400"
              style={{ fontFamily: 'monospace' }}>shubham kumar</p>
          </div>
        </motion.div>
      </div>

      {/* ── LEFT — text ─────────────────────────────────────── */}
      <div className="relative flex items-end lg:w-[38%] shrink-0 px-8 md:px-14 pt-36 pb-20 md:pb-24 z-10 overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 5% 70%, rgb(var(--accent) / 0.07) 0%, transparent 70%)' }} />

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-5 relative">
          <motion.p variants={itemVariants} className="text-text-lo text-xs tracking-widest uppercase font-sans">
            — 001 &nbsp; Introduction
          </motion.p>

          <div>
            <motion.h1 variants={itemVariants} className="font-serif text-text-hi leading-none"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)' }}>
              Shubham
            </motion.h1>
            <motion.h1 variants={itemVariants} className="font-serif text-accent leading-none"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)' }}>
              Kumar
            </motion.h1>
          </div>

          <motion.p variants={itemVariants} className="text-text-lo text-[10px] tracking-widest uppercase font-sans leading-loose">
            Generalist &nbsp;·&nbsp; Content Creator<br />
            Entrepreneur &nbsp;·&nbsp; Builder
          </motion.p>

          <motion.p variants={itemVariants} className="font-serif italic text-text-md leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
            Engineer. Creator. Builder. Somewhere between the code and the camera, I found my voice.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="text-text-lo hover:text-text-hi transition-colors duration-300">
                {s.icon}
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a href="https://drive.google.com/file/d/1ahUVkN2IhroDbCRon6qqV_rmIgUDvgKL/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-text-md text-xs tracking-widest uppercase font-sans border border-line px-5 py-3 hover:border-accent hover:text-accent transition-all duration-300">
              View Resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 10L10 2M10 2H4M10 2v6" />
              </svg>
            </a>
          </motion.div>

          <motion.div className="mt-8 pt-5 border-t border-line flex flex-col gap-1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
            <span className="text-text-lo text-[10px] tracking-widest uppercase font-sans">Based in India</span>
            <span className="text-text-lo text-[10px] tracking-widest uppercase font-sans">Open to the right conversation</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── MOBILE storyboard — horizontal scroll strip ─────── */}
      <div className="lg:hidden px-8 pb-16 pt-2">
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {BRANCHES.map((b, i) => (
            <motion.div
              key={b.id}
              className="shrink-0 w-36 relative pt-3"
              style={{ rotate: `${b.rotation}deg`, transformOrigin: 'top center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Pin — absolutely placed on top of card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-3.5 h-3.5 rounded-full shadow-md"
                  style={{ background: 'radial-gradient(circle at 35% 30%, #ff9a9a, #c0392b 55%, #7b0000)' }} />
              </div>
              <div className="bg-white pt-1.5 px-1.5 pb-5 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                  {b.type === 'video' ? (
                    <video src={b.src} autoPlay muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.src} alt={b.caption}
                      className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                <p className="text-center mt-1.5 text-[6px] tracking-[0.18em] uppercase text-neutral-400"
                  style={{ fontFamily: 'monospace' }}>
                  {b.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — story board ─────────────────────────────── */}
      <div className="hidden lg:block flex-1 relative min-h-screen">


        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgb(var(--text-hi) / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--text-hi) / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }} />

        {/* Radial fade — grid fades out toward edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 85% 85% at 55% 50%, transparent 40%, rgb(var(--canvas)) 100%)',
          }}
        />

        {/* Left-edge bleed — continuous with left panel */}
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(var(--canvas)) 0%, transparent 100%)', zIndex: 4 }} />

        {/* Threads SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
          {BRANCHES.map((b, i) => (
            <motion.line key={b.id}
              x1={PROFILE.threadOriginX} y1={PROFILE.threadOriginY}
              x2={b.pinX} y2={b.pinY}
              stroke="rgb(var(--accent))" strokeWidth="0.28" strokeOpacity="0.5" strokeLinecap="round"
              strokeDasharray="1.2 0.8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 + i * 0.12 }}
            />
          ))}
        </svg>

        {/* Handwriting labels along threads */}
        {BRANCHES.map((b, i) => (
          <motion.div
            key={b.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${b.labelX}%`,
              top: `${b.labelY}%`,
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-caveat)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: `rgb(var(--accent))`,
              opacity: 0.75,
              zIndex: 2,
              whiteSpace: 'nowrap',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.5, delay: 1.9 + i * 0.12 }}
          >
            {b.label}
          </motion.div>
        ))}

        {/* Profile polaroid — story anchor */}
        <motion.div
          className="absolute"
          style={{ top: PROFILE.top, left: PROFILE.left, width: PROFILE.width, zIndex: 3 }}
          initial={{ opacity: 0, y: 20, rotate: PROFILE.rotation - 3 }}
          animate={{ opacity: 1, y: 0, rotate: PROFILE.rotation }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ scale: 1.04, rotate: 0, zIndex: 20, transition: { duration: 0.25 } }}
        >
          <Pin gold />
          <div className="bg-white pt-2 px-2 pb-8 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]">
            <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROFILE.src} alt="Shubham Kumar"
                className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <p className="text-center mt-2 text-[7px] tracking-[0.18em] uppercase text-neutral-400"
              style={{ fontFamily: 'monospace' }}>
              shubham kumar
            </p>
          </div>
          {/* Bottom anchor dot — origin of threads */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
            <div className="w-3 h-3 rounded-full"
              style={{ background: 'radial-gradient(circle at 35% 30%, rgb(var(--accent)), #7a5010)', boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }} />
          </div>
        </motion.div>

        {/* Branch polaroids */}
        {BRANCHES.map((b, i) => (
          <motion.div key={b.id}
            className="absolute cursor-default select-none"
            style={{ top: b.top, left: b.left, width: b.width, zIndex: 5 }}
            initial={{ opacity: 0, y: 24, rotate: b.rotation - 4 }}
            animate={{ opacity: 1, y: 0, rotate: b.rotation }}
            transition={{ duration: 0.8, delay: 1.0 + i * 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.07, rotate: 0, zIndex: 20, transition: { duration: 0.25 } }}
          >
            <Pin />
            <div className="bg-white pt-2 px-2 pb-8 shadow-[0_8px_28px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.2)]">
              <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                {b.type === 'video' ? (
                  <video src={b.src} autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.src} alt={b.caption}
                    className="absolute inset-0 w-full h-full object-cover" />
                )}
              </div>
              <p className="text-center mt-2 text-[7px] tracking-[0.18em] uppercase text-neutral-400"
                style={{ fontFamily: 'monospace' }}>
                {b.caption}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
