import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Palette, Star, Calendar, Package } from 'lucide-react'
import { services } from '@/data/portfolio'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const iconMap: Record<string, any> = { Sparkles, Palette, Megaphone: ArrowRight, Star, Calendar, Package }

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-arch">
        <div className="text-center mb-16">
          <p className="section-label">Services</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            What <span className="text-teal-grad">Archworks</span> Offers
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every service is built around one goal — making your brand impossible to ignore.
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles
            const isEven = i % 2 === 1
            return (
              <motion.div key={s.id} {...fadeUp} transition={{ delay: i * 0.08 }}
                className="card-arch overflow-hidden hover:border-teal/20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : ''}`}>
                  {/* Info */}
                  <div className="p-8 md:p-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'rgba(0,206,202,0.12)' }}>
                      <Icon size={22} style={{ color: '#00ceca' }} />
                    </div>
                    <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-1">{s.title}</h2>
                    <p className="text-sm font-medium mb-4" style={{ color: '#00ceca' }}>{s.tagline}</p>
                    <p className="text-white/55 leading-relaxed mb-6">{s.desc}</p>
                    <div className="text-sm text-white/35 mb-6">Best for: {s.for}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold" style={{ color: '#00ceca' }}>{s.price}</div>
                      <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                        Get a Quote <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* What's included */}
                  <div className="p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/5"
                    style={{ background: 'rgba(4,57,92,0.3)' }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">What's Included</p>
                    <ul className="space-y-3">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/65 text-sm">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(0,206,202,0.15)' }}>
                            <Check size={12} style={{ color: '#00ceca' }} />
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
        <div className="card-arch p-10 text-center mb-6">
          <h3 className="heading-serif text-2xl font-bold mb-3">Not sure what you need?</h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto">Tell me about your business and I'll recommend the right package for your goals and budget.</p>
          <Link to="/contact" className="btn-primary">Let's Figure It Out <ArrowRight size={16} /></Link>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center border"
          style={{ borderColor: 'rgba(0,206,202,0.2)', background: 'linear-gradient(135deg, rgba(0,206,202,0.08) 0%, rgba(3,47,76,0.5) 100%)' }}>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-3">
            Ready to elevate your <span className="text-teal-grad">brand?</span>
          </h2>
          <p className="text-white/50 mb-7">Let's create something that works — not just something that looks good.</p>
          <Link to="/contact" className="btn-primary text-base">Start A Project <ArrowRight size={18} /></Link>
        </div>
      </div>
    </main>
  )
}
