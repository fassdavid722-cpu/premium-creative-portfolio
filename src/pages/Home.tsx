import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Briefcase, TrendingUp, Palette, Sparkles, Lightbulb, Rocket, Eye, Target, Award, Zap } from 'lucide-react'
import { projects, services } from '@/data/portfolio'

const stats = [
  { value: '250+', label: 'Projects Completed' },
  { value: '45+', label: 'Industries Worked With' },
  { value: '12M+', label: 'Impressions Generated' },
  { value: '4.9', label: 'Average Client Rating' },
]

const whyCards = [
  { icon: Target, title: 'Creative Strategy', desc: 'Every design starts with understanding the goal.' },
  { icon: Sparkles, title: 'Premium Quality', desc: 'Every detail is carefully crafted.' },
  { icon: TrendingUp, title: 'Business Focus', desc: 'Designs created to achieve real objectives.' },
  { icon: Zap, title: 'Modern Approach', desc: 'Using current trends and technology.' },
]

const iconMap: Record<string, any> = { Palette, Sparkles, Lightbulb, Rocket }

export default function Home() {
  const featured = projects.slice(0, 6)

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-lux relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold font-medium">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl mx-auto leading-[1.05]"
          >
            Transforming Ideas Into <span className="text-gradient-gold">Visual Experiences</span> That Build Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-cream/60 max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            I create powerful social media designs, brand identities, and digital experiences that help businesses stand out and connect with their audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-ink font-semibold text-lg hover:bg-gold-light transition-all hover:shadow-2xl hover:shadow-gold/30"
            >
              Start A Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-cream font-medium text-lg hover:border-gold/40 hover:bg-gold/5 transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="heading-display text-4xl font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-sm text-cream/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24 relative">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Featured Work</div>
              <h2 className="heading-display text-4xl md:text-6xl font-bold leading-tight">
                Selected <span className="text-gradient-gold">Projects</span>
              </h2>
            </div>
            <Link to="/portfolio" className="group inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link to={`/portfolio/${project.slug}`} className="group block relative overflow-hidden rounded-2xl">
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-gold font-medium uppercase tracking-wider mb-2">{project.category}</div>
                    <h3 className="heading-display text-xl md:text-2xl font-semibold text-cream mb-2">{project.title}</h3>
                    <p className="text-cream/50 text-sm hidden md:block">{project.shortDesc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-ink-soft dark:bg-ink-soft">
        <div className="container-lux">
          <div className="text-center mb-16">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">What I Do</div>
            <h2 className="heading-display text-4xl md:text-6xl font-bold">
              Premium <span className="text-gradient-gold">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-8 rounded-2xl border border-white/5 hover:border-gold/20 bg-ink-card/50 hover:bg-ink-card transition-all hover:shadow-2xl hover:shadow-gold/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon size={26} className="text-gold" />
                  </div>
                  <h3 className="heading-display text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-cream/50 leading-relaxed mb-6">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-24">
        <div className="container-lux">
          <div className="text-center mb-16">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Why Choose Me</div>
            <h2 className="heading-display text-4xl md:text-6xl font-bold">
              Why Work <span className="text-gradient-gold">With Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon size={22} className="text-gold" />
                </div>
                <h3 className="heading-display text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-lux">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="heading-display text-4xl md:text-6xl font-bold mb-6">
                Ready To Build Something <span className="text-gradient-gold">Remarkable?</span>
              </h2>
              <p className="text-cream/60 text-lg max-w-xl mx-auto mb-10">
                Let's create visual experiences that make your brand impossible to ignore.
              </p>
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
