import { Reveal } from '../ui'

const AUDIENCE = [
  {
    emoji: '🎓',
    label: 'Students',
    headline: 'Build skills alongside your education',
    text: 'Get a head start while you study. Gain industry-relevant skills that set you apart when you graduate and step into the job market.',
    img: '/course4.png',
    alt: 'Student with laptop studying',
    accent: '#2563EB',
    light: '#EEF4FF',
  },
  {
    emoji: '💼',
    label: 'Job Seekers',
    headline: 'Strengthen your career journey',
    text: 'Develop practical, employer-ready skills and build a portfolio that demonstrates what you can do — not just what you know.',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=480&q=80',
    alt: 'Professional working on a laptop',
    accent: '#0B5ED7',
    light: '#E8F0FF',
  },
  {
    emoji: '🔄',
    label: 'Career Changers',
    headline: 'Explore a new professional direction',
    text: 'Learn new skills from scratch with flexible online batches and personal guidance, so you can confidently pivot to a new career path.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=480&q=80',
    alt: 'Person planning a career change',
    accent: '#1D4ED8',
    light: '#EDF2FF',
  },
  {
    emoji: '🚀',
    label: 'Aspiring Professionals',
    headline: 'Go from curious to capable',
    text: 'Whether you want to freelance, launch a business or move up in your field, our courses give you the practical foundation to make it happen.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&q=80',
    alt: 'Professional presenting to a team',
    accent: '#1E40AF',
    light: '#E6EFFF',
  },
]

export function WhoIsItFor() {
  return (
    <section
      id="who-is-it-for"
      aria-labelledby="who-heading"
      className="relative overflow-hidden bg-[#062B63] py-16 sm:py-24"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]"
      />
      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#2563EB]/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#1D4ED8]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              ⭐ Who Is This For?
            </span>
            <h2
              id="who-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Learning built for{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                everyone
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you're just starting out or looking to grow further, WebdudeX has a path for you.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_-20px_rgba(11,94,215,0.5)]">
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.alt}
                    width="480"
                    height="300"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Tint overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 40%, ${a.accent}CC 100%)` }}
                  />
                  {/* Emoji badge */}
                  <div
                    aria-hidden
                    className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl text-2xl shadow-lg"
                    style={{ backgroundColor: a.light }}
                  >
                    {a.emoji}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <span
                    className="mb-1 text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: a.accent }}
                  >
                    {a.label}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-[#062B63]">{a.headline}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{a.text}</p>

                  {/* Bottom accent line */}
                  <div
                    aria-hidden
                    className="mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: a.accent }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
