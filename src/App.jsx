import { lazy, Suspense, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const BatchTimings = lazy(() => import('./pages/BatchTimings'))
const Contact = lazy(() => import('./pages/Contact'))
export default function App() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
    <Navbar />
    <main id="main"><Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} /><Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/batch-timings" element={<BatchTimings />} /><Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes></Suspense></main>
    <Footer />
  </>)
}
