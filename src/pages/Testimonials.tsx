import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/portfolio'
import TiltCard from '@/components/TiltCard'

const fade3D = {
  initial: { opacity: 0, y: 24, rotateX: -8 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-30px' },
}

export default function Testimonials() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-arch">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16" style={{ transformStyle: 'preserve-3d' }}>
          <p className="section-label">Testimonials</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Real Words. <span className="text-teal-grad">Real Clients.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Social proof is not decoration — it's evidence. Here's what clients say after working with Archworks.
          </p>
        </motion.div>

        {/* Hero testimonial with 3D */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -12, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d' }}>
          <TiltCard intensity={4}>
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 mb-10 text-center border glow-teal"
              style={{ borderColor: 'rgba(0,206,202,0.2)', background: 'rgba(0,206,202,0.05)' }}>
              <div className="flex justify-center gap-1 mb-5" style={{ transform: 'translateZ(40px)' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={22} style={{ color: '#00ceca', fill: '#00ceca' }} />)}
              </div>
              <blockquote className="heading-serif text-2xl md:text-3xl font-medium max-w-3xl mx-auto leading-snug mb-8" style={{ transform: 'translateZ(25px)' }}>
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4" style={{ transform: 'translateZ(30px)' }}>
                <img src={testimonials[0].avatar} alt={testimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover border-2" style={{ borderColor: '#00ceca' }} />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonials[0].name}</p>
                  <p className="text-sm text-white/40">{testimonials[0].role}, {testimonials[0].company}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#00ceca' }}>Hired for: {testimonials[0].service}</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.slice(1).map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 30, rotateX: -12, rotateY: i % 2 === 0 ? -5 : 5, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ transformStyle: 'preserve-3d' }}>
              <TiltCard intensity={8} className="h-full">
                <div className="card-arch p-7 hover:border-teal/20 depth-shadow h-full">
                  <div className="flex gap-1 mb-4" style={{ transform: 'translateZ(25px)' }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#00ceca', fill: '#00ceca' }} />)}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 italic" style={{ transform: 'translateZ(15px)' }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3" style={{ transform: 'translateZ(30px)' }}>
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border" style={{ borderColor: 'rgba(0,206,202,0.2)' }} />
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-white/35">{t.role}, {t.company}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#00ceca' }}>{t.service}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotateX: -8, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'rgba(0,206,202,0.05)' }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center border glow-teal">
          <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-3">Become the next success story</h2>
          <p className="text-white/50 mb-7">Join 30+ clients who trusted Archworks with their brand.</p>
          <Link to="/contact" className="btn-primary text-base">Start A Project <ArrowRight size={18} /></Link>
        </motion.div>
      </div>
    </main>
  )
}
