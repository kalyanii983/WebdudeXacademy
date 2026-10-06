import { ArrowRight, Check, Star } from 'lucide-react'
import { Button, Reveal } from '../ui'

/**
 * Per-card content + look, matched to the design (same order as your `courses` array:
 * Digital Marketing, Full Stack, Graphic Design, Business Development, Communication).
 * Images: /public/course1 ... course5. Change the extension here if yours isn't .png.
 */
const IMG_EXT = 'png'

const META = [
    {
        short: 'Learn how brands find, attract and keep customers online.',
        points: ['Social media marketing', 'SEO basics', 'Content & campaigns', 'Email marketing', 'Analytics & reporting'],
        icon: '#2563EB',
        tint: '#FFFFFF',
    },
    {
        short: 'Build complete web applications, from interface to database.',
        points: ['Frontend development', 'Backend & APIs', 'Databases', 'Version control', 'Deployment strategies'],
        icon: '#0B5ED7',
        tint: '#FFFFFF',
        popular: true,
    },
    {
        short: 'Turn ideas into clear, attractive visual communication.',
        points: ['Design fundamentals', 'Digital design', 'Creative workflow', 'Typography & color', 'UI/UX basics'],
        icon: '#7C5CE0',
        tint: '#FFFFFF',
    },
    {
        short: 'Learn the skills used to find opportunities and grow businesses.',
        points: ['Market research', 'Sales & negotiation', 'Client management', 'Business strategy', 'Growth mindset'],
        icon: '#14B8A6',
        tint: '#F2FBFA',
    },
    {
        short: 'Speak clearly, present with confidence and grow your personality.',
        points: ['Public speaking', 'Personality development', 'Interview preparation', 'Team collaboration', 'Confidence building'],
        icon: '#EC4899',
        tint: '#FFF6FA',
    },
]

export function CourseShowcaseCard({ c, i = 0, className = '' }) {
    const m = META[i] || META[0]
    const Icon = c.icon
    const points = m.points || c.areas
    const imgSrc = `/course${i + 1}.${IMG_EXT}`

    return (
        <Reveal delay={i * 0.07} className={`h-full ${className}`}>
            <article
                style={{ backgroundColor: m.tint }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl shadow-[0_10px_30px_-14px_rgba(6,43,99,0.25)] ring-1 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-16px_rgba(11,94,215,0.4)] ${m.popular ? 'ring-2 ring-[#2563EB]' : 'ring-[#0B5ED7]/10 hover:ring-[#2563EB]/50'
                    }`}
            >
                {m.popular && (
                    <span className="absolute right-4 top-0 z-20 inline-flex items-center gap-1 rounded-b-lg bg-[#0B5ED7] px-3 py-1 text-xs font-semibold text-white">
                        <Star size={12} aria-hidden /> Most Popular
                    </span>
                )}

                {/* Illustration: banner on mobile, right-side background on sm+ */}
                <div className="relative h-44 w-full overflow-hidden sm:absolute sm:inset-0 sm:h-full">
                    <img
                        src={imgSrc}
                        alt={`${c.name} course illustration`}
                        width="800"
                        height="500"
                        loading={i < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="h-full w-full object-cover object-right transition duration-500 group-hover:scale-105"
                    />
                    {/* fade so text on the left stays readable */}
                    <div
                        aria-hidden
                        className="absolute inset-0 hidden sm:block"
                        style={{ background: `linear-gradient(90deg, ${m.tint} 0%, ${m.tint} 42%, transparent 72%)` }}
                    />
                </div>

                {/* Content (left) */}
                <div className="relative z-10 flex flex-1 flex-col p-5 sm:w-[62%] sm:p-6 xl:p-7">
                    <div className="flex items-center gap-3">
                        <span
                            style={{ backgroundColor: m.icon }}
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md transition group-hover:scale-110"
                        >
                            <Icon size={24} aria-hidden />
                        </span>
                        <h3 className="text-lg font-bold leading-tight text-[#062B63] sm:text-xl">{c.name}</h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.short || c.short}</p>

                    <ul className="mt-4 space-y-1.5 text-[13px] text-slate-600">
                        {points.map((p) => (
                            <li key={p} className="flex gap-2">
                                <Check size={15} className="mt-0.5 shrink-0" style={{ color: m.icon }} aria-hidden />
                                {p}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        <Button to={`/courses/${c.slug}`} variant="outline" icon={ArrowRight} className="!px-4 !py-2.5">
                            Learn More
                        </Button>
                        <Button to={`/contact?course=${c.slug}`} icon={ArrowRight} className="!px-4 !py-2.5">
                            Enquire Now
                        </Button>
                    </div>
                </div>
            </article>
        </Reveal>
    )
}