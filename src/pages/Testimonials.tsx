import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/portfolio'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Testimonials() {
  return (
    <main className="pt-32 pb-24 noise-overlay">
      <div className="container-arch relative z-10">
        <div className="text-center mb-16">
          <p className="section-label">Testimonials</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Real Words. <span className="text-teal-grad">Real Clients.</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">
            Social proof is not decoration — it's evidence. Here's what clients say after working with Archworks.
          </p>
        </div>

        {/* Hero testimonial */}
        <motion.div {...fadeUp} className="glass-panel p-12 md:p-16 mb-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-10 animate-blob pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} style={{ color: '#00ceca', fill: '#00ceca' }} />)}
            </div>
            <blockquote className="heading-serif text-2xl md:text-3xl font-medium max-w-3xl mx-auto leading-snug mb-8">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img src={testimonials[0].avatar} alt={testimonials[0].name}
                className="w-14 h-14 rounded-full object-cover border-2" style={{ borderColor: '#00ceca' }} />
              <div className="text-left">
                <p className="font-semibold text-ink">{testimonials[0].name}</p>
                <p className="text-sm text-ink-faint">{testimonials[0].role}, {testimonials[0].company}</p>
                <p className="text-xs mt-0.5" style={{ color: '#00ceca' }}>Hired for: {testimonials[0].service}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.slice(1).map((t, i) => (
            <motion.div key={t.id} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="card-arch p-7 gradient-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#00ceca', fill: '#00ceca' }} />)}
              </div>
              <p className="text-ink-muted text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border" style={{ borderColor: 'rgba(0,206,202,0.2)' }} />
                <div>
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}, {t.company}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#00ceca' }}>{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-panel p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-3">Become the next success story</h2>
            <p className="text-ink-muted mb-7">Join 30+ clients who trusted Archworks with their brand.</p>
            <Link to="/contact" className="btn-primary text-base">Start A Project <ArrowRight size={18} /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
