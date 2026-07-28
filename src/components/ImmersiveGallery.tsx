import { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Grid3x3, Sparkles } from 'lucide-react'
import { projects } from '@/data/portfolio'
import type { Project } from '@/data/portfolio'

// Lazy load 3D components
const GalleryCanvas = lazy(() => import('@/scenes/GalleryScene'))
const ProjectScene = lazy(() => import('@/scenes/ProjectScene'))

const filters = ['All', 'Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Prints & Merch']

export default function ImmersiveGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [view, setView] = useState<'immersive' | 'grid'>('immersive')
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-8 noise-overlay relative z-10">
        <div className="container-arch relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-label"
              >
                Immersive Gallery
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-serif text-5xl md:text-6xl font-bold mb-4 text-ink"
              >
                Step Into <span className="text-teal-grad">Each Project</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-ink-muted text-lg max-w-xl"
              >
                Scroll through a 3D gallery space. Click any project to enter an immersive room where the work lives naturally.
                <span className="block mt-1" style={{ color: '#00ceca' }}>Click objects inside the room to inspect them up close.</span>
              </motion.p>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2 p-1 rounded-xl border" style={{ borderColor: 'rgba(0,206,202,0.08)', background: '#0f1626' }}>
              <button onClick={() => setView('immersive')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === 'immersive' ? { background: '#00ceca', color: '#0f1626' } : { color: '#7a8a9e' }}>
                <Layers size={15} /> 3D Walkthrough
              </button>
              <button onClick={() => setView('grid')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={view === 'grid' ? { background: '#00ceca', color: '#0f1626' } : { color: '#7a8a9e' }}>
                <Grid3x3 size={15} /> Grid View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive 3D Gallery */}
      {view === 'immersive' && (
        <>
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center" style={{ background: '#0a0e1a' }}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 animate-spin mx-auto mb-4"
                  style={{ borderColor: '#00ceca', borderTopColor: 'transparent' }} />
                <p className="text-ink-muted text-sm">Building the gallery space…</p>
              </div>
            </div>
          }>
            <GalleryCanvas projects={filtered} onSelect={setSelectedProject} />
          </Suspense>

          {/* Scroll zone — provides scroll distance for camera movement */}
          <div id="gallery-scroll-zone" style={{ height: '500vh', position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
            <div style={{ position: 'sticky', top: '20vh', pointerEvents: 'none' }} className="container-arch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="max-w-md"
              >
                <div className="glass-panel p-5 pointer-events-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} style={{ color: '#00ceca' }} />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00ceca' }}>
                      Immersive Mode
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    Scroll to walk through the gallery. Click any card to enter the project's world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll hint at bottom */}
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] flex flex-col items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          >
            <span className="text-xs uppercase tracking-widest text-ink-faint">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border flex items-start justify-center p-1" style={{ borderColor: 'rgba(0,206,202,0.15)' }}>
              <motion.div className="w-1 h-2 rounded-full" style={{ background: '#00ceca' }}
                animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </div>
          </motion.div>
        </>
      )}

      {/* Grid fallback view */}
      {view === 'grid' && (
        <section className="pb-24 pt-8">
          <div className="container-arch">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map(f => (
                <button key={f} onClick={() => setActive(f)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={active === f
                    ? { background: '#00ceca', color: '#0f1626' }
                    : { border: '1px solid rgba(0,206,202,0.08)', color: '#7a8a9e', background: '#0f1626' }}>
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}>
                  <button onClick={() => setSelectedProject(p)}
                    className="group block w-full relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl text-left"
                    style={{ borderColor: 'rgba(0,206,202,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                    {/* 3D badge */}
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"
                      style={{ background: 'rgba(15,22,38,0.95)', color: '#00ceca' }}>
                      <Layers size={11} /> 3D
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

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

      {/* Immersive project scene overlay */}
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={
            <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: '#0a0e1a' }}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 animate-spin mx-auto mb-4"
                  style={{ borderColor: '#00ceca', borderTopColor: 'transparent' }} />
                <p className="text-ink-muted text-sm">Entering immersive space…</p>
              </div>
            </div>
          }>
            <ProjectScene project={selectedProject} onClose={() => setSelectedProject(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </main>
  )
}
