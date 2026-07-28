import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Sparkles, Lightbulb, Rocket, Check } from 'lucide-react'
import { services } from '@/data/portfolio'

const iconMap: Record<string, any> = { Palette, Sparkles, Lightbulb, Rocket }

const additionalServices = [
  { title: 'Social Media Management', desc: 'Full-service content creation and community management.' },
  { title: 'Brand Design', desc: 'Logo systems, visual identity, and brand guidelines.' },
  { title: 'Creative Direction', desc: 'Art direction for campaigns, photoshoots, and content.' },
  { title: 'Marketing Graphics', desc: 'Ad creatives, banners, and promotional materials.' },
  { title: 'Content Systems', desc: 'Template systems and content frameworks for scale.' },
]

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-lux">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-gold font-medium uppercase tracking-wider mb-3"
          >
            Services
          </motion.div>
          <h1 className="heading-display text-5xl md:text-7xl font-bold mb-6">
            What I <span className="text-gradient-gold">Deliver</span>
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Premium design services that transform brands and drive business results.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles
            const isReversed = i % 2 === 1
            return (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? 'lg:order-2' : ''}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Icon size={30} className="text-gold" />
                  </div>
                  <h2 className="heading-display text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-cream/60 text-lg leading-relaxed mb-8">{service.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-gold uppercase tracking-wider mb-2">Problem</div>
                      <p className="text-cream/50">{service.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs text-gold uppercase tracking-wider mb-2">Solution</div>
                      <p className="text-cream/50">{service.solution}</p>
                    </div>
                    <div>
                      <div className="text-xs text-gold uppercase tracking-wider mb-2">Outcome</div>
                      <p className="text-cream/50">{service.outcome}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <div className="p-8 rounded-2xl border border-white/5 bg-ink-card/30">
                    <div className="text-xs text-gold uppercase tracking-wider mb-6">Process</div>
                    <div className="space-y-4">
                      {service.process.map((step, j) => (
                        <div key={j} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Check size={16} className="text-gold" />
                          </div>
                          <div>
                            <div className="text-sm text-cream/30">Step {j + 1}</div>
                            <div className="text-cream font-medium">{step}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <section className="py-20 mt-12">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Also Offered</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">Additional <span className="text-gradient-gold">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-all"
              >
                <h3 className="heading-display text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-cream/50 text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="heading-display text-3xl md:text-5xl font-bold mb-6">
                Ready to elevate your <span className="text-gradient-gold">brand?</span>
              </h2>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-ink font-semibold text-lg hover:bg-gold-light transition-all hover:shadow-2xl hover:shadow-gold/30"
              >
                Start A Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
