import { Phone, Mail, MapPin } from 'lucide-react'
import { site, telUrl, mapsLink, mapsEmbed } from '../../data/site'

export function ContactBlock({ map = true }) {
  const rows = [[Phone, 'Phone', <a href={telUrl} className="font-semibold text-brand-700 hover:underline">{site.phone}</a>], [Mail, 'Email', <a href={`mailto:${site.email}`} className="break-all font-semibold text-brand-700 hover:underline">{site.email}</a>], [MapPin, 'Address', <address className="not-italic">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</address>]]
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">{rows.map(([I, l, v]) => (
        <div key={l} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-brand-100">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><I size={20} aria-hidden /></span>
          <div><p className="text-sm text-slate-500">{l}</p>{v}</div></div>))}
      </div>
      {map && <div className="overflow-hidden rounded-3xl ring-1 ring-brand-100">
        <iframe title="WebdudeX IT Skills Academy location on Google Maps" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 lg:h-full lg:min-h-[320px]" />
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="block bg-white py-3 text-center text-sm font-semibold text-brand-700 hover:bg-brand-50">Open in Google Maps</a>
      </div>}
    </div>
  )
}
