import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'

const links = [['/', 'Home'], ['/about', 'About'], ['/courses', 'Courses'], ['/batch-timings', 'Batch Timings'], ['/contact', 'Contact']]
export const Logo = ({ light }) => (
  <span className="flex items-center gap-2.5">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-sm font-extrabold text-white">WX</span>
    <span className="leading-tight">
      <span className={`block text-base font-extrabold ${light ? 'text-white' : 'text-brand-900'}`}>WebdudeX</span>
      <span className={`block text-[11px] font-medium ${light ? 'text-brand-200' : 'text-slate-500'}`}>IT Skills Academy</span>
    </span>
  </span>
)
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-600 text-white' : 'text-brand-800 hover:bg-brand-200/60 hover:text-brand-900'}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-200 bg-brand-50/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}><Logo /></Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{l}</NavLink>)}
          <Link to="/contact" className="ml-3 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 shadow-sm">Enquire Now</Link>
        </div>
        <button className="rounded-lg p-2 text-brand-900 lg:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-brand-200 bg-brand-50 lg:hidden">
            <div className="flex flex-col gap-1 p-4">
              {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={() => setOpen(false)}>{l}</NavLink>)}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm">Enquire Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
