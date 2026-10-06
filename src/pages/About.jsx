import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Megaphone, Code2, Palette, BarChart3, Users, Target, Compass, HeartHandshake,
  MapPin, Laptop, Clock, Quote, Hammer, UserCheck, Wifi, GraduationCap, Briefcase, Sparkles, CheckCircle2,
} from 'lucide-react'
import Seo from '../lib/seo'
import { Why, CtaBand } from '../components/Sections'
import { site } from '../data/site'

// ---- EDIT THESE ----------------------------------------------------------
const HERO_IMAGE = '/coachingimg.jpg'
const FOUNDER = {
  image: '/ceoimg.jpeg',
  name: 'Vasudeva V Murthy',
  role: 'Founder & CEO',
  bio: [
    `${site.name} was started with one simple idea: every student deserves a learning buddy who makes new skills practical, clear and achievable.`,
    'Under this vision, the academy focuses on hands-on learning, personal guidance and flexible online batches, so learners can build skills, gain confidence and grow toward their career goals.',
  ],
}
// --------------------------------------------------------------------------

const FACTS = [
  { icon: MapPin, label: 'Based in', value: 'Koramangala, Bangalore' },
  { icon: Laptop, label: 'Learning mode', value: 'Flexible online batches' },
  { icon: Clock, label: 'Batch timings', value: 'Morning, afternoon & evening' },
]

// Mission / vision / approach (now with extra points for the detail panel)
const PILLARS = [
  {
    icon: Target, title: 'Our mission', short: 'Why we exist',
    text: 'To make practical, career-focused IT and professional skills easy to learn for every student, whatever their starting point.',
    points: ['Career-focused curriculum', 'Beginner-friendly start', 'Skills you can use at work'],
  },
  {
    icon: Compass, title: 'Our vision', short: 'Where we are heading',
    text: 'To be the learning buddy students trust as they build skills, gain confidence and grow their careers.',
    points: ['A trusted learning buddy', 'Confidence in every learner', 'Long-term career growth'],
  },
  {
    icon: HeartHandshake, title: 'Our approach', short: 'How we teach',
    text: 'Learn by doing, get personal guidance, and keep going at a pace that fits your routine. Nobody is left behind.',
    points: ['Learn by doing', 'Personal guidance', 'Pace that fits your routine'],
  },
]

const TRACKS = [
  { icon: Megaphone, name: 'Digital Marketing' },
  { icon: Code2, name: 'Full Stack Development' },
  { icon: Palette, name: 'Graphic Design' },
  { icon: BarChart3, name: 'Business Development' },
  { icon: Users, name: 'Communication & Personality Development' },
]

const FOUNDER_CHIPS = [
  { icon: GraduationCap, label: 'Your Learning Buddy', pos: 'right-0 top-[8%]' },
  { icon: Briefcase, label: 'Career-Focused', pos: 'left-0 top-[46%]' },
  { icon: Sparkles, label: 'Practical Learning', pos: 'right-[2%] bottom-[6%]' },
]
const FOUNDER_POINTS = [
  { icon: Hammer, title: 'Hands-on learning', text: 'Learn by doing, so every concept turns into a skill you can actually use.' },
  { icon: UserCheck, title: 'Personal guidance', text: 'Real support from the team, so nobody is left behind on the way.' },
  { icon: Wifi, title: 'Flexible online batches', text: 'Morning, afternoon and evening batches that fit around your routine.' },
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

/* ------------------------------------------------------------------ */
/* Mission / Vision / Approach: selector list + detail panel          */
/* ------------------------------------------------------------------ */
function Pillars() {
  const [active, setActive] = useState(0)
  const P = PILLARS[active]

  return (
    <section className="relative overflow-hidden bg-[#F4F8FF] py-16 sm:py-24" aria-labelledby="pillars-heading">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0B5ED7]/10 blur-3xl" />

      <div className={`${wrap} relative`}>
        <h2 id="pillars-heading" className="max-w-2xl text-3xl font-extrabold tracking-tight text-[#062B63] sm:text-4xl">
          Learn. Build skills. Gain confidence. Grow your career.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-slate-600">Tap a card to see what drives us.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* selector cards */}
          <div className="flex flex-col gap-3" role="tablist" aria-orientation="vertical" aria-label="Mission, vision and approach">
            {PILLARS.map(({ icon: I, title, short }, i) => {
              const on = active === i
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-2xl p-4 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:p-5 ${
                    on
                      ? 'bg-white shadow-[0_18px_40px_-18px_rgba(11,94,215,.45)] ring-2 ring-[#0B5ED7] lg:translate-x-2'
                      : 'bg-white/70 ring-1 ring-[#0B5ED7]/10 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition duration-300 ${on ? 'bg-[#0B5ED7] text-white' : 'bg-[#E6EFFF] text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white'}`}>
                    <I className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold text-[#062B63]">{title}</span>
                    <span className="block text-sm text-slate-500">{short}</span>
                  </span>
                  <ArrowRight className={`h-5 w-5 shrink-0 text-[#0B5ED7] transition duration-300 ${on ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} aria-hidden />
                </button>
              )
            })}
          </div>

          {/* detail panel */}
          <div
            key={active}
            role="tabpanel"
            aria-live="polite"
            className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_24px_60px_-24px_rgba(6,43,99,.35)] ring-1 ring-[#0B5ED7]/10 sm:p-10"
            style={{ animation: 'panelIn .35s ease-out' }}
          >
            <P.icon aria-hidden className="absolute -bottom-8 -right-8 h-48 w-48 text-[#0B5ED7]/5 sm:h-64 sm:w-64" />
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B5ED7] text-white shadow-lg shadow-[#0B5ED7]/30">
              <P.icon className="h-7 w-7" aria-hidden />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold text-[#062B63] sm:text-3xl">{P.title}</h3>
            <p className="relative mt-3 max-w-xl text-lg leading-relaxed text-slate-600">{P.text}</p>
            <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
              {P.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 rounded-xl bg-[#F4F8FF] px-4 py-3 font-medium text-[#062B63]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0B5ED7]" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@keyframes panelIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}} @media (prefers-reduced-motion:reduce){[role=tabpanel]{animation:none!important}}`}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Founder                                                            */
/* ------------------------------------------------------------------ */
function Founder() {
  const [failed, setFailed] = useState(false)
  const [tab, setTab] = useState(0)
  const tiltRef = useRef(null)

  // gentle 3D tilt that follows the mouse (mouse only, off for reduced motion)
  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = tiltRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${x * 10}deg`)
    el.style.setProperty('--ry', `${-y * 10}deg`)
  }
  const onLeave = () => {
    const el = tiltRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  const Active = FOUNDER_POINTS[tab]

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24" aria-labelledby="founder-heading">
      {/* soft light-blue backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-br from-[#EAF2FF] via-white to-[#F4F8FF] lg:w-[55%] lg:rounded-r-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
        {/* ---------- Circle portrait ---------- */}
        <div className="mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px]">
          <div
            ref={tiltRef}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            style={{ transform: 'perspective(900px) rotateX(var(--ry, 0deg)) rotateY(var(--rx, 0deg))' }}
            className="group relative aspect-square w-full transition-transform duration-200 ease-out motion-reduce:transform-none"
          >
            <div aria-hidden className="absolute -inset-6 rounded-full bg-[#2563EB]/15 blur-3xl" />
            <div aria-hidden className="absolute inset-0 rounded-full border border-[#0B5ED7]/20" />
            <div aria-hidden className="absolute inset-[4%] rounded-full border-2 border-dashed border-[#0B5ED7]/30 transition-transform duration-[1500ms] group-hover:rotate-[60deg] motion-reduce:transition-none" />
            <div aria-hidden className="absolute inset-[8%] rounded-full bg-gradient-to-br from-[#D6E6FF] to-[#EAF2FF]" />

            <div className="absolute inset-[10%] overflow-hidden rounded-full bg-[#E6EFFF] shadow-[0_30px_60px_-20px_rgba(6,43,99,0.45)] ring-[6px] ring-white">
              {!failed ? (
                <img
                  src={FOUNDER.image}
                  alt={`${FOUNDER.name}, ${FOUNDER.role} of ${site.name}`}
                  width="480"
                  height="600"
                  loading="lazy"
                  onError={() => setFailed(true)}
                  className="h-full w-full scale-105 object-cover object-top transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-6xl font-extrabold text-[#0B5ED7]" aria-hidden>WX</div>
              )}
            </div>

            {FOUNDER_CHIPS.map(({ icon: I, label, pos }) => (
              <span
                key={label}
                className={`absolute ${pos} inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#062B63] shadow-[0_14px_28px_-10px_rgba(6,43,99,0.35)] ring-1 ring-[#0B5ED7]/10 transition duration-300 hover:-translate-y-1 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm`}
              >
                <I className="h-4 w-4 text-[#0B5ED7]" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Content ---------- */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#0B5ED7]">Meet the founder</p>
          <h2 id="founder-heading" className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-[#062B63] sm:text-5xl">{FOUNDER.name}</h2>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#0B5ED7] px-4 py-1.5 text-sm font-semibold text-white">
            <span aria-hidden className="h-2 w-2 rounded-full bg-white" />
            {FOUNDER.role}, {site.name}
          </p>

          {/* quote card */}
          <figure className="relative mt-8 rounded-3xl border-l-4 border-[#0B5ED7] bg-white p-6 shadow-[0_18px_40px_-20px_rgba(6,43,99,.3)] ring-1 ring-[#0B5ED7]/10 sm:p-8">
            <Quote className="absolute -top-4 left-6 h-9 w-9 rounded-full bg-[#0B5ED7] p-2 text-white" aria-hidden />
            <blockquote className="text-lg font-medium leading-relaxed text-[#062B63] sm:text-xl">{FOUNDER.bio[0]}</blockquote>
          </figure>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{FOUNDER.bio[1]}</p>

          {/* interactive points */}
          <div className="mt-8">
            <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="What the founder's vision focuses on">
              {FOUNDER_POINTS.map(({ icon: I, title }, i) => {
                const on = tab === i
                return (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setTab(i)}
                    onMouseEnter={() => setTab(i)}
                    aria-pressed={on}
                    className={`flex items-center gap-3 rounded-2xl p-3 text-left text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:flex-col sm:items-start sm:gap-2 sm:p-4 ${
                      on
                        ? 'bg-[#0B5ED7] text-white shadow-lg shadow-[#0B5ED7]/30 sm:-translate-y-1'
                        : 'bg-white text-[#062B63] ring-1 ring-[#0B5ED7]/15 hover:bg-[#EAF2FF]'
                    }`}
                  >
                    <I className={`h-5 w-5 ${on ? 'text-white' : 'text-[#0B5ED7]'}`} aria-hidden />
                    {title}
                  </button>
                )
              })}
            </div>
            <div key={tab} className="mt-4 flex items-start gap-4 rounded-2xl bg-[#EAF2FF] p-5 ring-1 ring-[#0B5ED7]/10" aria-live="polite" style={{ animation: 'panelIn .3s ease-out' }}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0B5ED7] text-white">
                <Active.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-bold text-[#062B63]">{Active.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{Active.text}</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/courses" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B5ED7] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(11,94,215,0.6)] transition hover:-translate-y-0.5 hover:bg-[#0A4AA8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
              Explore Courses <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-[#0B5ED7]/40 bg-white px-6 py-3 font-semibold text-[#0B5ED7] transition hover:-translate-y-0.5 hover:bg-[#EAF2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* What we teach: folder-style cards                                  */
/* ------------------------------------------------------------------ */
function Tracks() {
  const [hot, setHot] = useState(2)
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF2FF] via-[#CFE0FB] to-[#A9C8F9] py-16 sm:py-24" aria-labelledby="teach-heading">
      <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#2563EB]/20 blur-3xl" />
      <div className={`${wrap} relative`}>
        <h2 id="teach-heading" className="text-3xl font-extrabold tracking-tight text-[#062B63] sm:text-4xl">What we teach</h2>
        <p className="mt-3 max-w-2xl text-lg text-[#0A3A80]/80">Five training areas, each designed around practical skills you can use.</p>

        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map(({ icon: I, name }, i) => {
            const on = hot === i
            return (
              <li key={name}>
                <Link
                  to="/courses"
                  onMouseEnter={() => setHot(i)}
                  onFocus={() => setHot(i)}
                  className="group relative block h-[300px] rounded-3xl bg-white/40 ring-1 ring-white/70 transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7]"
                >
                  {/* paper sheet sticking out of the folder */}
                  <div aria-hidden className={`absolute left-6 right-6 top-5 h-[52%] origin-bottom rounded-2xl bg-white p-4 shadow-[0_14px_30px_-14px_rgba(6,43,99,.35)] transition duration-500 motion-reduce:transition-none ${on ? '-translate-y-2 rotate-0' : '-rotate-2 group-hover:-translate-y-2 group-hover:rotate-0'}`}>
                    <span className="block h-2 w-2/5 rounded-full bg-[#BFD7FB]" />
                    <span className="mt-2 block h-2 w-3/5 rounded-full bg-[#DCEBFF]" />
                    <div className="mt-3 grid grid-cols-10 gap-1.5">
                      {Array.from({ length: 20 }).map((_, d) => (
                        <span key={d} className={`h-1.5 w-1.5 rounded-full ${d % 3 === 0 ? 'bg-[#2563EB]' : 'bg-[#BFD7FB]'}`} />
                      ))}
                    </div>
                  </div>

                  {/* folder tab with icon */}
                  <span className={`absolute bottom-[56%] left-0 grid h-10 w-24 place-items-start rounded-t-3xl pl-5 pt-2.5 transition-colors duration-300 ${on ? 'bg-[#2F6FEA] text-white' : 'bg-[#F1F7FF] text-[#0B5ED7]'}`}>
                    <I className="h-5 w-5" aria-hidden />
                  </span>

                  {/* folder front */}
                  <div className={`absolute inset-x-0 bottom-0 flex h-[56%] flex-col justify-end rounded-3xl rounded-tl-none p-5 transition-colors duration-300 sm:p-6 ${on ? 'bg-[#2F6FEA] shadow-[0_24px_50px_-18px_rgba(11,94,215,.8)]' : 'bg-[#F1F7FF] shadow-[0_16px_36px_-20px_rgba(6,43,99,.35)] group-hover:bg-white'}`}>
                    <span className={`text-xl font-bold leading-snug transition-colors duration-300 ${on ? 'text-white' : 'text-[#062B63]'}`}>{name}</span>
                    <span className={`mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${on ? 'text-white/90' : 'text-[#0B5ED7]'}`}>
                      View courses <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default function About() {
  return (<>
    <Seo title="About | WebdudeX IT Skills Academy, Bangalore" description="WebdudeX IT Skills Academy is a practical IT and professional skills training institute in Koramangala, Bangalore, offering flexible online learning." />

    {/* Full-width hero image (starts below the fixed navbar) */}
    <section className="relative bg-white pt-[72px]">
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[480px]">
        <img src={HERO_IMAGE} alt="Students learning at WebdudeX IT Skills Academy" width="1920" height="480" fetchpriority="high" className="h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,.88)_0%,rgba(6,43,99,.6)_45%,rgba(6,43,99,.1)_100%)]" />
        <div className={`${wrap} absolute inset-0 flex flex-col justify-center`}>
          <nav aria-label="Breadcrumb" className="text-sm text-white/80">
            <Link to="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span> <span className="text-white">About</span>
          </nav>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">About WebdudeX IT Skills Academy</h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-xl">{site.tagline}: practical, career-focused learning.</p>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 sm:py-24">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16`}>
        <div className="space-y-5 text-lg leading-relaxed text-slate-600">
          <p className="text-sm font-semibold text-[#0B5ED7]">Our story</p>
          <p>{site.name} is a skills training academy based in Koramangala, Bangalore. We teach digital marketing, full stack development, graphic design, business development, and communication skills and personality development.</p>
          <p>Our approach is simple: be a learning buddy. We focus on practical learning, so students build skills they can use, and on personal guidance, so nobody is left behind.</p>
          <p>Training is delivered through flexible online batches across morning, afternoon and evening, helping learners fit new skills into their routine and grow toward their career goals.</p>
        </div>
        <ul className="grid content-start gap-4">
          {FACTS.map(({ icon: I, label, value }) => (
            <li key={label} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_12px_30px_-12px_rgba(6,43,99,.25)] ring-1 ring-[#0B5ED7]/10">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#2563EB] text-white"><I className="h-6 w-6" aria-hidden /></span>
              <span><span className="block text-sm text-slate-500">{label}</span><span className="block font-semibold text-[#062B63]">{value}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Mission / vision / approach */}
    <Pillars />

    {/* Founder */}
    <Founder />

    {/* What we teach */}
    <Tracks />

    <Why /><CtaBand />
  </>)
}