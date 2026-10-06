import { Section } from '../ui'
import { courses } from '../../data/site'
import { CourseShowcaseCard } from './Courseshowcasecard'

export function Courses() {
  return (
    <Section tone="tint" id="courses" title="Courses that build real skills" intro="Five training programs covering technology, creativity, business and communication.">
      {/* xl: 3 cards on row 1, 2 wider cards on row 2 — matches Courses page layout */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {courses.map((c, i) => (
          <CourseShowcaseCard
            key={c.slug}
            c={c}
            i={i}
            className={i < 3 ? 'xl:col-span-2' : i === courses.length - 1 ? 'md:col-span-2 xl:col-span-3' : 'xl:col-span-3'}
          />
        ))}
      </div>
    </Section>
  )
}
