import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from './Navbar'
import { site, courses, telUrl, whatsappUrl } from '../data/site'

/* Brand icons (inline SVG, because lucide no longer ships brand logos).
   Each has its official brand colour as the tile background and a white glyph. */
const BRANDS = {
  facebook: {
    bg: '#1877F2',
    glyph: <path fill="#fff" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.6V14h2.7v8h3.2z" />,
  },
  instagram: {
    bg: 'linear-gradient(45deg,#FEDA75 0%,#FA7E1E 25%,#D62976 50%,#962FBF 75%,#4F5BD5 100%)',
    glyph: (
      <g fill="none" stroke="#fff" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="#fff" />
      </g>
    ),
  },
  linkedin: {
    bg: '#0A66C2',
    glyph: <path fill="#fff" d="M4 9h3.5v11H4zM5.75 3.5a2 2 0 110 4 2 2 0 010-4zM10 9h3.3v1.5c.5-.9 1.7-1.8 3.4-1.8 3.5 0 4.3 2.3 4.3 5.3V20h-3.5v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z" />,
  },
  youtube: {
    bg: '#FF0000',
    glyph: <path fill="#fff" d="M9.5 7v10l8-5z" />,
  },
}

function SocialIcon({ label, url }) {
  const brand = BRANDS[label.toLowerCase()]
  const tile = 'grid h-11 w-11 place-items-center rounded-full shadow-md ring-2 ring-white/20 transition duration-200'

  // unknown network: fall back to a text pill
  if (!brand) {
    return url
      ? <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">{label}</a>
      : <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-brand-200/60">{label}</span>
  }

  const svg = (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">{brand.glyph}</svg>
  )

  // no URL yet: still full colour (add the URL in src/data/site.js)
  if (!url) {
    return (
      <span className={`${tile} cursor-not-allowed`} style={{ background: brand.bg }} title="Add URL in src/data/site.js" aria-label={`${label} (link not added yet)`}>
        {svg}
      </span>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.name} on ${label}`}
      title={label}
      className={`${tile} hover:-translate-y-1 hover:scale-110 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      style={{ background: brand.bg }}
    >
      {svg}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 text-sm font-semibold text-white">{site.tagline}</p>
          <p className="mt-2 text-sm text-brand-200">Practical online training in IT and professional skills, from Koramangala, Bangalore.</p>
          <ul className="mt-5 flex flex-wrap gap-3" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.label}>
                <SocialIcon label={s.label} url={s.url} />
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold text-white">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[['/', 'Home'], ['/about', 'About'], ['/courses', 'Courses'], ['/batch-timings', 'Batch Timings'], ['/contact', 'Contact']].map(([t, l]) => <li key={t}><Link to={t} className="hover:text-white">{l}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Courses">
          <h2 className="text-sm font-bold text-white">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm">{courses.map((c) => <li key={c.slug}><Link to={`/courses/${c.slug}`} className="hover:text-white">{c.name}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" aria-hidden /><a href={telUrl} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" aria-hidden /><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" aria-hidden /><address className="not-italic">{site.address.join(' ')}</address></li>
            <li className="flex gap-2"><MessageCircle size={16} className="mt-0.5 shrink-0" aria-hidden /><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-brand-200">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  )
}