import Seo from '../lib/seo'
import { Hero, Intro, Courses, Why, Batches, Journey, CtaBand, ContactBlock, WhoIsItFor, Reviews } from '../components/Sections'
import { Section } from '../components/ui'
export default function Home() {
  return (<>
    <Seo title="WebdudeX IT Skills Academy | IT Training Institute in Bangalore" description="Online IT training in Bangalore: digital marketing, full stack development, graphic design, business development, communication skills and personality development." />
    <Hero /><Intro /><Courses /><Why /><WhoIsItFor /><Batches tone="white" /><Journey /><Reviews /><CtaBand />
    <Section tone="tint" title="Visit or contact us"><ContactBlock /></Section>
  </>)
}
