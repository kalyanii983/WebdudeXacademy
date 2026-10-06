import { Phone, MessageCircle } from 'lucide-react'
import { Button, Reveal } from '../ui'
import { telUrl, whatsappUrl } from '../../data/site'

export function CtaBand({ title = 'Ready to Start Learning?' }) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl rounded-[2rem] bg-brand-900 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">Take the first step toward building skills that can move your career forward.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={whatsappUrl} variant="whatsapp" icon={MessageCircle}>Enquire on WhatsApp</Button>
          <Button href={telUrl} variant="light" icon={Phone}>Call Now</Button>
        </div>
      </Reveal>
    </section>
  )
}
