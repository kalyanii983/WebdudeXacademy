import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquareText, CalendarDays, Target, TrendingUp, Megaphone, Code2, Palette, BarChart3, Users, MessageCircle, Phone } from 'lucide-react'

// ---- EDIT THESE ----------------------------------------------------------
const whatsappUrl = 'https://wa.me/91XXXXXXXXXX' // e.g. https://wa.me/919876543210
const telUrl = 'tel:+91XXXXXXXXXX'
const HERO_IMAGE = '/heroimg3.png' // woman + background only, in /public
const MOBILE_BG = 'https://i.pinimg.com/1200x/ca/e3/c3/cae3c37d8d369107e157c30d4f61050f.jpg' // mobile/tablet text background (use '/file.jpg' for a file in /public)
const MOBILE_WASH = 0 // white wash over the image: 0 = image fully visible, 0.3-0.6 = softer so dark text is easier to read
// --------------------------------------------------------------------------

// x / y = position (% of hero), r = tilt in degrees, d = float delay (s)
const COURSES = [
  { title: 'Digital Marketing', icon: Megaphone, kind: 'dm', x: 46, y: 3, r: -7, d: 0 },
  { title: 'Full Stack Development', icon: Code2, kind: 'fs', x: 73, y: 8, r: 2, d: 1.2 },
  { title: 'Graphic Design', icon: Palette, kind: 'gd', x: 40.5, y: 27, r: -2.5, d: 2.1 },
  { title: 'Business Development', icon: BarChart3, kind: 'bd', x: 78.5, y: 28, r: 2.5, d: 0.6 },
  { title: 'Communication & Personality Development', icon: Users, kind: 'cp', x: 81.5, y: 47, r: 3, d: 1.7 },
]
const TRUST = [
  { icon: CalendarDays, a: 'Flexible', b: 'Online Batches' },
  { icon: Target, a: 'Practical Skill', b: 'Development' },
  { icon: TrendingUp, a: 'Career-Focused', b: 'Learning' },
]

const CSS = `
.wx-hero{--wx-navy:#062B63;--wx-royal:#0B5ED7;--wx-blue:#2563EB;--wx-soft:#F4F8FF;--wx-ink:#0F172A}
@keyframes wx-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes wx-pop{from{opacity:0;transform:translateY(26px) scale(.96)}to{opacity:1;transform:none}}
@keyframes wx-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes wx-drift{0%,100%{transform:translate(0,0)}50%{transform:translate(8px,-8px)}}
@keyframes wx-float-s{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes wx-zoom{from{opacity:0;transform:scale(1.04)}to{opacity:1;transform:none}}
.wx-rise{opacity:0;animation:wx-rise .7s cubic-bezier(.22,1,.36,1) forwards;animation-delay:var(--d,0s)}
.wx-bg{animation:wx-zoom 1.2s ease-out both}
.wx-pos{position:absolute;pointer-events:auto;opacity:0;animation:wx-pop .8s cubic-bezier(.22,1,.36,1) forwards}
.wx-in{opacity:0;animation:wx-pop .8s cubic-bezier(.22,1,.36,1) forwards}
.wx-float-s{animation:wx-float-s 6s ease-in-out infinite}
.wx-float{animation:wx-float 7s ease-in-out infinite}
.wx-card{transform:rotate(var(--r,0deg));transition:transform .3s ease,box-shadow .3s ease}
.wx-card:hover{transform:translateY(-6px) rotate(var(--r,0deg));box-shadow:0 26px 50px -16px rgba(6,43,99,.45)}
.wx-deco{animation:wx-drift 9s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.wx-rise,.wx-pos,.wx-in,.wx-bg{animation:none;opacity:1}.wx-float,.wx-float-s,.wx-deco{animation:none}.wx-card{transition:none}}
`

function Visual({ kind }) {
  const b = '#2563EB'
  const v = {
    dm: <><rect x="14" y="30" width="9" height="16" fill={b} opacity=".5" /><rect x="29" y="22" width="9" height="24" fill={b} opacity=".7" /><rect x="44" y="14" width="9" height="32" fill={b} /><path d="M10 34 L40 20 L62 10" stroke="#062B63" strokeWidth="2" fill="none" /><rect x="74" y="12" width="34" height="5" rx="2.5" fill="#BFD6FF" /><rect x="74" y="24" width="26" height="5" rx="2.5" fill="#BFD6FF" /><rect x="74" y="36" width="30" height="5" rx="2.5" fill="#BFD6FF" /></>,
    fs: <><rect x="2" y="2" width="116" height="48" rx="4" fill="#062B63" /><rect x="10" y="10" width="40" height="4" rx="2" fill="#7FB0FF" /><rect x="18" y="19" width="62" height="4" rx="2" fill="#2563EB" /><rect x="18" y="28" width="48" height="4" rx="2" fill="#BFD6FF" /><rect x="10" y="37" width="30" height="4" rx="2" fill="#7FB0FF" /></>,
    gd: <><circle cx="30" cy="26" r="16" fill="#2563EB" opacity=".85" /><rect x="52" y="10" width="30" height="30" rx="6" fill="#0B5ED7" opacity=".6" /><path d="M92 40 L104 12 L116 40 Z" fill="#062B63" opacity=".8" /><circle cx="44" cy="34" r="8" fill="#BFD6FF" /></>,
    bd: <><path d="M8 44 L36 30 L58 36 L112 8" stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M100 8 H112 V20" stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" /><rect x="10" y="38" width="8" height="10" fill="#BFD6FF" /><rect x="34" y="34" width="8" height="14" fill="#BFD6FF" /><rect x="58" y="30" width="8" height="18" fill="#BFD6FF" /></>,
    cp: <><rect x="44" y="6" width="60" height="26" rx="4" fill="#062B63" /><circle cx="74" cy="19" r="6" fill="#7FB0FF" /><circle cx="16" cy="36" r="6" fill="#2563EB" /><circle cx="34" cy="38" r="6" fill="#0B5ED7" opacity=".7" /><path d="M6 50c0-9 20-9 20 0zM24 50c0-9 20-9 20 0z" fill="#BFD6FF" /></>,
  }[kind]
  return <svg viewBox="0 0 120 52" className="block h-auto w-full" aria-hidden>{v}</svg>
}

// `compact` = small card for mobile/tablet (scales with screen width, no illustration).
// Without `compact` it renders exactly as before for the desktop floating cards.
function CourseCard({ c, compact }) {
  const Icon = c.icon
  return (
    <Link
      to="/courses"
      aria-label={`${c.title} course`}
      style={{ '--r': compact ? '0deg' : `${c.r}deg` }}
      className={`wx-card group block rounded-2xl bg-white shadow-[0_18px_40px_-14px_rgba(6,43,99,.35)] ring-1 ring-[#0B5ED7]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] ${compact ? 'p-[clamp(.3rem,1.6vw,.6rem)]' : 'p-[clamp(.4rem,.7vw,.75rem)]'}`}
    >
      <div className={`flex items-start ${compact ? 'gap-[clamp(.25rem,1.4vw,.5rem)]' : 'gap-1.5'}`}>
        <span className={`grid shrink-0 place-items-center rounded-lg bg-[#2563EB] text-white ${compact ? 'h-[clamp(1.4rem,6vw,2.1rem)] w-[clamp(1.4rem,6vw,2.1rem)]' : 'h-[clamp(1.4rem,2vw,2.1rem)] w-[clamp(1.4rem,2vw,2.1rem)]'}`}>
          <Icon className="h-1/2 w-1/2" aria-hidden />
        </span>
        <span className={`flex-1 font-semibold leading-tight text-[#062B63] ${compact ? 'text-[clamp(.58rem,2.6vw,.9rem)]' : 'text-[clamp(.6rem,.8vw,.85rem)]'}`}>{c.title}</span>
        <span className={`grid shrink-0 place-items-center rounded-full border border-[#2563EB] text-[#2563EB] transition-transform group-hover:translate-x-0.5 ${compact ? 'h-[clamp(.9rem,3.6vw,1.25rem)] w-[clamp(.9rem,3.6vw,1.25rem)]' : 'h-4 w-4'}`}>
          <ArrowRight className="h-2.5 w-2.5" aria-hidden />
        </span>
      </div>
      {!compact && <div className="mt-1.5 overflow-hidden rounded-lg bg-[#F4F8FF] p-1.5"><Visual kind={c.kind} /></div>}
    </Link>
  )
}

export function Hero() {
  const rise = (d) => ({ '--d': `${d}s` })
  return (
    <section className="wx-hero relative overflow-hidden bg-white">
      <style>{CSS}</style>

      <div className="relative flex flex-col lg:block lg:min-h-[680px]">
        {/* Background & Cards container */}
        <div className="relative order-1 mt-20 w-full overflow-hidden lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:h-auto lg:w-auto lg:overflow-visible">
          {/* Image: full, uncropped <img> on mobile/tablet; background-image on desktop (unchanged) */}
          <img src={HERO_IMAGE} alt="Smiling student learning on a laptop at WebdudeX IT Skills Academy" className="block h-auto w-full lg:hidden" />
          <div role="img" aria-label="Smiling student learning on a laptop at WebdudeX IT Skills Academy" style={{ backgroundImage: `url('${HERO_IMAGE}')` }} className="hidden lg:block wx-bg absolute inset-0 bg-cover bg-no-repeat [background-position:85%_bottom] lg:[background-position:right_bottom]" />

          {/* Desktop readability gradient */}
          <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.8)_40%,rgba(255,255,255,0)_60%)] lg:block" />

          <div aria-hidden className="wx-deco absolute left-[44%] top-[12%] hidden h-4 w-4 rounded-full bg-[#2563EB]/50 lg:block" />

          {/* Floating cards (desktop only) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {COURSES.map((c, i) => (
              <div key={c.title} className="wx-pos" style={{ left: `${c.x}%`, top: `${c.y}%`, width: 'clamp(130px, 15vw, 240px)', animationDelay: `${0.5 + i * 0.12}s` }}>
                <div className="wx-float" style={{ animationDelay: `${c.d}s`, animationDuration: `${6 + (i % 3)}s` }}>
                  <CourseCard c={c} />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / tablet: small cards on the left of the image, scaled to screen width */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex w-full flex-col items-start justify-center gap-[clamp(.2rem,1vw,.8rem)] py-[2%] pl-[clamp(.4rem,2vw,1.5rem)] lg:hidden">
            {COURSES.map((c, i) => (
              <div key={c.title} className="wx-in pointer-events-auto" style={{ width: 'clamp(100px,32vw,250px)', animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="wx-float-s" style={{ animationDelay: `${c.d}s` }}>
                  <CourseCard c={c} compact />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 order-2 w-full px-4 pb-8 pt-8 sm:px-6 lg:order-none lg:w-[45%] lg:pb-16 lg:pl-[5.5%] lg:pr-0 lg:pt-[7.5vw]">
          {/* Mobile / tablet only: blue background image behind the text (hidden from 1024px up) */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 lg:hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,${MOBILE_WASH}),rgba(255,255,255,${MOBILE_WASH})), url('${MOBILE_BG}'), linear-gradient(135deg,#DCEAFF,#BFD6FF)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <p className="wx-rise flex items-center gap-3 text-[11px] font-bold tracking-[.3em] text-[#062B63] sm:text-xs" style={rise(0)}>
            YOUR LEARNING BUDDY <span aria-hidden className="h-0.5 w-10 bg-[#2563EB]" />
          </p>

          <h1 className="mt-4 text-[clamp(2.5rem,9.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-[#062B63] lg:text-[clamp(2.4rem,4.4vw,5rem)]">
            <span className="wx-rise block" style={rise(0.1)}>Build Skills.</span>
            <span className="wx-rise block" style={rise(0.2)}>Build Confidence.</span>
            <span className="wx-rise inline-block" style={rise(0.3)}>
              <span className="bg-gradient-to-r from-[#0B5ED7] to-[#2563EB] bg-clip-text text-transparent">Build Your Career.</span>
              <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="mt-1 block h-2 w-full" aria-hidden>
                <path d="M2 8 C80 2 240 2 398 6" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="wx-rise mt-6 max-w-[34rem] text-[clamp(.95rem,1.15vw,1.25rem)] leading-relaxed text-[#0F172A]/85" style={rise(0.45)}>
            Learn practical, career-focused skills in Digital Marketing, Full Stack Development, Graphic Design, Business Development, and Communication &amp; Personality Development.
          </p>

          <div className="wx-rise mt-7 flex flex-wrap gap-3" style={rise(0.55)}>
            <Link to="/courses" className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#2563EB] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/30 transition hover:-translate-y-0.5 hover:bg-[#0B5ED7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#062B63]">
              Explore Courses <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#2563EB] bg-white px-6 py-3 text-base font-semibold text-[#0B5ED7] transition hover:-translate-y-0.5 hover:bg-[#F4F8FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#062B63]">
              <MessageSquareText className="h-4 w-4" aria-hidden /> Enquire Now
            </Link>
          </div>

          <ul className="wx-rise mt-7 grid grid-cols-3 gap-2 sm:gap-4" style={rise(0.65)}>
            {TRUST.map(({ icon: I, a, b }) => (
              <li key={a} className="flex items-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#E3EEFF] text-[#0B5ED7] sm:h-10 sm:w-10"><I className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden /></span>
                <span className="text-[11px] font-medium leading-tight text-[#062B63] sm:text-[13px]">{a}<br />{b}</span>
              </li>
            ))}
          </ul>

          <div className="wx-rise mt-3 flex flex-wrap gap-x-6 text-sm" style={rise(0.72)}>
            <a href={whatsappUrl} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-[#062B63] hover:text-[#0B5ED7]"><MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us</a>
            <a href={telUrl} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-[#062B63] hover:text-[#0B5ED7]"><Phone className="h-4 w-4" aria-hidden /> Call Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}