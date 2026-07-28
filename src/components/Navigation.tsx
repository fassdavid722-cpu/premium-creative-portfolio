import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/80 dark:bg-ink/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-lux flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="heading-display text-2xl font-bold tracking-tight">
              Aether<span className="text-gradient-gold">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors luxury-border ${
                    isActive ? 'text-gold' : 'text-cream/70 dark:text-cream/70 hover:text-cream dark:hover:text-cream'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-white/10 hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-gold" /> : <Moon size={18} className="text-gold" />}
            </button>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-gold text-ink font-semibold text-sm hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Start A Project
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-cream"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl lg:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `heading-display text-3xl font-medium transition-colors ${
                        isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-6 px-8 py-3 rounded-lg bg-gold text-ink font-semibold text-lg"
              >
                Start A Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
