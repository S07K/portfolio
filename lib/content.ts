// ─────────────────────────────────────────────────────────────────────────────
// All site copy + data lives here. Media paths marked PLACEHOLDER are files
// you should replace with your own (see README notes at the end of the PR).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Shubham Kumar',
  title: 'AI Product Engineer',
  tagline:
    'I design and build AI products end to end - from the experience people see to the agents behind it.',
  status: 'Open to AI Product Engineer & Design Engineer roles · Remote',
  location: 'DELHI, IN',
  url: 'https://portfolio-indol-three-50.vercel.app',
  description:
    'Shubham Kumar is an AI Product Engineer who designs and builds AI products end to end - interfaces, agents and the systems behind them. ~4 years shipping production SaaS at Paytm and EnableX.',
  email: 'shubham3431kumar@gmail.com',
}

export const links = {
  github: 'https://github.com/S07K',
  linkedin: 'https://www.linkedin.com/in/0700shubham',
  x: 'https://x.com/0700shubham',
  youtube: 'https://www.youtube.com/@function.shubham',
  instagram: 'https://www.instagram.com/function.shubham/',
  resume:
    'https://drive.google.com/file/d/1fLvMWTyhIKCOE5xZuYDcoN1CSqxuvwYr/view?usp=sharing',
}

export const reel = {
  // PLACEHOLDER - replace with your own footage (muted, 6–12s loop, 2.39:1)
  mp4: '/media/reel.mp4',
  webm: '/media/reel.webm',
  poster: '/media/reel-poster.jpg',
}

export type Project = {
  slug?: string
  name: string
  summary: string
  image: string
  imageAlt: string
  /** PLACEHOLDER - short muted clip played on hover. Missing files fail silently. */
  clip?: string
  tags: string[]
  site?: { label: string; href: string }
  github?: string
  live?: boolean
  /** Card panel tint: [hue 0–360, saturation 0–100]. Keep saturation low. */
  tint: [number, number]
}

export const featured: Project[] = [
  {
    slug: 'guildos',
    name: 'GuildOS',
    tint: [145, 16],
    summary:
      'An open-source AI design studio. Five specialist agents design editable HTML + Tailwind screens on a shared canvas, review each other’s work and revise from your comments.',
    image: '/screens/guildos.jpg',
    imageAlt: 'GuildOS homepage - describe your product, get a reviewed landing page',
    clip: '/media/work/guildos.mp4',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    site: { label: 'guildos.design', href: 'https://guildos.design' },
    github: 'https://github.com/S07K/guildos',
    live: true,
  },
  {
    slug: 'kitevo',
    name: 'Kitevo',
    tint: [255, 22],
    summary:
      'Live media kits for creators - real-time Instagram and YouTube data, brand campaigns, and payments straight into the creator’s own Stripe or Razorpay at 0% fee.',
    image: '/screens/kitevo.jpg',
    imageAlt: 'Kitevo homepage with a live creator media kit card',
    clip: '/media/work/kitevo.mp4',
    tags: ['Next.js', 'React', 'Prisma', 'Postgres', 'Capacitor'],
    site: { label: 'getkitevo.com', href: 'https://getkitevo.com' },
    github: 'https://github.com/S07K/kitevo',
    live: true,
  },
  {
    slug: 'onealbum',
    name: 'OneAlbum',
    tint: [180, 18],
    summary:
      'One QR code puts everyone’s event photos into a single shared album. Guests scan, add their shots, and everyone leaves with the whole story. iOS, Android and web.',
    image: '/screens/onealbum-desktop.jpg',
    imageAlt: 'OneAlbum homepage - every photo, in one place',
    clip: '/media/work/onealbum.mp4',
    tags: ['Next.js', 'TypeScript', 'iOS', 'Android', 'QR'],
    site: { label: 'onealbum.app', href: 'https://onealbum.app' },
    live: true,
  },
]

export const projects: Project[] = [
  {
    name: 'Cutaway',
    tint: [228, 20],
    summary:
      'An open-source, local-first video editor that runs entirely in your browser. Multi-track timeline, WebGL preview, on-device Whisper captions and frame-exact MP4/WebM export. No account, no upload.',
    image: '/screens/cutaway.jpg',
    imageAlt: 'Cutaway editor with media panel, preview and multi-track timeline',
    clip: '/media/work/cutaway.mp4',
    tags: ['WebCodecs', 'WebGL', 'Whisper', 'Local-first'],
    site: { label: 'Live demo', href: 'https://cutaway-one.vercel.app/' },
    github: 'https://github.com/S07K/cutaway',
    live: true,
  },
  {
    name: 'RAG Chat',
    tint: [215, 22],
    summary: 'Ask questions about your documents and get grounded answers with citations to the exact passages.',
    image: '/screens/rag-chat.jpg',
    imageAlt: 'RAG Chat sign-in screen',
    clip: '/media/work/rag-chat.mp4',
    tags: ['RAG', 'Embeddings', 'Citations'],
    site: { label: 'Live demo', href: 'https://rag-chat-qqme.onrender.com' },
    github: 'https://github.com/S07K/rag-app',
    live: true,
  },
  {
    name: 'Task Tracker',
    tint: [35, 24],
    summary: 'A calendar task manager where an LLM uses tool calling to create, reschedule and delete tasks.',
    image: '/projects/taskTracker.png',
    imageAlt: 'Task Tracker calendar with AI assistant panel',
    clip: '/media/work/task-tracker.mp4',
    tags: ['Tool calling', 'Agents', 'React'],
    site: { label: 'Live demo', href: 'https://task-tracker-frontend-eta.vercel.app/' },
    github: 'https://github.com/S07K/task-tracker-frontend',
    live: true,
  },
]

export type Role = {
  period: string
  org: string
  role: string
  detail: string
  current?: boolean
}

export const experience: Role[] = [
  {
    period: 'Jun 2026 - Now',
    org: 'Independent',
    role: 'AI Product Engineer',
    detail: 'Designing and building GuildOS, Kitevo and OneAlbum.',
    current: true,
  },
  {
    period: 'Sep 2025 - Jun 2026',
    org: 'Paytm',
    role: 'Senior Software Engineer',
    detail:
      'Owned frontend architecture for insurance journeys. ~20% revenue impact, ~80% fewer critical production errors, ~40% faster delivery with AI-assisted workflows.',
  },
  {
    period: 'Jul 2022 - Sep 2025',
    org: 'EnableX',
    role: 'Software Engineer → Senior Software Engineer',
    detail:
      'Led frontend for a conversational-AI chatbot builder SaaS. Built Instagram, Messenger and WhatsApp channels plus Stripe, PayU and CRM integrations. Grew user adoption by 30%.',
  },
  {
    period: 'May - Jun 2021',
    org: 'Teach For India',
    role: 'Web Developer Intern',
    detail: 'Designed and built a campaign site for an education initiative.',
  },
]

export const education = {
  degree: 'B.Sc. (Hons.) Computer Science',
  school: 'Shaheed Sukhdev College, University of Delhi',
}

export type Frame = {
  src: string
  alt: string
  lens: string
  aperture: string
  shutter: string
  iso: number
  place?: string
}

// PLACEHOLDER - replace with your own photographs (portrait 4:5 works best).
export const frames: Frame[] = [
  { src: '/frames/frame-01.jpg', alt: 'Photograph 01 - replace alt text', lens: '35mm', aperture: 'f/1.8', shutter: '1/250', iso: 200, place: 'Delhi' },
  { src: '/frames/frame-02.jpg', alt: 'Photograph 02 - replace alt text', lens: '50mm', aperture: 'f/2.0', shutter: '1/125', iso: 400, place: 'Delhi' },
  { src: '/frames/frame-03.jpg', alt: 'Photograph 03 - replace alt text', lens: '24mm', aperture: 'f/4.0', shutter: '1/500', iso: 100 },
  { src: '/frames/frame-04.jpg', alt: 'Photograph 04 - replace alt text', lens: '85mm', aperture: 'f/1.4', shutter: '1/320', iso: 200 },
  { src: '/frames/frame-05.jpg', alt: 'Photograph 05 - replace alt text', lens: '35mm', aperture: 'f/2.8', shutter: '1/60', iso: 800 },
  { src: '/frames/frame-06.jpg', alt: 'Photograph 06 - replace alt text', lens: '50mm', aperture: 'f/1.8', shutter: '1/200', iso: 400 },
  { src: '/frames/frame-07.jpg', alt: 'Photograph 07 - replace alt text', lens: '24mm', aperture: 'f/5.6', shutter: '1/1000', iso: 100 },
  { src: '/frames/frame-08-office.jpg', alt: 'Photograph 08 - replace alt text', lens: '85mm', aperture: 'f/2.0', shutter: '1/160', iso: 640 },
]

export type StackCategory = 'AI' | 'Frontend' | 'Backend' | 'Design' | 'Tools'

export const stack: Record<StackCategory, string[]> = {
  AI: ['LLM apps', 'AI agents', 'RAG', 'Tool calling', 'Structured outputs'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'Postgres', 'Prisma', 'Supabase'],
  Design: ['Figma', 'Design systems', 'UX'],
  Tools: ['Git', 'Vercel', 'Capacitor', 'Stripe', 'Razorpay'],
}

// ── Case studies ────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string
  name: string
  logline: string
  role: string
  year: string
  /** PLACEHOLDER - demo video. If the file is missing, a slate placeholder renders instead. */
  demo: string
  poster: string
  problem: string[]
  decisions: { title: string; body: string }[]
  /** Third section heading. Defaults to "How the AI works". */
  aiTitle?: string
  ai: { title: string; body: string }[]
  result: string[]
  /** Extra links shown as pills under the header (e.g. app stores). */
  links?: { label: string; href: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'guildos',
    name: 'GuildOS',
    logline: 'An open-source AI design studio where five specialist agents design, critique and revise real screens together.',
    role: 'Design, engineering, agent architecture',
    year: '2026',
    demo: '/media/demos/guildos-demo.mp4',
    poster: '/screens/guildos.jpg',
    problem: [
      'Most AI design tools return a single flat image or a blob of code nobody can edit. The output looks impressive once, then dead-ends: you can’t move a button, you can’t ask for a revision without starting over, and the layout often falls apart the moment you look closely.',
      'I wanted a studio where AI output is a starting point you can work with - real, editable screens that a team of agents keeps improving, like a design crit that never ends.',
    ],
    decisions: [
      { title: 'A shared canvas, not a chat log', body: 'Screens live side by side on a canvas so you judge them the way designers do - as a set. Comments are pinned to the screen they’re about, and agents revise from those comments directly.' },
      { title: 'Editable HTML + Tailwind as the medium', body: 'Every screen is real markup, so it can be inspected, tweaked and exported. Output you can edit builds more trust than output that only looks good.' },
      { title: 'Specialist roles over one generalist', body: 'Five agents each own a narrow job and review each other’s work. Narrow roles produce more predictable output, and review between them catches mistakes before you see them.' },
    ],
    ai: [
      { title: 'Shared component schema', body: 'Agents compose screens from a shared component schema instead of free-writing markup, so every agent speaks the same structural language and output stays consistent across screens.' },
      { title: 'Flexbox, not coordinates', body: 'Agents describe layout with Flexbox rather than guessing absolute x/y positions. That single change removed most of the overlapping, off-canvas and misaligned output.' },
      { title: 'Backend validation', body: 'Every generation is validated on the server before it reaches the canvas. Invalid output is rejected and retried instead of rendered.' },
      { title: 'Small, bounded steps', body: 'Generation is split into small steps with clear inputs and outputs. Each step is easier to validate and cheaper to retry than one giant prompt.' },
    ],
    result: [
      'GuildOS is live at guildos.design and open source on GitHub. Agent output went from “sometimes usable” to reliably editable screens, because the reliability work lives in the system - schema, layout model, validation - rather than in prompt tweaks.',
    ],
  },
  {
    slug: 'kitevo',
    name: 'Kitevo',
    logline: 'Live media kits for creators, with an AI Copilot that only works from the creator’s real numbers.',
    role: 'Product, design, full-stack engineering',
    year: '2026',
    demo: '/media/demos/kitevo-demo.mp4',
    poster: '/screens/kitevo.jpg',
    problem: [
      'Creators pitch brands with media kits that are out of date the day they’re exported - a PDF of screenshots and numbers from months ago. Brands can’t trust them, and creators waste hours rebuilding them.',
      'Payments are the other half of the problem: platforms that sit between creators and brands usually take a cut of every deal.',
    ],
    decisions: [
      { title: 'One link that stays current', body: 'A media kit is a live page pulling real-time Instagram and YouTube data, so a brand always sees today’s numbers.' },
      { title: 'Campaigns and payments in the same place', body: 'Brand campaigns and payouts sit next to the kit. Money goes straight into the creator’s own Stripe or Razorpay account at a 0% platform fee.' },
      { title: 'Web and mobile from one codebase', body: 'Built with Next.js and shipped to mobile with Capacitor, so creators can share and update their kit from their phone.' },
    ],
    ai: [
      { title: 'Grounded Copilot', body: 'The AI Copilot drafts bios, brand pitches and rate suggestions using only the creator’s real, synced metrics as context.' },
      { title: 'It never invents stats', body: 'Numbers in the output must come from the creator’s data. The Copilot writes the words; it doesn’t make up the figures - a hard rule, because a fabricated stat in a brand pitch breaks trust instantly.' },
    ],
    result: [
      'Kitevo is live at getkitevo.com. Creators get a media kit that maintains itself, an AI assistant they can trust with their pitch, and payments without a middleman’s cut.',
    ],
  },
  {
    slug: 'onealbum',
    name: 'OneAlbum',
    logline: 'A shared photo album for any event. One QR code, every guest’s photos, one place.',
    role: 'Product, design, web & mobile engineering',
    year: '2026',
    demo: '/media/demos/onealbum-demo.mp4',
    poster: '/screens/onealbum-desktop.jpg',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/app/id6797670766' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.joinonealbum.app' },
    ],
    problem: [
      'After a wedding, a trip or a party, the photos are scattered across everyone’s phones. Collecting them means chasing people over group chats, receiving compressed copies, and still missing half of what was shot.',
      'The people with the best photos are often guests you barely know, and asking everyone to install something or create an account before they can share kills participation.',
    ],
    decisions: [
      { title: 'A QR code as the invite', body: 'Everyone at an event is in the same room, so the invite is a QR code anyone can scan, not a contact list to manage.' },
      { title: 'One album, not another chat', body: 'Photos go into a single shared album built for looking back at the event, not a feed or a thread competing for attention.' },
      { title: 'Everywhere guests already are', body: 'Native iOS and Android apps for hosts and regulars, and the web for guests who just want to scan and add their shots.' },
    ],
    aiTitle: 'How it works',
    ai: [
      { title: 'Create an album', body: 'A host creates an album for the event: a wedding, a trip, a party.' },
      { title: 'Share one QR code', body: 'The album gets a QR code to print, put on a table card or show on screen.' },
      { title: 'Guests add their photos', body: 'Anyone who scans can add the photos they took, straight from their phone.' },
      { title: 'Everyone keeps the whole story', body: 'All the photos land in one place, so every guest can see and save the full event, not just their own camera roll.' },
    ],
    result: [
      'OneAlbum is live at onealbum.app and available on the App Store and Google Play.',
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
