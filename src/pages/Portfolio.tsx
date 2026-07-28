import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers } from 'lucide-react'
import { projects } from '@/data/portfolio'
import Gallery3D from '@/components/Gallery3D'

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
              <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
                Selected <span className="text-teal-grad">Projects</span>
              </h1>
              <p className="text-white/50 text-lg max-w-xl">
                Each project here is a story — a brief, a challenge, a process, and a result.
                <span className="block mt-1" style={{ color: '#00ceca' }}>Click any project to watch it assemble itself.</span>
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-xl border border-white/10" style={{ background: 'rgba(4,57,92,0.4)' }}>
              <button onClick={() => setView('3d')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === '3d' ? { background: '#00ceca', color: '#021e31' } : { color: 'rgba(255,255,255,0.5)' }}>
                <Layers size={15} /> 3D Gallery
              </button>
              <button onClick={() => setView('grid')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === 'grid' ? { background: '#00ceca', color: '#021e31' } : { color: 'rgba(255,255,255,0.5)' }}>
                Grid View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Gallery */}
      {view === '3d' && (
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-teal border-t-transparent animate-spin mx-auto mb-4" />
              <p className="text-white/50 text-sm">Loading 3D Gallery…</p>
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
                    ? { background: '#00ceca', color: '#021e31' }
                    : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.id} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <Link to={`/portfolio/${p.slug}`} className="group block relative overflow-hidden rounded-2xl border border-white/5 hover:border-teal/20 transition-all duration-500">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-20 group-hover:opacity-35 transition-opacity`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <span className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#00ceca' }}>{p.category} · {p.year}</span>
                      <h3 className="heading-serif text-lg font-bold text-white mb-0.5">{p.title}</h3>
                      <p className="text-white/40 text-sm">{p.client}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: '#00ceca' }}>
                      <ArrowRight size={16} className="text-navy-dark" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 glass-panel p-10 md:p-14 text-center">
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to add your project to this list?
              </h2>
              <p className="text-white/50 mb-6">Let's build something worth showing.</p>
              <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
