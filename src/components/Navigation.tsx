import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b' : 'bg-transparent'
      }`} style={scrolled ? { borderColor: 'rgba(3,47,76,0.06)' } : {}}>
        <nav className="container-arch flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg transition-all duration-300 group-hover:scale-110" style={{ background: '#00ceca' }}>A</div>
            <span className="text-xl font-bold tracking-tight text-ink">Archworks<span style={{ color: '#00ceca' }}>.</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? '' : 'text-ink-muted hover:text-ink hover:bg-black/[0.03]'}`
              } style={({ isActive }) => isActive ? { color: '#009e9b' } : {}}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5 gap-1.5">
              Start A Project <ArrowRight size={16} />
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink" aria-label="Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(247,249,250,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link, i) => (
                <motion.div key={link.to}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink to={link.to} end={link.to === '/'} className="text-3xl font-semibold text-ink-muted hover:text-ink transition-colors" style={({ isActive }) => isActive ? { color: '#009e9b' } : {}}>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary mt-4">Start A Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
