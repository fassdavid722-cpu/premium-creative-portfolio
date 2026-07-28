import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { projects } from '@/data/portfolio'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-display text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-gold hover:text-gold-light inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-lux relative z-10 pb-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium">{project.category}</span>
            <span className="text-cream/40 text-sm">{project.year}</span>
          </div>
          <h1 className="heading-display text-4xl md:text-6xl font-bold max-w-3xl">{project.title}</h1>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container-lux grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Client', value: project.client },
            { label: 'Category', value: project.category },
            { label: 'Year', value: project.year },
            { label: 'Services', value: project.filter },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-xs text-gold uppercase tracking-wider mb-2">{item.label}</div>
              <div className="text-lg font-medium text-cream">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12">
        <div className="container-lux max-w-4xl">
          <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">The Challenge</div>
          <h2 className="heading-display text-3xl md:text-4xl font-bold mb-6">What problem needed solving?</h2>
          <p className="text-lg text-cream/60 leading-relaxed">{project.challenge}</p>
        </div>
      </section>

      {/* Creative Direction */}
      <section className="py-12 bg-ink-soft dark:bg-ink-soft">
        <div className="container-lux max-w-4xl">
          <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Creative Direction</div>
          <h2 className="heading-display text-3xl md:text-4xl font-bold mb-6">How the concept was developed</h2>
          <p className="text-lg text-cream/60 leading-relaxed">{project.creativeDirection}</p>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="container-lux">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Design Process</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">From Concept to <span className="text-gradient-gold">Final Result</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-6xl heading-display font-bold text-gold/10 mb-2">0{i + 1}</div>
                <h3 className="heading-display text-xl font-semibold mb-3">{step.phase}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{step.detail}</p>
                {i < project.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-gold/20">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-ink-soft dark:bg-ink-soft">
        <div className="container-lux">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Gallery</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">Designs & <span className="text-gradient-gold">Mockups</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/5"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container-lux">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Results</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">The <span className="text-gradient-gold">Impact</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-white/5 bg-ink-card/30"
              >
                <div className="heading-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{result.value}</div>
                <div className="text-sm text-cream/40">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-lux">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="heading-display text-3xl md:text-5xl font-bold mb-6">
                Want results like this?
              </h2>
              <p className="text-cream/60 text-lg mb-8">Let's create your project.</p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-ink font-semibold text-lg hover:bg-gold-light transition-all hover:shadow-2xl hover:shadow-gold/30"
              >
                Start A Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
