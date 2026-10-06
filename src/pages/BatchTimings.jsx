import { useState } from 'react'
import { ArrowRight, CalendarCheck, Check, Clock, Laptop, Sun, Sunrise, Sunset, Users } from 'lucide-react'
import Seo from '../lib/seo'
import { PageHeader, Reveal, Button } from '../components/ui'
import { CtaBand } from '../components/Sections'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: Laptop,
    title: 'Live Interactive Sessions',
    text: 'All our batches are conducted live by expert trainers. You can ask questions, participate in discussions, and get real-time feedback.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    text: 'We limit the number of students per batch to ensure everyone gets personal guidance and nobody is left behind.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    text: 'Whether you are a college student or a working professional, we have morning, afternoon, and evening slots to fit your day.',
  },
  {
    icon: CalendarCheck,
    title: 'Backup Classes',
    text: 'Missed a session? We provide recorded sessions and arrange backup classes so your learning never stops.',
  },
]

// start/end are 24h hours, used for the day timeline.
// NOTE: your page copy says 7 batches, but only these 6 slots were visible in your screenshot.
// If there is a 7th batch, add it to this list and it will appear everywhere automatically.
const SLOTS = [
  { id: 'm1', group: 'morning', label: '7:00 AM – 9:00 AM', short: '7–9 AM', start: 7, end: 9, icon: Sunrise },
  { id: 'm2', group: 'morning', label: '9:00 AM – 11:00 AM', short: '9–11 AM', start: 9, end: 11, icon: Sunrise },
  { id: 'm3', group: 'morning', label: '11:00 AM – 1:00 PM', short: '11 AM–1 PM', start: 11, end: 13, icon: Sun },
  { id: 'a1', group: 'afternoon', label: '2:00 PM – 4:00 PM', short: '2–4 PM', start: 14, end: 16, icon: Sun },
  { id: 'a2', group: 'afternoon', label: '4:00 PM – 6:00 PM', short: '4–6 PM', start: 16, end: 18, icon: Sunset },
  { id: 'a3', group: 'afternoon', label: '6:00 PM – 8:00 PM', short: '6–8 PM', start: 18, end: 20, icon: Sunset },
]

const FILTERS = [
  { id: 'all', label: 'All batches' },
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon & Evening' },
]

const DAY_START = 7
const DAY_END = 20

/* ------------------------------------------------------------------ */
/* Feature cards                                                       */
/* ------------------------------------------------------------------ */

const FEATURE_TONES = ['navy', 'white', 'white', 'blue']

function FeatureCard({ f, i }) {
  const tone = FEATURE_TONES[i]
  const dark = tone !== 'white'
  const Icon = f.icon
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  const bg =
    tone === 'navy'
      ? 'bg-[#062B63] text-white'
      : tone === 'blue'
        ? 'bg-gradient-to-br from-[#0B5ED7] to-[#2563EB] text-white'
        : 'bg-white ring-1 ring-[#0B5ED7]/10 hover:ring-[#2563EB]/40'

  return (
    <Reveal delay={i * 0.08} className="h-full">
      <article
        onMouseMove={onMove}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-[0_10px_30px_-16px_rgba(6,43,99,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(11,94,215,0.5)] motion-reduce:transform-none ${bg}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,235,0.12)'}, transparent 65%)`,
          }}
        />
        <span
          className={`relative grid h-12 w-12 place-items-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none ${dark
            ? 'bg-white/10 text-white ring-1 ring-white/25 group-hover:bg-white group-hover:text-[#0B5ED7]'
            : 'bg-[#F4F8FF] text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white'
            }`}
        >
          <Icon size={22} aria-hidden />
        </span>
        <h3 className={`relative mt-5 text-lg font-bold ${dark ? 'text-white' : 'text-[#062B63]'}`}>{f.title}</h3>
        <p className={`relative mt-2 text-sm leading-relaxed ${dark ? 'text-white/80' : 'text-slate-600'}`}>{f.text}</p>
      </article>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Interactive timings board                                           */
/* ------------------------------------------------------------------ */

function TimingsBoard() {
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(SLOTS[0].id)

  const selected = SLOTS.find((s) => s.id === selectedId) || SLOTS[0]
  const visible = (s) => filter === 'all' || s.group === filter
  const span = DAY_END - DAY_START

  const pick = (s) => setSelectedId(s.id)

  return (
    <div>
      {/* filter tabs */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter batches">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${filter === f.id
              ? 'bg-[#0B5ED7] text-white shadow-[0_10px_22px_-10px_rgba(11,94,215,0.8)]'
              : 'bg-white text-[#062B63] ring-1 ring-[#0B5ED7]/15 hover:bg-[#0B5ED7]/10'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* day timeline */}
      <div className="mt-8 rounded-3xl bg-white p-5 shadow-[0_10px_30px_-16px_rgba(6,43,99,0.3)] ring-1 ring-[#0B5ED7]/10 sm:p-6">
        <p className="text-sm font-semibold text-[#062B63]">Your day at a glance</p>
        <div className="relative mt-4 h-14 rounded-2xl bg-[#F4F8FF]">
          {SLOTS.map((s) => {
            const left = ((s.start - DAY_START) / span) * 100
            const width = ((s.end - s.start) / span) * 100
            const active = s.id === selectedId
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => pick(s)}
                aria-label={`Select ${s.label}`}
                aria-pressed={active}
                title={s.label}
                style={{ left: `calc(${left}% + 2px)`, width: `calc(${width}% - 4px)` }}
                className={`absolute inset-y-1.5 grid place-items-center overflow-hidden rounded-xl text-[11px] font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-xs ${active
                  ? 'bg-[#0B5ED7] text-white shadow-md'
                  : 'bg-[#2563EB]/20 text-[#0B5ED7] hover:bg-[#2563EB]/40'
                  } ${visible(s) ? 'opacity-100' : 'opacity-25'}`}
              >
                <span className="hidden sm:block">{s.short}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
          <span>7 AM</span>
          <span>1 PM</span>
          <span>8 PM</span>
        </div>
      </div>

      {/* slot cards */}
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SLOTS.filter(visible).map((s, i) => {
          const active = s.id === selectedId
          const Icon = s.icon
          return (
            <li key={s.id} className="list-none">
              <Reveal delay={i * 0.06} className="h-full">
                <button
                  type="button"
                  onClick={() => pick(s)}
                  aria-pressed={active}
                  className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] motion-reduce:transform-none ${active
                    ? 'bg-[#062B63] text-white shadow-[0_24px_44px_-18px_rgba(6,43,99,0.7)]'
                    : 'bg-white shadow-[0_10px_30px_-16px_rgba(6,43,99,0.3)] ring-1 ring-[#0B5ED7]/10 hover:shadow-[0_22px_40px_-18px_rgba(11,94,215,0.45)] hover:ring-[#2563EB]/40'
                    }`}
                >
                  {active && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]"
                    />
                  )}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition duration-300 group-hover:scale-110 motion-reduce:transform-none ${active ? 'bg-white text-[#0B5ED7]' : 'bg-[#F4F8FF] text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white'
                        }`}
                    >
                      <Icon size={22} aria-hidden />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${active ? 'bg-white/15 text-white' : 'bg-[#0B5ED7]/10 text-[#0B5ED7]'
                        }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                      Online
                    </span>
                  </div>

                  <p className={`relative mt-6 text-2xl font-extrabold tracking-tight ${active ? 'text-white' : 'text-[#062B63]'}`}>
                    {s.label}
                  </p>
                  <p className={`relative mt-1 text-sm ${active ? 'text-white/75' : 'text-slate-600'}`}>
                    {s.group === 'morning' ? 'Morning batch' : 'Afternoon & evening batch'} · 2 hours
                  </p>

                  <span
                    className={`relative mt-5 inline-flex items-center gap-2 text-sm font-semibold ${active ? 'text-white' : 'text-[#0B5ED7]'
                      }`}
                  >
                    {active ? (
                      <>
                        <Check size={16} aria-hidden /> Selected
                      </>
                    ) : (
                      <>
                        Select this batch
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                      </>
                    )}
                  </span>
                </button>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {/* selected summary */}
      <div
        className="mt-6 flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-[#0B5ED7] to-[#2563EB] p-6 text-white shadow-[0_20px_40px_-20px_rgba(11,94,215,0.8)] sm:flex-row sm:items-center sm:justify-between"
        aria-live="polite"
      >
        <div>
          <p className="text-sm font-medium text-white/80">Your selected batch</p>
          <p className="mt-1 text-xl font-bold sm:text-2xl">{selected.label} · Online</p>
          <p className="mt-1 text-sm text-white/80">Contact us to confirm availability for your course.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            to={`/contact?batch=${encodeURIComponent(selected.label)}`}
            icon={ArrowRight}
            className="!bg-white !text-[#0B5ED7] hover:!bg-[#F4F8FF]"
          >
            Enquire for this batch
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function BatchTimings() {
  return (
    <>
      <Seo
        title="Online Batch Timings | WebdudeX IT Skills Academy"
        description="7 online batches at WebdudeX IT Skills Academy: morning 7 AM to 1 PM and afternoon/evening 2 PM to 8 PM."
      />
      <PageHeader title="Batch timings" intro="Seven online batches, morning to evening." image="/heroimg3.png" breadcrumb="Batch Timings" />

      <div className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] via-white to-[#F4F8FF]">
        <div aria-hidden className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-[55%] h-80 w-80 rounded-full bg-[#0B5ED7]/10 blur-3xl" />

        {/* Intro + features */}
        <section className="relative py-16 sm:py-20" aria-labelledby="schedule-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-14 lg:px-8">
            <Reveal>
              <div>
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0B5ED7]">
                  Batch timings <span aria-hidden className="h-px w-10 bg-[#0B5ED7]" />
                </p>
                <h2 id="schedule-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#062B63] sm:text-4xl lg:text-5xl">
                  Learn on your <span className="text-[#0B5ED7]">own schedule</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  We understand that our students come from all walks of life—some are managing college, while others are working full-time jobs.
                  That's why we offer 7 different online batches throughout the day.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Choose a batch that aligns perfectly with your daily routine. All classes are conducted live, ensuring you get the hands-on practical
                  experience you need to succeed.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <FeatureCard key={f.title} f={f} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Timings */}
        <section className="relative pb-16 sm:pb-24" aria-labelledby="pick-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0B5ED7]">
                  Online batches <span aria-hidden className="h-px w-10 bg-[#0B5ED7]" />
                </p>
                <h2 id="pick-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#062B63] sm:text-4xl">
                  Pick the batch that <span className="text-[#0B5ED7]">fits your day</span>
                </h2>
                <p className="mt-3 text-base text-slate-600 sm:text-lg">
                  Each session runs for two hours. Contact us to confirm availability for your course.
                </p>
              </div>
            </Reveal>
            <div className="mt-8">
              <TimingsBoard />
            </div>
          </div>
        </section>
      </div>

      <CtaBand title="Want to join a batch?" />
    </>
  )
}