import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

const filters = ['All', 'Branding', 'Social Media', 'Posters', 'Campaigns', 'Logos', 'UI Design']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filter === activeFilter)

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container-lux">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-gold font-medium uppercase tracking-wider mb-3"
          >
            Portfolio
          </motion.div>
          <h1 className="heading-display text-5xl md:text-7xl font-bold mb-6">
            Selected <span className="text-gradient-gold">Works</span>
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            A showcase of projects across branding, social media, campaigns, and digital design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gold text-ink'
                  : 'border border-white/10 text-cream/60 hover:border-gold/30 hover:text-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group block relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-gold" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-gold font-medium uppercase tracking-wider mb-2">
                      {project.category} · {project.year}
                    </div>
                    <h3 className="heading-display text-xl font-semibold text-cream mb-1">{project.title}</h3>
                    <p className="text-cream/40 text-sm">{project.client}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-cream/40">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}
