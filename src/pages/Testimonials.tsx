import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/portfolio'

export default function Testimonials() {
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
            Testimonials
          </motion.div>
          <h1 className="heading-display text-5xl md:text-7xl font-bold mb-6">
            Client <span className="text-gradient-gold">Stories</span>
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Don't just take my word for it. Here's what clients say about working together.
          </p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 p-12 md:p-16 mb-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="heading-display text-2xl md:text-4xl font-medium leading-snug mb-8">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
              />
              <div className="text-left">
                <div className="font-semibold text-cream">{testimonials[0].name}</div>
                <div className="text-sm text-cream/50">{testimonials[0].role}, {testimonials[0].company}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all bg-ink-card/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-cream/60 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/20"
                />
                <div>
                  <div className="font-semibold text-cream text-sm">{t.name}</div>
                  <div className="text-xs text-cream/40">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <section className="py-16 mt-8">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="heading-display text-3xl md:text-5xl font-bold mb-6">
                Become the next <span className="text-gradient-gold">success story</span>
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
