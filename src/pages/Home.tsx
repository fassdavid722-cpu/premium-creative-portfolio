import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import { projects, testimonials } from '@/data/portfolio'
import TiltCard from '@/components/TiltCard'

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

// Fast 3D entrance variants
const fade3D = {
  initial: { opacity: 0, y: 24, rotateX: -8 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-40px' },
}

const stagger3D = {
  initial: { opacity: 0, y: 30, rotateX: -12, scale: 0.92 },
  whileInView: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
  viewport: { once: true, margin: '-40px' },
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <main>
      {/* ── HERO with 3D parallax ── */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Parallax BG */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: blobY }}>
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 animate-float-3d"
            style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 animate-float-3d"
            style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)', animationDelay: '2s' }} />
        </motion.div>

        {/* Grid with 3D perspective */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,206,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,206,202,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(800px) rotateX(60deg) translateY(10%)',
            transformOrigin: 'center bottom',
            maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
          }} />

        <motion.div className="container-arch relative z-10 text-center py-16"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
            style={{ borderColor: 'rgba(0,206,202,0.3)', background: 'rgba(0,206,202,0.08)', color: '#00ceca' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ceca' }} />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="heading-serif text-5xl md:text-7xl lg:text-8xl font-bold max-w-4xl mx-auto leading-[1.05] mb-6">
            Your Brand Should Make People{' '}
            <span className="shimmer-text">Stop, Look & Buy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-5">
            Archworks is a creative design studio by <strong className="text-white/80">Daniels I. Daniels</strong> — specialising in Brand Identity, Social Media Design, Campaign Visuals, and Event Branding.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.22 }}
            className="text-base font-semibold tracking-wide mb-10"
            style={{ color: '#00ceca' }}>
            I design to make you SPEAK · STAY · SELL
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Start A Project <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-outline text-base">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-8 border-y border-white/5" style={{ background: 'rgba(0,206,202,0.06)' }}>
        <div className="container-arch">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-center" style={{ transformStyle: 'preserve-3d' }}>
                <div className="heading-serif text-4xl md:text-5xl font-bold text-teal-grad">{s.value}</div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK with 3D tilt cards ── */}
      <section className="py-20">
        <div className="container-arch">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <motion.div {...fade3D} transition={{ duration: 0.3 }}>
              <p className="section-label">Selected Work</p>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold">Our Best Projects</h2>
            </motion.div>
            <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              View All Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                className={i === 0 ? 'md:col-span-2' : ''}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <TiltCard intensity={6} className="h-full">
                  <Link to={`/portfolio/${project.slug}`} className="group block relative overflow-hidden rounded-2xl depth-shadow">
                    <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-300`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transform: 'translateZ(40px)' }}>
                      <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00ceca' }}>{project.category}</span>
                      <h3 className="heading-serif text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/40 text-sm">{project.client} · {project.year}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      style={{ background: '#00ceca', transform: 'translateZ(50px)' }}>
                      <ArrowRight size={18} className="text-navy" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade3D} transition={{ duration: 0.3 }} className="text-center mt-10">
            <Link to="/portfolio" className="btn-outline">
              See All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY ARCHWORKS with 3D cards ── */}
      <section className="py-20" style={{ background: 'rgba(4,57,92,0.4)' }}>
        <div className="container-arch">
          <div className="text-center mb-12">
            <motion.div {...fade3D} transition={{ duration: 0.3 }}>
              <p className="section-label">Why Choose Archworks</p>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold">Design That Does More</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30, rotateX: -12, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <TiltCard intensity={10} className="h-full">
                  <div className="card-arch p-6 hover:border-teal/20 hover:bg-navy-card/80 depth-shadow h-full">
                    <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                      style={{ background: 'rgba(0,206,202,0.12)', transform: 'translateZ(30px)' }}>
                      <Sparkles size={20} style={{ color: '#00ceca' }} />
                    </div>
                    <h3 className="font-semibold text-white mb-2" style={{ transform: 'translateZ(20px)' }}>{c.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS with 3D cards ── */}
      <section className="py-20">
        <div className="container-arch">
          <div className="text-center mb-12">
            <motion.div {...fade3D} transition={{ duration: 0.3 }}>
              <p className="section-label">Client Reviews</p>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold">Real Words. Real Results.</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.id}
                initial={{ opacity: 0, y: 35, rotateX: -10, rotateY: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <TiltCard intensity={5} className="h-full">
                  <div className="card-arch p-8 hover:border-teal/20 depth-shadow h-full">
                    <div className="flex gap-1 mb-4" style={{ transform: 'translateZ(25px)' }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={15} style={{ color: '#00ceca', fill: '#00ceca' }} />)}
                    </div>
                    <p className="text-white/70 leading-relaxed mb-6 italic" style={{ transform: 'translateZ(15px)' }}>"{t.quote}"</p>
                    <div className="flex items-center gap-3" style={{ transform: 'translateZ(30px)' }}>
                      <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border" style={{ borderColor: 'rgba(0,206,202,0.2)' }} />
                      <div>
                        <p className="font-semibold text-white text-sm">{t.name}</p>
                        <p className="text-xs text-white/40">{t.role}, {t.company} · {t.service}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16">
        <div className="container-arch">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -8, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'linear-gradient(135deg, rgba(0,206,202,0.08) 0%, rgba(3,47,76,0.6) 100%)' }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border glow-teal">
            <div className="absolute inset-0 pointer-events-none opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #00ceca 0%, transparent 60%)' }} />
            <div className="relative z-10">
              <p className="section-label mb-2">Ready?</p>
              <h2 className="heading-serif text-3xl md:text-5xl font-bold text-white mb-4">
                Let's Build Something That <span className="text-teal-grad">Works For Your Brand</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                Whether you need a brand identity from scratch or a social media system that actually converts — let's talk.
              </p>
              <Link to="/contact" className="btn-primary text-base">
                Start A Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
