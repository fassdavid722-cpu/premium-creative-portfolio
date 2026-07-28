import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Palette, Star, Calendar, Package } from 'lucide-react'
import { services } from '@/data/portfolio'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const iconMap: Record<string, any> = { Sparkles, Palette, Megaphone: ArrowRight, Star, Calendar, Package }

export default function Services() {
  return (
    <main className="pt-32 pb-24 noise-overlay">
      <div className="container-arch relative z-10">
        <div className="text-center mb-16">
          <p className="section-label">Services</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            What <span className="text-accent-grad">Archworks</span> Offers
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every service is built around one goal — making your brand impossible to ignore.
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles
            return (
              <motion.div key={s.id} {...fadeUp} transition={{ delay: i * 0.08 }}
                className="card-arch overflow-hidden gradient-border">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Info */}
                  <div className="p-8 md:p-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'rgba(197,247,79,0.1)' }}>
                      <Icon size={22} style={{ color: '#c5f74f' }} />
                    </div>
                    <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-1">{s.title}</h2>
                    <p className="text-sm font-medium mb-4" style={{ color: '#c5f74f' }}>{s.tagline}</p>
                    <p className="text-white/55 leading-relaxed mb-6">{s.desc}</p>
                    <div className="text-sm text-white/35 mb-6">Best for: {s.for}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold" style={{ color: '#c5f74f' }}>{s.price}</div>
                      <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                        Get a Quote <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* What's included */}
                  <div className="p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/5"
                    style={{ background: 'rgba(167,139,250,0.04)' }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">What's Included</p>
                    <ul className="space-y-3">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/65 text-sm">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(197,247,79,0.12)' }}>
                            <Check size={12} style={{ color: '#c5f74f' }} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Not Sure? */}
        <div className="card-arch p-10 text-center mb-6 gradient-border">
          <h3 className="heading-serif text-2xl font-bold mb-3">Not sure what you need?</h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto">Tell me about your business and I'll recommend the right package for your goals and budget.</p>
          <Link to="/contact" className="btn-primary">Let's Figure It Out <ArrowRight size={16} /></Link>
        </div>

        {/* CTA */}
        <div className="glass-panel p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c5f74f 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-3">
              Ready to elevate your <span className="text-accent-grad">brand?</span>
            </h2>
            <p className="text-white/50 mb-7">Let's create something that works — not just something that looks good.</p>
            <Link to="/contact" className="btn-primary text-base">Start A Project <ArrowRight size={18} /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
