import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, Check, Hammer, Rocket, Sparkles, Target } from 'lucide-react'
import { Button } from '../ui'
import { journey } from '../../data/site'

/**
 * Interactive roadmap.
 * - md+  : horizontal track with a progress line + one large detail panel
 * - mobile: vertical timeline, the active step expands in place
 * Text still comes from `journey` in data/site ([title, description] pairs).
 */

const ICONS = [Target, BookOpen, Hammer, Sparkles, Rocket]

function Node({ state, index, Icon }) {
  const base =
    'relative grid h-14 w-14 shrink-0 place-items-center rounded-full font-bold transition duration-300 motion-reduce:transition-none'
  if (state === 'done')
    return (
      <span className={`${base} bg-[#0B5ED7] text-white shadow-[0_10px_20px_-8px_rgba(11,94,215,0.7)]`}>
        <Check size={22} aria-hidden />
      </span>
    )
  if (state === 'active')
    return (
      <span className={`${base} scale-110 border-2 border-[#0B5ED7] bg-white text-[#0B5ED7] ring-8 ring-[#2563EB]/15`}>
        <Icon size={22} aria-hidden />
      </span>
    )
  return (
    <span className={`${base} border border-[#0B5ED7]/20 bg-white text-slate-400 group-hover:border-[#0B5ED7]/50 group-hover:text-[#0B5ED7]`}>
      {index + 1}
    </span>
  )
}

export function Journey() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const last = journey.length - 1
  const go = (i) => setActive(Math.max(0, Math.min(last, i)))
  const state = (i) => (i < active ? 'done' : i === active ? 'active' : 'todo')
  const pct = last ? (active / last) * 100 : 0

  const [title, desc] = journey[active]
  const ActiveIcon = ICONS[active % ICONS.length]

  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      go(active + 1)
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      go(active - 1)
    }
  }

  const fade = reduce
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 }, transition: { duration: 0 } }
    : {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }

  const renderNav = (dark = false) => (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        aria-label="Previous step"
        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:cursor-not-allowed disabled:opacity-40 ${dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#F4F8FF] text-[#062B63] hover:bg-[#0B5ED7]/10'
          }`}
      >
        <ArrowLeft size={16} aria-hidden /> Back
      </button>
      {active < last ? (
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next step"
          className="group inline-flex items-center gap-2 rounded-xl bg-[#0B5ED7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_-10px_rgba(11,94,215,0.8)] transition hover:-translate-y-0.5 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Next step
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </button>
      ) : (
        <Button to="/courses" icon={ArrowRight} className="!px-5 !py-2.5">
          Explore Courses
        </Button>
      )}
    </div>
  )

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FF] to-white py-16 sm:py-24"
      aria-labelledby="journey-heading"
    >
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#0B5ED7]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0B5ED7]">
            How it works <span aria-hidden className="h-px w-10 bg-[#0B5ED7]" />
          </p>
          <h2 id="journey-heading" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#062B63] sm:text-4xl lg:text-5xl">
            Your learning <span className="text-[#0B5ED7]">journey</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">Tap a step to see what happens at each stage.</p>
        </div>

        {/* ---------- Desktop / tablet: horizontal roadmap ---------- */}
        <div className="mt-12 hidden md:block" onKeyDown={onKey}>
          <div className="relative">
            {/* track */}
            <div aria-hidden className="absolute left-[10%] right-[10%] top-7 h-1 -translate-y-1/2 rounded-full bg-[#0B5ED7]/15" />
            <div
              aria-hidden
              className="absolute left-[10%] top-7 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#2563EB] transition-[width] duration-500 motion-reduce:transition-none"
              style={{ width: `${pct * 0.8}%` }}
            />
            <ol className="relative grid grid-cols-5">
              {journey.map(([t], i) => (
                <li key={t} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === active ? 'step' : undefined}
                    className="group flex flex-col items-center gap-3 rounded-2xl px-2 pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
                  >
                    <Node state={state(i)} index={i} Icon={ICONS[i % ICONS.length]} />
                    <span
                      className={`max-w-[9rem] text-center text-sm font-bold transition-colors ${i === active ? 'text-[#0B5ED7]' : 'text-[#062B63] group-hover:text-[#0B5ED7]'
                        }`}
                    >
                      {t}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* detail panel */}
          <div
            className="relative mt-10 overflow-hidden rounded-3xl bg-[#062B63] p-8 text-white shadow-[0_30px_60px_-24px_rgba(6,43,99,0.7)] lg:p-12"
            aria-live="polite"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_right,black,transparent_85%)]" />
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full bg-[#2563EB]/50 blur-3xl" />
            <span aria-hidden className="pointer-events-none absolute -bottom-10 right-8 select-none text-[11rem] font-extrabold leading-none text-white/[0.06] lg:text-[14rem]">
              0{active + 1}
            </span>

            <AnimatePresence mode="wait">
              <motion.div key={active} {...fade} className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
                <span className="grid h-20 w-20 place-items-center rounded-3xl bg-[#2563EB] text-white shadow-[0_16px_30px_-12px_rgba(37,99,235,0.9)] lg:h-24 lg:w-24">
                  <ActiveIcon size={36} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white/65">
                    Step {active + 1} of {journey.length}
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold sm:text-3xl lg:text-4xl">{title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">{desc}</p>
                  <div className="mt-6">
                    {renderNav(true)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---------- Mobile: vertical timeline ---------- */}
        <ol className="mt-10 md:hidden" onKeyDown={onKey}>
          {journey.map(([t, d], i) => {
            const open = i === active
            return (
              <li key={t} className="relative pb-6 last:pb-0">
                {i < last && (
                  <span
                    aria-hidden
                    className={`absolute left-[27px] top-14 bottom-0 w-1 rounded-full transition-colors duration-500 ${i < active ? 'bg-[#0B5ED7]' : 'bg-[#0B5ED7]/15'
                      }`}
                  />
                )}
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={open ? 'step' : undefined}
                  aria-expanded={open}
                  className="group relative flex w-full items-center gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
                >
                  <Node state={state(i)} index={i} Icon={ICONS[i % ICONS.length]} />
                  <span className={`text-lg font-bold ${open ? 'text-[#0B5ED7]' : 'text-[#062B63]'}`}>{t}</span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-[72px] mt-3 rounded-2xl bg-[#062B63] p-5 text-white shadow-[0_16px_32px_-16px_rgba(6,43,99,0.7)]">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                          Step {i + 1} of {journey.length}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/85">{d}</p>
                        <div className="mt-4">
                          {renderNav(true)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}