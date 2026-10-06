import { Check } from 'lucide-react'
import { Button, Reveal } from '../ui'

export function CourseCard({ c, i = 0 }) {
  const I = c.icon
  return (
    <Reveal delay={i * .07} className="h-full">
      <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1.5 hover:ring-brand-500">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><I size={24} aria-hidden /></span>
        <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
        <p className="mt-2 text-slate-600">{c.short}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-600">{c.areas.map((a) => <li key={a} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />{a}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Button to={`/courses/${c.slug}`} variant="outline" className="!px-4 !py-2.5">Learn More</Button>
          <Button to={`/contact?course=${c.slug}`} className="!px-4 !py-2.5">Enquire</Button>
        </div>
      </article>
    </Reveal>
  )
}
