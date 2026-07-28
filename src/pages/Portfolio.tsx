import { useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers } from 'lucide-react'
import { projects } from '@/data/portfolio'

// Lazy load the 3D gallery so Three.js doesn't crash the app at import time
const Gallery3D = lazy(() => import('@/components/Gallery3D'))

const filters = ['All', 'Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Prints & Merch']
const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Portfolio() {
  const [view, setView] = useState<'3d' | 'grid'>('3d')
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-8 noise-overlay">
        <div className="container-arch relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6">
            <div>
              <p className="section-label">Our Work</p>
              <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4 text-ink">
                Selected <span className="text-teal-grad">Projects</span>
              </h1>
              <p className="text-ink-muted text-lg max-w-xl">
                Each project here is a story — a brief, a challenge, a process, and a result.
                <span className="block mt-1" style={{ color: '#009e9b' }}>Click any project to watch it assemble itself.</span>
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-xl border" style={{ borderColor: 'rgba(3,47,76,0.08)', background: '#ffffff' }}>
              <button onClick={() => setView('3d')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === '3d' ? { background: '#00ceca', color: '#fff' } : { color: '#7a8a9e' }}>
                <Layers size={15} /> 3D Gallery
              </button>
              <button onClick={() => setView('grid')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === 'grid' ? { background: '#00ceca', color: '#fff' } : { color: '#7a8a9e' }}>
                Grid View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Gallery */}
      {view === '3d' && (
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center" style={{ background: '#f7f9fa' }}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 animate-spin mx-auto mb-4" style={{ borderColor: '#00ceca', borderTopColor: 'transparent' }} />
              <p className="text-ink-muted text-sm">Loading 3D Gallery…</p>
            </div>
          </div>
        }>
          <Gallery3D projects={projects} />
        </Suspense>
      )}

      {/* Grid fallback view */}
      {view === 'grid' && (
        <section className="pb-24">
          <div className="container-arch">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map(f => (
                <button key={f} onClick={() => setActive(f)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={active === f
                    ? { background: '#00ceca', color: '#fff' }
                    : { border: '1px solid rgba(3,47,76,0.08)', color: '#7a8a9e', background: '#fff' }}>
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.id} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <Link to={`/portfolio/${p.slug}`} className="group block relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl"
                    style={{ borderColor: 'rgba(3,47,76,0.06)', boxShadow: '0 2px 12px rgba(3,47,76,0.04)' }}>
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <span className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#00ceca' }}>{p.category} · {p.year}</span>
                      <h3 className="heading-serif text-lg font-bold text-white mb-0.5">{p.title}</h3>
                      <p className="text-white/60 text-sm">{p.client}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: '#00ceca' }}>
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 glass-panel p-10 md:p-14 text-center">
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-ink mb-3">
                Ready to add your project to this list?
              </h2>
              <p className="text-ink-muted mb-6">Let's build something worth showing.</p>
              <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
