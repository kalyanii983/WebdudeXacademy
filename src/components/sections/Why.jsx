import { ArrowRight } from 'lucide-react'
import { Button, Reveal } from '../ui'
import { whyCards } from '../../data/site'

/**
 * Bento-grid layout (6 columns on desktop, 2 on tablet, 1 on mobile).
 * Content still comes from `whyCards` in data/site, so your text is unchanged.
 * Card styles and sizes are assigned by position (first card = featured, and so on).
 */

const SPANS = [
  'sm:col-span-2 lg:col-span-4', // 0 wide
  'lg:col-span-2', // 1
  'lg:col-span-2', // 2
  'sm:col-span-2 lg:col-span-4', // 3 wide
  'lg:col-span-3', // 4
  'lg:col-span-3', // 5
]

const TONES = ['navy', 'white', 'white', 'blue', 'white', 'navy']

const TONE = {
  navy: {
    card: 'bg-[#062B63] text-white',
    title: 'text-white',
    text: 'text-white/75',
    icon: 'bg-white/10 text-white ring-1 ring-white/20 group-hover:bg-white group-hover:text-[#062B63]',
    index: 'text-white/15',
    glow: 'rgba(255,255,255,0.14)',
    grid: true,
  },
  blue: {
    card: 'bg-gradient-to-br from-[#0B5ED7] to-[#2563EB] text-white',
    title: 'text-white',
    text: 'text-white/85',
    icon: 'bg-white/15 text-white ring-1 ring-white/25 group-hover:bg-white group-hover:text-[#0B5ED7]',
    index: 'text-white/20',
    glow: 'rgba(255,255,255,0.18)',
    grid: true,
  },
  white: {
    card: 'bg-white text-[#0F172A] ring-1 ring-[#0B5ED7]/10 hover:ring-[#2563EB]/40',
    title: 'text-[#062B63]',
    text: 'text-slate-600',
    icon: 'bg-[#F4F8FF] text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white',
    index: 'text-[#0B5ED7]/10',
    glow: 'rgba(37,99,235,0.14)',
    grid: false,
  },
}

function WhyCard({ icon: Icon, title, text, i }) {
  const t = TONE[TONES[i % TONES.length]]
  const wide = i % 3 === 0 // cards 0 and 3 are the large ones

  // mouse-follow spotlight (desktop hover only, no effect on touch)
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <Reveal delay={i * 0.06} className={`h-full ${SPANS[i % SPANS.length]}`}>
      <article
        onMouseMove={onMove}
        className={`group relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-[0_10px_30px_-16px_rgba(6,43,99,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(11,94,215,0.5)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7 ${t.card}`}
      >
        {/* decorative fine grid on dark cards */}
        {t.grid && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]"
          />
        )}

        {/* spotlight that follows the cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), ${t.glow}, transparent 65%)` }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none ${t.icon}`}
          >
            <Icon size={22} aria-hidden />
          </span>
          <span aria-hidden className={`select-none text-5xl font-extrabold leading-none ${t.index}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="relative mt-8">
          <span aria-hidden className="mb-4 block h-0.5 w-8 rounded-full bg-current opacity-40 transition-all duration-300 group-hover:w-16 group-hover:opacity-80" />
          <h3 className={`font-bold ${wide ? 'text-2xl' : 'text-lg'} ${t.title}`}>{title}</h3>
          <p className={`mt-2 leading-relaxed ${wide ? 'max-w-md text-base' : 'text-[15px]'} ${t.text}`}>{text}</p>
        </div>
      </article>
    </Reveal>
  )
}

export function Why() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FF] to-white py-16 sm:py-24"
      aria-labelledby="why-heading"
    >
      {/* soft background accents */}
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#0B5ED7]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0B5ED7]">
              Why WebdudeX <span aria-hidden className="h-px w-10 bg-[#0B5ED7]" />
            </p>
            <h2 id="why-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#062B63] sm:text-4xl lg:text-5xl">
              Why choose <span className="text-[#0B5ED7]">WebdudeX?</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Learning that is practical, flexible and built around your career.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {whyCards.map((card, i) => (
            <WhyCard key={card.title} {...card} i={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_30px_-16px_rgba(6,43,99,0.3)] ring-1 ring-[#0B5ED7]/10 sm:flex-row sm:items-center sm:p-7">
            <p className="text-lg font-semibold text-[#062B63]">Ready to start building your skills?</p>
            <div className="flex flex-wrap gap-3">
              <Button to="/courses" icon={ArrowRight}>Explore Courses</Button>
              <Button to="/contact" variant="outline">Enquire Now</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}