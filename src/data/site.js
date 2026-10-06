import { Megaphone, Code2, Palette, Handshake, MessageCircle, Target, Layers, Wifi, Compass, Users, UserCheck } from 'lucide-react'

// ---- EDIT CONTACT DETAILS HERE ----
export const site = {
  name: 'WebdudeX IT Skills Academy',
  tagline: 'Your Learning Buddy',
  phone: '7019799867',
  phoneIntl: '917019799867', // WhatsApp number: country code + number, no "+"
  email: 'Johnnyvasu764@gmail.com',
  address: ['483, 1st Main Road,', 'Dr. BR Ambedkar Nagar,', 'Vivek Nagar Post,', 'Koramangala, Bangalore – 560047.'],
  whatsappMessage: 'Hi WebdudeX IT Skills Academy, I am interested in your training programs. I would like to know more about the courses and batch timings.',
  // Social links: put real URLs here; empty ones show as disabled placeholders
  social: [{ label: 'Facebook', url: '' }, { label: 'Instagram', url: '' }, { label: 'LinkedIn', url: '' }, { label: 'YouTube', url: '' }],
}
const full = site.address.join(' ')
export const whatsappUrl = `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(site.whatsappMessage)}`
export const telUrl = `tel:+91${site.phone}`
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(full)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(full)}&output=embed`

// ---- EDIT BATCHES HERE ----
export const batches = {
  morning: ['7:00 AM – 9:00 AM', '9:00 AM – 11:00 AM', '11:00 AM – 1:00 PM'],
  evening: ['2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM', '6:00 PM – 8:00 PM'],
}

// ---- EDIT COURSES HERE ----
export const courses = [
  { slug: 'digital-marketing', name: 'Digital Marketing', icon: Megaphone,
    short: 'Learn how brands find, attract and keep customers online.',
    areas: ['Social media marketing', 'SEO basics', 'Content & campaigns', 'Email marketing', 'Analytics & reporting'],
    overview: 'A practical introduction to promoting products and services online, from planning content to understanding how campaigns reach an audience.',
    topics: ['Digital marketing fundamentals', 'Social media marketing', 'Search engine optimisation (SEO)', 'Content marketing', 'Online advertising concepts', 'Email marketing basics', 'Analytics and reporting basics'],
    who: ['Students and fresh graduates', 'Small business owners', 'Anyone starting a marketing career'] },
  { slug: 'full-stack-development', name: 'Full Stack Development', icon: Code2,
    short: 'Build complete web applications, from interface to database.',
    areas: ['Frontend development', 'Backend & APIs', 'Databases', 'Version control', 'Deployment strategies'],
    overview: 'Learn how modern web applications are built end to end by practising on hands-on projects.',
    topics: ['HTML, CSS and JavaScript', 'Frontend development', 'Backend development', 'Databases', 'APIs', 'Web application development', 'Version control basics'],
    who: ['Students interested in software', 'Career switchers', 'Anyone who wants to build web apps'] },
  { slug: 'graphic-design', name: 'Graphic Design', icon: Palette,
    short: 'Turn ideas into clear, attractive visual communication.',
    areas: ['Design fundamentals', 'Digital design', 'Creative workflow', 'Typography & color', 'UI/UX basics'],
    overview: 'Understand the principles behind good design and practise creating visuals for digital and print use.',
    topics: ['Design fundamentals', 'Colour and typography', 'Layout and composition', 'Visual communication', 'Digital design tools', 'Creative workflow', 'Practical design exercises'],
    who: ['Creative beginners', 'Students', 'Marketers and entrepreneurs who design their own content'] },
  { slug: 'business-development', name: 'Business Development', icon: Handshake,
    short: 'Learn the skills used to find opportunities and grow businesses.',
    areas: ['Lead generation', 'Customer interaction', 'Sales fundamentals', 'Relationship building', 'Business communication'],
    overview: 'Build the professional and sales skills used to approach clients, communicate value and grow relationships.',
    topics: ['Business communication', 'Lead generation concepts', 'Customer interaction', 'Sales and business fundamentals', 'Professional skills', 'Relationship building'],
    who: ['Graduates entering sales or business roles', 'Entrepreneurs', 'Working professionals'] },
  { slug: 'communication-personality-development', name: 'Communication Skills & Personality Development', icon: MessageCircle,
    short: 'Speak clearly, present with confidence and prepare for interviews.',
    areas: ['Confident communication', 'Presentation skills', 'Interview readiness', 'Personality development', 'Professional etiquette'],
    overview: 'Develop the communication habits and confidence that help in studies, interviews and the workplace.',
    topics: ['Communication', 'Confidence building', 'Presentation skills', 'Professional communication', 'Personality development', 'Interview readiness'],
    who: ['Students', 'Job seekers', 'Professionals who want to communicate better'] },
]

export const whyCards = [
  { icon: Target, title: 'Practical skill development', text: 'Learn by doing, with a focus on skills you can actually use.' },
  { icon: Layers, title: 'Industry-relevant learning', text: 'Topics chosen around what today’s digital workplaces need.' },
  { icon: Wifi, title: 'Flexible online batches', text: 'Six daily time slots, so you can pick what fits your day.' },
  { icon: Compass, title: 'Career-focused training', text: 'Every course is built around growing your professional skills.' },
  { icon: Users, title: 'Interactive learning', text: 'Learn in live online sessions, not just recorded videos.' },
  { icon: UserCheck, title: 'Personal guidance', text: 'Ask questions and get help that fits where you are.' },
]
export const journey = [['Choose your skill', 'Pick the course that matches your goal.'], ['Learn', 'Join a live online batch and build the basics.'], ['Practice', 'Apply what you learn through exercises.'], ['Build confidence', 'Get comfortable using your skills.'], ['Grow your career', 'Take your skills into work or study.']]
