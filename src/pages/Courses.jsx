import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Hammer, Rocket, Sparkles, Plus, Wifi, Target, Briefcase, MessageCircle } from 'lucide-react'
import { Button, Reveal } from '../components/ui'
import Seo from '../lib/seo'
import { CtaBand } from '../components/Sections'
import { CourseShowcaseCard } from '../components/sections/Courseshowcasecard'
import { courses } from '../data/site'

function CoursesHero() {
  const reduce = useReducedMotion()
  const rise = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] to-white pb-6 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="min-w-0">
          <motion.p {...rise(0)} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#062B63]">
            Our Courses <span className="h-px w-10 bg-[#0B5ED7]" aria-hidden />
          </motion.p>
          <motion.h1 {...rise(0.1)} className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#062B63] sm:text-5xl lg:text-6xl">
            Build In-Demand Skills for a <span className="text-[#0B5ED7]">Brighter Future</span>
          </motion.h1>
          <motion.p {...rise(0.2)} className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Choose from our industry-relevant courses and gain hands-on experience with expert guidance. Learn, practice and grow with us!
          </motion.p>
          <motion.p {...rise(0.3)} className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#0B5ED7]">
            <span>Learn</span><span aria-hidden>•</span><span>Practice</span><span aria-hidden>•</span><span>Grow</span>
          </motion.p>
        </div>

        <motion.div {...rise(0.25)} className="relative mx-auto hidden w-full max-w-md md:block">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#2563EB]/10 blur-2xl" aria-hidden />
          <img
            src="/heroimage1.png"
            alt="Student learning with a laptop"
            width="640"
            height="480"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover object-[75%_30%] shadow-[0_24px_50px_-20px_rgba(6,43,99,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* How learning works: light timeline                                  */
/* ------------------------------------------------------------------ */

const JOURNEY = [
  { icon: BookOpen, title: 'Learn', text: 'Start with clear fundamentals explained in simple, practical language.' },
  { icon: Hammer, title: 'Practice', text: 'Apply every concept through hands-on tasks and real-world style exercises.' },
  { icon: Sparkles, title: 'Gain Confidence', text: 'Build the habit of working independently and communicating your ideas.' },
  { icon: Rocket, title: 'Grow Your Career', text: 'Use your skills for jobs, freelancing, internships or your own business.' },
]

function Journey() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-12 sm:py-16" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF2FF] via-[#DCEBFF] to-[#C7DDFB] px-5 py-12 ring-1 ring-[#0B5ED7]/10 sm:px-10 lg:px-14 lg:py-16">
          {/* soft decoration */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(11,94,215,0.12)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/70 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#2563EB]/20 blur-3xl" aria-hidden />

          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5ED7] shadow-sm">How learning works</p>
              <h2 id="journey-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-[#062B63] sm:text-4xl">
                A simple path from learning to a stronger career
              </h2>
              <p className="mt-3 text-base text-[#0A3A80]/80 sm:text-lg">Four steps, one learning buddy beside you all the way.</p>
            </div>

            <div className="relative mt-12">
              {/* connecting line (desktop) */}
              <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-[#0B5ED7]/40 lg:block" aria-hidden />

              <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {JOURNEY.map((s, i) => {
                  const Icon = s.icon
                  const on = active === i
                  return (
                    <li key={s.title} className="list-none">
                      <Reveal delay={i * 0.08} className="h-full">
                        <button
                          type="button"
                          onMouseEnter={() => setActive(i)}
                          onFocus={() => setActive(i)}
                          onClick={() => setActive(i)}
                          className="group relative flex h-full w-full flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B5ED7] rounded-3xl"
                        >
                          {/* step circle sits on the line */}
                          <span className={`relative z-10 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg ring-4 ring-[#DCEBFF] transition duration-300 ${on ? 'scale-110 bg-[#0B5ED7] shadow-[#0B5ED7]/40' : 'bg-[#2563EB]'}`}>
                            <Icon size={24} aria-hidden />
                            <span className={`absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-extrabold shadow transition-colors duration-300 ${on ? 'text-[#0B5ED7]' : 'text-[#062B63]'}`}>{i + 1}</span>
                          </span>

                          <span className={`-mt-7 flex w-full flex-1 flex-col rounded-3xl bg-white px-5 pb-6 pt-10 shadow-[0_16px_36px_-20px_rgba(6,43,99,0.4)] ring-1 transition duration-300 ${on ? '-translate-y-1 ring-[#0B5ED7]/50 shadow-[0_24px_44px_-20px_rgba(11,94,215,0.55)]' : 'ring-[#0B5ED7]/10'}`}>
                            <span className="mt-2 block text-lg font-bold text-[#062B63]">{s.title}</span>
                            <span className="mt-2 block text-sm leading-relaxed text-slate-600">{s.text}</span>
                            <span className={`mx-auto mt-4 block h-1 rounded-full bg-[#0B5ED7] transition-all duration-300 ${on ? 'w-12' : 'w-4 opacity-30'}`} aria-hidden />
                          </span>
                        </button>
                      </Reveal>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const GOALS = [
  { label: 'Build websites & apps', course: 1 },
  { label: 'Grow brands online', course: 0 },
  { label: 'Create designs', course: 2 },
  { label: 'Grow a business', course: 3 },
  { label: 'Speak with confidence', course: 4 },
]

function CourseFinder() {
  const [goal, setGoal] = useState(0)
  const c = courses[GOALS[goal].course]
  return (
    <section className="pb-12 sm:pb-16" aria-labelledby="finder-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_-14px_rgba(6,43,99,0.25)] ring-1 ring-[#0B5ED7]/10 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B5ED7]">Not sure where to start?</p>
          <h2 id="finder-heading" className="mt-3 text-2xl font-extrabold tracking-tight text-[#062B63] sm:text-3xl">
            What do you want to do?
          </h2>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose your goal">
            {GOALS.map((g, i) => (
              <button
                key={g.label}
                type="button"
                onClick={() => setGoal(i)}
                aria-pressed={goal === i}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${goal === i
                  ? 'bg-[#0B5ED7] text-white shadow-md'
                  : 'bg-[#F4F8FF] text-[#062B63] hover:bg-[#0B5ED7]/10'
                  }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#F4F8FF] p-5 sm:flex-row sm:items-center sm:justify-between" aria-live="polite">
            <div>
              <p className="text-sm font-medium text-slate-500">We suggest</p>
              <p className="mt-1 text-xl font-bold text-[#062B63]">{c.name}</p>
              <p className="mt-1 max-w-md text-sm text-slate-600">{c.short}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button to={`/courses/${c.slug}`} variant="outline" icon={ArrowRight} className="!px-4 !py-2.5">Learn More</Button>
              <Button to={`/contact?course=${c.slug}`} icon={ArrowRight} className="!px-4 !py-2.5">Enquire Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const WHY = [
  { icon: Wifi, title: 'Flexible Online Batches', text: 'Learn from wherever you are, with batches planned around students.' },
  { icon: Target, title: 'Practical Skill Development', text: 'Every course focuses on skills you can actually use, not just theory.' },
  { icon: Briefcase, title: 'Career-Focused Learning', text: 'Training is designed around what employers and clients look for.' },
]

function WhyUs() {
  return (
    <section className="pb-12 sm:pb-16" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="why-heading" className="text-center text-2xl font-extrabold tracking-tight text-[#062B63] sm:text-3xl">
          Why learn with WebdudeX
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = w.icon
            return (
              <li key={w.title} className="list-none">
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-[#0B5ED7]/10 transition duration-300 hover:-translate-y-1 hover:ring-[#2563EB]/50">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F4F8FF] text-[#0B5ED7]">
                      <Icon size={24} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-[#062B63]">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ: intro panel + styled accordion                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  { q: 'Are the classes online?', a: 'Yes. WebdudeX offers flexible online batches, so you can learn from anywhere.' },
  { q: 'Can I join if I am a beginner?', a: 'Yes. Courses start from the fundamentals, so no prior experience is needed to begin.' },
  { q: 'Which course is right for me?', a: 'Use the goal selector above, or send us an enquiry and we will help you choose based on your interests.' },
  { q: 'How do I get fees, duration and batch details?', a: 'These can change, so please enquire on WhatsApp or call us for the latest details.' },
]

function Faq() {
  return (
    <section className="pb-12 sm:pb-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F4F8FF] to-[#DCEBFF] p-5 ring-1 ring-[#0B5ED7]/10 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5ED7] shadow-sm">FAQ</p>
              <h2 id="faq-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-[#062B63] sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600">
                Quick answers to what students ask us most. Can't find yours? We are happy to help.
              </p>

              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_16px_36px_-20px_rgba(6,43,99,0.4)] ring-1 ring-[#0B5ED7]/10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0B5ED7] text-white">
                  <MessageCircle size={22} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-[#062B63]">Still have questions?</p>
                  <Link to="/contact" className="mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-[#0B5ED7] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
                    Talk to us <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            {/* accordion */}
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl bg-white/80 p-1 ring-1 ring-[#0B5ED7]/10 transition duration-300 hover:bg-white open:bg-white open:shadow-[0_18px_40px_-22px_rgba(11,94,215,0.55)] open:ring-[#0B5ED7]/40"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 rounded-xl p-4 text-left font-semibold text-[#062B63] transition-colors group-open:text-[#0B5ED7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-sm font-extrabold text-[#0B5ED7] transition-colors group-open:bg-[#0B5ED7] group-open:text-white">{i + 1}</span>
                    <span className="min-w-0 flex-1 text-base sm:text-lg">{f.q}</span>
                    <Plus size={20} className="shrink-0 text-[#0B5ED7] transition-transform duration-300 group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="px-4 pb-5 pl-[4.25rem] pr-5 text-sm leading-relaxed text-slate-600 sm:text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Courses() {
  return (
    <>
      <Seo
        title="Courses | Digital Marketing, Full Stack, Design | WebdudeX"
        description="Explore online training in digital marketing, full stack development, graphic design, business development and communication skills at WebdudeX, Bangalore."
      />
      <CoursesHero />

      <section className="bg-gradient-to-b from-white to-[#F4F8FF] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* xl: 3 cards on row 1, 2 wider cards on row 2 (6-column grid) */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {courses.map((c, i) => (
              <CourseShowcaseCard
                key={c.slug}
                c={c}
                i={i}
                className={i < 3 ? 'xl:col-span-2' : i === courses.length - 1 ? 'md:col-span-2 xl:col-span-3' : 'xl:col-span-3'}
              />
            ))}
          </div>
        </div>
      </section>

      <Journey />
      <CourseFinder />
      <WhyUs />
      <Faq />
      <CtaBand />
    </>
  )
}