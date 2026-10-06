import { Star, Quote, TrendingUp, Users, Award, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ── EDIT THESE ─────────────────────────────────────────────────── */
const REVIEWS = [
  {
    name: 'Priya Sharma',
    role: 'Digital Marketing Executive',
    course: 'Digital Marketing',
    courseColor: '#2563EB',
    rating: 5,
    text: 'WebdudeX completely changed my career path. The practical approach helped me land a job within 2 months of completing the course. The mentorship was incredible!',
    initials: 'PS',
    avatarBg: '#DBEAFE',
    avatarText: '#1D4ED8',
    outcome: '💼 Got hired in 2 months',
  },
  {
    name: 'Rahul Mehta',
    role: 'Full Stack Developer',
    course: 'Full Stack Development',
    courseColor: '#0B5ED7',
    rating: 5,
    text: "The full stack course is incredibly well-structured. I went from zero coding knowledge to building real apps. The trainers are always available and genuinely care about your growth.",
    initials: 'RM',
    avatarBg: '#EDE9FE',
    avatarText: '#7C3AED',
    outcome: '🚀 Built 3 live projects',
  },
  {
    name: 'Kavya Nair',
    role: 'Graphic Designer',
    course: 'Graphic Design',
    courseColor: '#7C5CE0',
    rating: 5,
    text: 'I joined WebdudeX while still in college. The flexible batch timings meant I never had to compromise on my studies. Now I freelance and earn on my own!',
    initials: 'KN',
    avatarBg: '#FCE7F3',
    avatarText: '#9D174D',
    outcome: '🎨 Freelancing successfully',
  },
  {
    name: 'Arun Kumar',
    role: 'Business Development Executive',
    course: 'Business Development',
    courseColor: '#14B8A6',
    rating: 5,
    text: 'Best investment I made for my career. The business development course gave me real-world negotiation and strategy skills that I use every single day at work.',
    initials: 'AK',
    avatarBg: '#CCFBF1',
    avatarText: '#0F766E',
    outcome: '📈 30% salary hike',
  },
  {
    name: 'Sneha Reddy',
    role: 'HR & Communications',
    course: 'Communication & Personality',
    courseColor: '#EC4899',
    rating: 5,
    text: "My confidence levels have skyrocketed. WebdudeX's communication course helped me crack interviews I would have never attempted before. The personal guidance is what sets them apart.",
    initials: 'SR',
    avatarBg: '#FCE7F3',
    avatarText: '#BE185D',
    outcome: '🎤 Cracked 3 interviews',
  },
  {
    name: 'Vikram Joshi',
    role: 'SEO Specialist',
    course: 'Digital Marketing',
    courseColor: '#2563EB',
    rating: 5,
    text: 'The trainers at WebdudeX are practitioners, not just teachers. Every concept is backed by real examples. Highly recommend to anyone serious about digital careers!',
    initials: 'VJ',
    avatarBg: '#DBEAFE',
    avatarText: '#1E40AF',
    outcome: '🌐 Managing 10+ clients',
  },
  {
    name: 'Deepa Pillai',
    role: 'UI/UX Designer',
    course: 'Graphic Design',
    courseColor: '#7C5CE0',
    rating: 5,
    text: 'Joining WebdudeX was the best decision. The small batch size meant I got personal attention throughout. I now work at a Bangalore design studio full-time!',
    initials: 'DP',
    avatarBg: '#EDE9FE',
    avatarText: '#6D28D9',
    outcome: '🏢 Placed at design studio',
  },
  {
    name: 'Mohammed Zubair',
    role: 'Web Developer',
    course: 'Full Stack Development',
    courseColor: '#0B5ED7',
    rating: 5,
    text: 'Flexible timings, expert trainers, practical projects — WebdudeX has it all. The backup class policy saved me multiple times when work got hectic. Worth every rupee!',
    initials: 'MZ',
    avatarBg: '#DBEAFE',
    avatarText: '#1D4ED8',
    outcome: '💻 Working remotely now',
  },
]

const STATS = [
  { icon: Users, value: '500+', label: 'Students Trained' },
  { icon: ThumbsUp, value: '4.9★', label: 'Average Rating' },
  { icon: Award, value: '5', label: 'Courses Offered' },
  { icon: TrendingUp, value: '85%', label: 'Career Advancement' },
]

// Split reviews into two rows for the marquee
const ROW1 = REVIEWS.slice(0, 4)
const ROW2 = REVIEWS.slice(4)

function StarRow({ n = 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </span>
  )
}

function ReviewCard({ r }) {
  return (
    <article className="group relative w-[320px] shrink-0 overflow-hidden rounded-2xl border border-[#2563EB]/10 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(37,99,235,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(37,99,235,0.35)] hover:border-[#2563EB]/30 sm:w-[360px]">
      {/* Quote icon */}
      <Quote size={28} className="absolute right-5 top-5 text-[#2563EB]/10 transition group-hover:text-[#2563EB]/20" aria-hidden />

      {/* Course badge */}
      <span
        className="mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
        style={{ backgroundColor: r.courseColor }}
      >
        {r.course}
      </span>

      {/* Stars */}
      <StarRow n={r.rating} />

      {/* Review text */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600">"{r.text}"</p>

      {/* Outcome pill */}
      <div className="mt-4 rounded-xl bg-[#F4F8FF] px-3 py-2 text-xs font-semibold text-[#1D4ED8]">
        {r.outcome}
      </div>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold shadow-sm"
          style={{ backgroundColor: r.avatarBg, color: r.avatarText }}
          aria-hidden
        >
          {r.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-[#062B63]">{r.name}</p>
          <p className="text-xs text-slate-500">{r.role}</p>
        </div>
      </div>
    </article>
  )
}

const CSS = `
@keyframes marquee-left  { from { transform: translateX(0) }  to { transform: translateX(-50%) } }
@keyframes marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) } }
.marquee-left  { animation: marquee-left  36s linear infinite; }
.marquee-right { animation: marquee-right 36s linear infinite; }
.marquee-track:hover .marquee-left,
.marquee-track:hover .marquee-right { animation-play-state: paused; }
`

export function Reviews() {
  const row1Doubled = [...ROW1, ...ROW1]
  const row2Doubled = [...ROW2, ...ROW2]

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="overflow-hidden bg-gradient-to-b from-[#F4F8FF] to-white py-16 sm:py-24">
      <style>{CSS}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
            ⭐ Student Stories
          </span>
          <h2
            id="reviews-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-[#062B63] sm:text-4xl lg:text-5xl"
          >
            Real students.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
              Real results.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Hear directly from learners who took the step, built their skills, and transformed their careers.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_-12px_rgba(37,99,235,0.15)] ring-1 ring-[#2563EB]/10 sm:grid-cols-4">
          {STATS.map(({ icon: I, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EEF4FF] text-[#2563EB]">
                <I size={20} aria-hidden />
              </span>
              <p className="text-2xl font-extrabold text-[#062B63]">{value}</p>
              <p className="text-xs font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-track mb-5 select-none overflow-hidden">
        <div className="marquee-left flex w-max gap-5 px-2.5">
          {row1Doubled.map((r, i) => <ReviewCard key={`r1-${i}`} r={r} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-track select-none overflow-hidden">
        <div className="marquee-right flex w-max gap-5 px-2.5">
          {row2Doubled.map((r, i) => <ReviewCard key={`r2-${i}`} r={r} />)}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#0B5ED7] px-8 py-8 text-center text-white shadow-xl shadow-[#2563EB]/30 sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold sm:text-xl">Ready to write your own success story?</p>
            <p className="mt-1 text-sm text-white/80">Join hundreds of learners who transformed their careers with WebdudeX.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#2563EB] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Learning Today →
          </Link>
        </div>
      </div>
    </section>
  )
}
