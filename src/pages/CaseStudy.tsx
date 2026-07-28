import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-serif text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="inline-flex items-center gap-2 hover:text-white/80 transition-colors" style={{ color: '#00ceca' }}>
            <ArrowLeft size={18} /> Back to Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-25`} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
        </div>
        <div className="container-arch relative z-10 pb-14">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-5">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <div className="flex flex-wrap gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(0,206,202,0.12)', color: '#00ceca' }}>{project.category}</span>
            <span className="text-white/30 text-sm flex items-center">{project.year}</span>
          </div>
          <h1 className="heading-serif text-4xl md:text-6xl font-bold max-w-3xl">{project.title}</h1>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-12 border-b border-white/5">
        <div className="container-arch grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ l: 'Client', v: project.client }, { l: 'Category', v: project.category }, { l: 'Year', v: project.year }, { l: 'Service', v: project.filter }].map((x, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#00ceca' }}>{x.l}</p>
              <p className="text-white font-medium">{x.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="container-arch max-w-3xl">
          <p className="section-label">The Brief</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-5">What Was Needed</h2>
          <p className="text-white/60 text-lg leading-relaxed">{project.challenge}</p>
        </div>
      </section>

      {/* Creative Direction */}
      <section className="py-16" style={{ background: 'rgba(3,47,76,0.3)' }}>
        <div className="container-arch max-w-3xl">
          <p className="section-label">Creative Direction</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-5">How We Built It</h2>
          <p className="text-white/60 text-lg leading-relaxed">{project.creativeDirection}</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-arch">
          <div className="text-center mb-12">
            <p className="section-label">Our Process</p>
            <h2 className="heading-serif text-3xl md:text-5xl font-bold">From Brief to <span className="text-teal-grad">Final Result</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {project.process.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.12 }}>
                <div className="heading-serif text-6xl font-bold opacity-10 mb-2" style={{ color: '#00ceca' }}>0{i + 1}</div>
                <h3 className="font-semibold text-white mb-2 text-lg">{step.phase}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'rgba(6,6,9,0.6)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5 animate-blob pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
        <div className="container-arch relative z-10">
          <p className="section-label text-center">Gallery</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-10">The Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.gallery.map((img, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/5 hover:border-teal/20 transition-all duration-500">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-arch">
          <div className="text-center mb-12">
            <p className="section-label">The Impact</p>
            <h2 className="heading-serif text-3xl md:text-5xl font-bold">Results That <span className="text-teal-grad">Speak</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {project.results.map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="card-arch p-8 text-center gradient-border">
                <div className="heading-serif text-4xl md:text-5xl font-bold text-teal-grad mb-2">{r.value}</div>
                <div className="text-sm text-white/40">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-arch">
          <div className="glass-panel p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
              style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-4">
                Want results like this?
              </h2>
              <p className="text-white/50 mb-7">Let's create your project together.</p>
              <Link to="/contact" className="btn-primary text-base">
                Start A Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
