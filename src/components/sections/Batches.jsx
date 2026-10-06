import { Sun, Sunset } from 'lucide-react'
import { Reveal, Section } from '../ui'
import { batches } from '../../data/site'

export function Batches({ tone = 'tint' }) {
  const groups = [[Sun, 'Morning batches', batches.morning], [Sunset, 'Afternoon & evening batches', batches.evening]]
  return (
    <Section tone={tone} id="batches" title="Pick the batch that fits your day" intro="7 online batches are available. Each session runs for two hours. Contact us to confirm availability for your course.">
      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map(([I, t, list], g) => (
          <Reveal key={t} delay={g * .1}>
            <div className="h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-brand-100 sm:p-8">
              <h3 className="flex items-center gap-3 text-xl font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><I size={20} aria-hidden /></span>{t}</h3>
              <ul className="mt-6 space-y-3">{list.map((s) => (
                <li key={s} className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3.5 font-semibold text-brand-900 transition hover:bg-brand-100"><span>{s}</span><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">Online</span></li>))}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
