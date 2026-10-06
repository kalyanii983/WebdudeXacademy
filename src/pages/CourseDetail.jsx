import { Navigate, useParams } from 'react-router-dom'
import { MessageCircle, Phone, Check } from 'lucide-react'
import Seo from '../lib/seo'
import { PageHeader, Section, Button, Reveal } from '../components/ui'
import { Journey, CtaBand } from '../components/Sections'
import { courses, telUrl, whatsappUrl } from '../data/site'
export default function CourseDetail() {
  const c = courses.find((x) => x.slug === useParams().slug)
  if (!c) return <Navigate to="/courses" replace />
  const I = c.icon
  const list = (items) => <ul className="mt-5 grid gap-3 sm:grid-cols-2">{items.map((t) => <li key={t} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-brand-100"><Check size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />{t}</li>)}</ul>
  return (<>
    <Seo title={`${c.name} Training in Bangalore | WebdudeX IT Skills Academy`} description={`${c.name} training at WebdudeX IT Skills Academy, Bangalore. ${c.short}`} />
    <PageHeader title={c.name} intro={c.short} />
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-12">
          <Reveal><h2 className="text-2xl font-bold">Overview</h2><p className="mt-3 text-lg text-slate-600">{c.overview}</p></Reveal>
          <Reveal><h2 className="text-2xl font-bold">What you can learn</h2>{list(c.topics)}</Reveal>
          <Reveal><h2 className="text-2xl font-bold">Who should learn</h2>{list(c.who)}</Reveal>
        </div>
        <aside className="h-fit rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-100 lg:sticky lg:top-24">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white"><I size={24} aria-hidden /></span>
          <h2 className="mt-4 text-xl font-bold">Interested in this course?</h2>
          <p className="mt-2 text-sm text-slate-600">Ask us about syllabus, fees and batch availability.</p>
          <div className="mt-5 flex flex-col gap-3">
            <Button to={`/contact?course=${c.slug}`}>Enquire Now</Button>
            <Button href={whatsappUrl} variant="whatsapp" icon={MessageCircle}>WhatsApp</Button>
            <Button href={telUrl} variant="outline" icon={Phone}>Call Now</Button>
          </div>
        </aside>
      </div>
    </Section>
    <Journey /><CtaBand />
  </>)
}
