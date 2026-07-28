import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

const filters = ['All', 'Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Prints & Merch']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <main className="pt-32 pb-24 min-h-screen noise-overlay">
      <div className="container-arch relative z-10">
        <div className="text-center mb-12">
          <p className="section-label">Our Work</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Selected <span className="text-accent-grad">Projects</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Each project here is a story — a brief, a challenge, a process, and a result.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={active === f
                ? { background: '#c5f74f', color: '#0a0a0f' }
                : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <Link to={`/portfolio/${p.slug}`} className="group block relative overflow-hidden rounded-2xl border border-white/5 hover:border-lime/20 transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-20 group-hover:opacity-35 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#c5f74f' }}>{p.category} · {p.year}</span>
                    <h3 className="heading-serif text-lg font-bold text-white mb-0.5">{p.title}</h3>
                    <p className="text-white/40 text-sm">{p.client}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: '#c5f74f' }}>
                    <ArrowRight size={16} className="text-ink" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 glass-panel p-10 md:p-14 text-center">
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to add your project to this list?
          </h2>
          <p className="text-white/50 mb-6">Let's build something worth showing.</p>
          <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  )
}
