import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const styles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25',
  outline: 'bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50',
  whatsapp: 'bg-emerald-600 text-white hover:bg-emerald-700',
  light: 'bg-white text-brand-700 hover:bg-brand-50',
  ghostLight: 'text-white ring-1 ring-inset ring-white/40 hover:bg-white/10',
}
export function Button({ to, href, variant = 'primary', icon: I, children, className = '', ...p }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-[.98] ${styles[variant]} ${className}`
  const inner = <>{I && <I size={18} aria-hidden />}{children}</>
  if (to) return <Link to={to} className={cls} {...p}>{inner}</Link>
  const ext = href?.startsWith('http')
  return <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...p}>{inner}</a>
}

export function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5, delay }}>{children}</motion.div>
}

export function Section({ id, tone = 'white', title, intro, children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${tone === 'tint' ? 'bg-brand-50/70' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-slate-600">{intro}</p>}
        </Reveal>}
        {children}
      </div>
    </section>
  )
}

export function PageHeader({ title, intro, image, breadcrumb }) {
  if (image) {
    return (
      <section className="relative bg-white pt-[64px]">
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[480px]">
          <img src={image} alt={title} width="1920" height="480" fetchpriority="high" className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,43,99,.88)_0%,rgba(6,43,99,.6)_45%,rgba(6,43,99,.1)_100%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute inset-0 flex flex-col justify-center">
            {breadcrumb && (
              <nav aria-label="Breadcrumb" className="text-sm text-white/80">
                <Link to="/" className="hover:text-white transition-colors">Home</Link> <span aria-hidden className="mx-1.5">/</span> <span className="text-white">{breadcrumb}</span>
              </nav>
            )}
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            {intro && <p className="mt-4 max-w-xl text-base text-white/90 sm:text-xl">{intro}</p>}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-brand-50 pt-28 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl text-slate-900">{title}</h1>
          {intro && <p className="mt-4 max-w-2xl text-lg text-slate-600">{intro}</p>}
        </div>
      </div>
    </div>
  )
}
