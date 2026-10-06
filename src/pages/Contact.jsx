import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MessageCircle, Phone, Loader2, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import Seo from '../lib/seo'
import { PageHeader } from '../components/ui'
import { courses, site, telUrl, whatsappUrl, mapsLink, mapsEmbed } from '../data/site'
import { submitEnquiry } from '../lib/submit'

// ---- EDIT THESE ----------------------------------------------------------
const CONTACT_BG = 'https://i.pinimg.com/736x/df/1d/59/df1d59f83a99ecd57c4711c866da8bf5.jpg' // or '/contact-bg.jpg' from /public
// Blue layer over the image (same style as the hero image). Higher number = darker/bluer, 0 = no blue layer.
const OVERLAY_TOP = 0.78 // navy  (#062B63) opacity at the top
const OVERLAY_BOTTOM = 0.6 // royal (#0B5ED7) opacity at the bottom
// --------------------------------------------------------------------------

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  const ph = v.phone.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '')
  if (!/^[6-9]\d{9}$/.test(ph)) e.phone = 'Enter a valid 10-digit mobile number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.course) e.course = 'Select a course.'
  if (v.message.length > 1000) e.message = 'Message must be under 1000 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#062B63]">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} aria-hidden />{error}</p>}
    </div>
  )
}

const inputCls = (err) =>
  `w-full rounded-xl border-2 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:ring-4 focus:ring-[#2563EB]/15 ${err
    ? 'border-red-400 focus:border-red-500'
    : 'border-slate-200 focus:border-[#2563EB] hover:border-[#2563EB]/50'
  }`

const QUICK = [
  { icon: MessageCircle, label: 'WhatsApp Us', sub: 'Fastest response', href: whatsappUrl, bg: '#22C55E' },
  { icon: Phone, label: 'Call Us', sub: site.phone, href: telUrl, bg: '#2563EB' },
]

const INFO_ROWS = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Address', value: site.address.join(', '), href: mapsLink },
  { icon: Clock, label: 'Hours', value: 'Mon – Sat, 7 AM – 8 PM', href: null },
]

export default function Contact() {
  const pre = useSearchParams()[0].get('course')
  const [v, setV] = useState({ name: '', phone: '', email: '', course: courses.some((c) => c.slug === pre) ? pre : '', message: '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    const found = validate(v); setErr(found)
    if (Object.keys(found).length) return
    setStatus('sending')
    try {
      await submitEnquiry({ ...v, name: v.name.trim(), email: v.email.trim() })
      setStatus('ok')
      setV({ name: '', phone: '', email: '', course: '', message: '' })
    } catch { setStatus('fail') }
  }
  const p = (k) => ({
    id: k, value: v[k], onChange: set(k), className: inputCls(err[k]),
    'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-err` : undefined
  })

  return (<>
    <Seo title="Contact & Enquiry | WebdudeX IT Skills Academy, Koramangala" description="Contact WebdudeX IT Skills Academy in Koramangala, Bangalore. Call 7019799867, WhatsApp or send an enquiry." />
    <PageHeader title="Contact us" intro="Ask about courses, fees and batch availability. We'll get back to you." image="/coachingimg.jpg" breadcrumb="Contact" />

    {/* Page background image (sits behind the quick-contact strip and the main grid) */}
    <div className="relative isolate">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(6,43,99,${OVERLAY_TOP}),rgba(11,94,215,${OVERLAY_BOTTOM})), url('${CONTACT_BG}'), linear-gradient(180deg,#062B63,#0B5ED7)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Quick-contact strip */}
      <div className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {QUICK.map((q) => (
            <a
              key={q.label}
              href={q.href}
              target={q.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border-2 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: q.bg + '33' }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-md transition-transform duration-200 group-hover:scale-110" style={{ backgroundColor: q.bg }}>
                <q.icon size={22} aria-hidden />
              </span>
              <span>
                <span className="block text-base font-bold text-[#062B63]">{q.label}</span>
                <span className="block text-sm text-slate-500">{q.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <section className="pb-10 pt-2 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">

          {/* Form card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-20px_rgba(37,99,235,0.2)] ring-1 ring-[#2563EB]/10">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />
            <div className="p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#062B63]">
                <Send size={20} className="text-[#2563EB]" aria-hidden />
                Send an enquiry
              </h2>
              <p className="mt-1 text-sm text-slate-500">Fill in the form and we'll reply within a few hours.</p>

              <form onSubmit={submit} noValidate className="mt-6 space-y-5">
                <Field id="name" label="Full Name" error={err.name}>
                  <input {...p('name')} autoComplete="name" maxLength={80} placeholder="Your full name" />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone" error={err.phone}>
                    <input {...p('phone')} type="tel" autoComplete="tel" inputMode="tel" maxLength={16} placeholder="10-digit mobile" />
                  </Field>
                  <Field id="email" label="Email" error={err.email}>
                    <input {...p('email')} type="email" autoComplete="email" maxLength={120} placeholder="you@example.com" />
                  </Field>
                </div>
                <Field id="course" label="Course interested in" error={err.course}>
                  <select {...p('course')}>
                    <option value="">Select a course</option>
                    {courses.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                  </select>
                </Field>
                <Field id="message" label="Message (optional)" error={err.message}>
                  <textarea
                    id="message" value={v.message} onChange={set('message')}
                    rows={4} maxLength={1000} placeholder="Any specific questions or requirements?"
                    className={inputCls(err.message)}
                    aria-invalid={!!err.message} aria-describedby={err.message ? 'message-err' : undefined}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0B5ED7] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2563EB]/40 disabled:opacity-60"
                >
                  {status === 'sending'
                    ? <><Loader2 className="animate-spin" size={18} aria-hidden /> Sending…</>
                    : <><Send size={18} aria-hidden /> Send Enquiry</>}
                </button>

                <div aria-live="polite">
                  {status === 'ok' && (
                    <div className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800 ring-1 ring-emerald-200">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden />
                      <p className="text-sm font-medium">Thank you! Your enquiry has been received. We'll contact you soon.</p>
                    </div>
                  )}
                  {status === 'fail' && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-red-700 ring-1 ring-red-200">
                      <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden />
                      <p className="text-sm font-medium">Something went wrong. Please call <a href={telUrl} className="font-bold underline">{site.phone}</a> or use WhatsApp.</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-5">
            {INFO_ROWS.map(({ icon: I, label, value, href }) => (
              <div key={label} className="group flex items-start gap-4 rounded-2xl border-2 border-[#2563EB]/10 bg-[#F4F8FF] p-5 transition duration-200 hover:border-[#2563EB]/30 hover:bg-white hover:shadow-md">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#2563EB] text-white shadow-sm">
                  <I size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB]">{label}</p>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="mt-0.5 block font-semibold text-[#062B63] hover:text-[#2563EB]">{value}</a>
                    : <p className="mt-0.5 font-semibold text-[#062B63]">{value}</p>}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="min-h-[240px] flex-1 overflow-hidden rounded-2xl ring-1 ring-[#2563EB]/10 shadow-md">
              <iframe
                title="WebdudeX IT Skills Academy location on Google Maps"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 lg:h-full"
              />
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#2563EB]/20 bg-white py-3 text-sm font-semibold text-[#2563EB] transition hover:bg-[#EEF4FF] hover:border-[#2563EB]/50"
            >
              <MapPin size={16} aria-hidden /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  </>)
}