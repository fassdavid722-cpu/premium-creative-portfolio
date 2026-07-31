import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import TiltCard from '@/components/TiltCard'

const fade3D = {
  initial: { opacity: 0, y: 24, rotateX: -8 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-30px' },
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

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
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative h-[65vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-25`} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="container-arch relative z-10 pb-14" style={{ transformStyle: 'preserve-3d' }}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-5">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <div className="flex flex-wrap gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(0,206,202,0.15)', color: '#00ceca' }}>{project.category}</span>
            <span className="text-white/30 text-sm flex items-center">{project.year}</span>
          </div>
          <h1 className="heading-serif text-4xl md:text-6xl font-bold max-w-3xl">{project.title}</h1>
        </motion.div>
      </section>

      {/* Project Meta */}
      <section className="py-12 border-b border-white/5">
        <div className="container-arch grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ l: 'Client', v: project.client }, { l: 'Category', v: project.category }, { l: 'Year', v: project.year }, { l: 'Service', v: project.filter }].map((x, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.06 }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#00ceca' }}>{x.l}</p>
              <p className="text-white font-medium">{x.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-14">
        <div className="container-arch max-w-3xl">
          <motion.div {...fade3D} transition={{ duration: 0.3 }}>
            <p className="section-label">The Brief</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-5">What Was Needed</h2>
            <p className="text-white/60 text-lg leading-relaxed">{project.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Creative Direction */}
      <section className="py-14" style={{ background: 'rgba(4,57,92,0.3)' }}>
        <div className="container-arch max-w-3xl">
          <motion.div {...fade3D} transition={{ duration: 0.3 }}>
            <p className="section-label">Creative Direction</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-5">How We Built It</h2>
            <p className="text-white/60 text-lg leading-relaxed">{project.creativeDirection}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container-arch">
          <motion.div {...fade3D} transition={{ duration: 0.3 }} className="text-center mb-10">
            <p className="section-label">Our Process</p>
            <h2 className="heading-serif text-3xl md:text-5xl font-bold">From Brief to <span className="text-teal-grad">Final Result</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {project.process.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30, rotateX: -12, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={8}>
                  <div className="card-arch p-5 depth-shadow">
                    <div className="heading-serif text-5xl font-bold opacity-10 mb-2">0{i + 1}</div>
                    <h3 className="font-semibold text-white mb-2 text-lg" style={{ transform: 'translateZ(20px)' }}>{step.phase}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14" style={{ background: 'rgba(2,30,49,0.6)' }}>
        <div className="container-arch">
          <motion.div {...fade3D} transition={{ duration: 0.3 }} className="text-center mb-10">
            <p className="section-label">Gallery</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center">The Deliverables</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.gallery.map((img, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30, rotateX: -10, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={6}>
                  <div className="rounded-2xl overflow-hidden border border-white/5 hover:border-teal/20 transition-all depth-shadow">
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-108 transition-transform duration-400" />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container-arch">
          <motion.div {...fade3D} transition={{ duration: 0.3 }} className="text-center mb-10">
            <p className="section-label">The Impact</p>
            <h2 className="heading-serif text-3xl md:text-5xl font-bold">Results That <span className="text-teal-grad">Speak</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {project.results.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 25, rotateX: -12, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={10}>
                  <div className="card-arch p-8 text-center hover:border-teal/20 depth-shadow">
                    <div className="heading-serif text-4xl md:text-5xl font-bold text-teal-grad mb-2" style={{ transform: 'translateZ(30px)' }}>{r.value}</div>
                    <div className="text-sm text-white/40" style={{ transform: 'translateZ(15px)' }}>{r.label}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container-arch">
          <motion.div
            initial={{ opacity: 0, y: 25, rotateX: -8, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'linear-gradient(135deg, rgba(0,206,202,0.07) 0%, rgba(3,47,76,0.5) 100%)' }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border glow-teal">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-4">Want results like this?</h2>
            <p className="text-white/50 mb-7">Let's create your project together.</p>
            <Link to="/contact" className="btn-primary text-base">Start A Project <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
