import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import TiltCard from '@/components/TiltCard'

const filters = ['All', 'Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Prints & Merch']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container-arch">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-12" style={{ transformStyle: 'preserve-3d' }}>
          <p className="section-label">Our Work</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Selected <span className="text-teal-grad">Projects</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Each project here is a story — a brief, a challenge, a process, and a result.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                ...(active === f
                  ? { background: '#00ceca', color: '#032f4c', boxShadow: '0 4px 20px rgba(0,206,202,0.3)' }
                  : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }),
                transition: 'all 0.2s ease',
              }}>
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 35, rotateX: -15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={8} className="h-full">
                  <Link to={`/portfolio/${p.slug}`} className="group block relative overflow-hidden rounded-2xl depth-shadow h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-300`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-5 flex flex-col justify-end" style={{ transform: 'translateZ(35px)' }}>
                      <span className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#00ceca' }}>{p.category} · {p.year}</span>
                      <h3 className="heading-serif text-lg font-bold text-white mb-0.5">{p.title}</h3>
                      <p className="text-white/40 text-sm">{p.client}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      style={{ background: '#00ceca', transform: 'translateZ(45px)' }}>
                      <ArrowRight size={16} className="text-navy" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'rgba(0,206,202,0.05)' }}
            className="mt-20 relative overflow-hidden rounded-3xl p-10 md:p-14 text-center border glow-teal">
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to add your project to this list?
          </h2>
          <p className="text-white/50 mb-6">Let's build something worth showing.</p>
          <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
        </motion.div>
      </div>
    </main>
  )
}
