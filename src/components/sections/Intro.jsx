import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { Reveal } from '../ui'
import { site } from '../../data/site'

export function Intro() {
  return (
    <section className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#F4F8FF] via-white to-[#E3EEFF] p-8 sm:p-12 lg:p-16 ring-1 ring-slate-900/5 shadow-xl shadow-brand-900/5">
        
        {/* Decorative subtle background blobs */}
        <div aria-hidden className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600 shadow-sm">
                <Zap className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">Why WebdudeX</span>
            </div>
            <h2 className="text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.4rem]">
              <span className="bg-gradient-to-r from-brand-600 to-blue-500 bg-clip-text text-transparent">{site.tagline}</span>:<br className="hidden lg:block" /> skills for today’s digital and professional world
            </h2>
          </Reveal>
          
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-8">
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                WebdudeX supports learners at every step, from picking a skill to using it with confidence. Our focus is <strong className="font-semibold text-slate-900">practical learning</strong> that prepares you for real work, with flexible online batches and personal guidance along the way.
              </p>
              
              <div className="flex items-center">
                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-sm ring-1 ring-inset ring-brand-200 transition-all hover:bg-brand-50 hover:shadow-md hover:ring-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  About the academy 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
