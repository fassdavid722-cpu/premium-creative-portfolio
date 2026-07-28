import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Sparkles, Palette, Megaphone, Package } from 'lucide-react'
import { projects, testimonials } from '@/data/portfolio'

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Clients Served' },
  { value: '72hr', label: 'Avg. Turnaround' },
  { value: '3+', label: 'Years Experience' },
]

const featured = projects.slice(0, 4)

const whyCards = [
  { title: 'Strategy First', desc: 'Every design decision starts with your business goal, not just aesthetics.' },
  { title: 'Dual Expertise', desc: 'Design meets analytical thinking — a unique blend of creativity and logic.' },
  { title: 'Built to Convert', desc: 'Visuals designed to make clients SPEAK, STAY, and SELL.' },
  { title: 'Fast & Reliable', desc: '72-hour average turnaround without sacrificing quality.' },
]

const marqueeItems = ['Brand Identity', 'Social Media', 'Campaign Visuals', 'Event Branding', 'Print & Merch', 'Marketing Assets', 'Art Direction', 'Creative Strategy']

const fadeUp = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 noise-overlay">
        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] opacity-[0.15] animate-blob"
            style={{ background: 'radial-gradient(circle, #c5f74f 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] opacity-10 animate-blob"
            style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] animate-blob"
            style={{ background: 'radial-gradient(circle, #c5f74f 0%, transparent 70%)', animationDelay: '7s' }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(197,247,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,247,79,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="container-arch relative z-10 text-center py-16">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
            style={{ borderColor: 'rgba(197,247,79,0.3)', background: 'rgba(197,247,79,0.06)', color: '#c5f74f' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#c5f74f' }} />
            Available for new projects
          </motion.div>

          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-serif text-5xl md:text-7xl lg:text-8xl font-bold max-w-4xl mx-auto leading-[1.05] mb-6">
            Your Brand Should Make People{' '}
            <span className="text-accent-grad-animated">Stop, Look & Buy</span>
          </motion.h1>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-5">
            Archworks is a creative design studio by <strong className="text-white/80">Daniels I. Daniels</strong> — specialising in Brand Identity, Social Media Design, Campaign Visuals, and Event Branding.
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base font-semibold tracking-wide mb-10 glow-text"
            style={{ color: '#c5f74f' }}>
            I design to make you SPEAK · STAY · SELL
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Start A Project <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-outline text-base">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-6 border-y border-white/5 overflow-hidden" style={{ background: 'rgba(197,247,79,0.03)' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="heading-serif text-2xl md:text-3xl font-medium text-white/30 mx-8 flex items-center gap-8">
              {item}
              <span style={{ color: '#c5f74f' }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-12 border-b border-white/5">
        <div className="container-arch">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="heading-serif text-4xl md:text-5xl font-bold text-accent-grad">{s.value}</div>
                <div className="text-xs text-white/35 mt-1 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 noise-overlay">
        <div className="container-arch relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold">Our Best Projects</h2>
            </div>
            <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-lime transition-colors">
              View All Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <motion.div key={project.id} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i === 0 ? 'md:col-span-2' : ''}>
                <Link to={`/portfolio/${project.slug}`} className="group block relative overflow-hidden rounded-2xl border border-white/5 hover:border-lime/20 transition-all duration-500">
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-35 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#c5f74f' }}>{project.category}</span>
                    <h3 className="heading-serif text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/40 text-sm">{project.client} · {project.year}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: '#c5f74f' }}>
                    <ArrowRight size={18} className="text-ink" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-outline">
              See All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ARCHWORKS ── */}
      <section className="py-20" style={{ background: 'rgba(167,139,250,0.04)' }}>
        <div className="container-arch">
          <div className="text-center mb-12">
            <p className="section-label">Why Choose Archworks</p>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold">Design That Does More</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="card-arch p-6 gradient-border">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(197,247,79,0.1)' }}>
                  <Sparkles size={20} style={{ color: '#c5f74f' }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 noise-overlay">
        <div className="container-arch relative z-10">
          <div className="text-center mb-12">
            <p className="section-label">Client Reviews</p>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold">Real Words. Real Results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((t, i) => (
              <motion.div key={t.id} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="card-arch p-8 gradient-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={15} style={{ color: '#c5f74f', fill: '#c5f74f' }} />)}
                </div>
                <p className="text-white/65 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border" style={{ borderColor: 'rgba(197,247,79,0.2)' }} />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}, {t.company} · {t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="container-arch">
          <div className="glass-panel p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
              style={{ background: 'radial-gradient(circle, #c5f74f 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="heading-serif text-3xl md:text-5xl font-bold mb-4">
                Ready to make people <span className="text-accent-grad-animated">stop, look & buy?</span>
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">Let's build a brand that's impossible to ignore. Your next project starts here.</p>
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
