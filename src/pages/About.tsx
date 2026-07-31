import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TiltCard from '@/components/TiltCard'

const fade3D = {
  initial: { opacity: 0, y: 24, rotateX: -8 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-30px' },
}

const skills = [
  'Brand Identity Design', 'Social Media Content', 'Art Direction', 'Creative Strategy',
  'Campaign Design', 'Typography', 'Event Branding', 'Packaging', 'Print Design', 'Visual Storytelling',
]

const tools = [
  { name: 'Photoshop', color: '#31A8FF' }, { name: 'Illustrator', color: '#FF7C00' },
  { name: 'Figma', color: '#A259FF' }, { name: 'Canva', color: '#00C4CC' },
  { name: 'After Effects', color: '#9999FF' }, { name: 'AI Tools', color: '#00ceca' },
]

const timeline = [
  { year: '2026', role: 'Founder & Creative Director', co: 'Archworks Studio', desc: 'Running a full-service visual design studio — brand identity, social media, and campaign design.' },
  { year: '2024', role: 'Freelance Visual Designer', co: 'Self-employed', desc: 'Grew a client base across multiple industries — beauty, food, tech, fashion, and events.' },
  { year: '2021', role: 'Visual Designer', co: 'Freelance · Anambra, Nigeria', desc: 'Started formally building brands and social media systems for Nigerian businesses.' },
]

export default function About() {
  const portraitRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ['start end', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <main className="pt-32 pb-24">
      <div className="container-arch">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30, rotateX: -8 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformStyle: 'preserve-3d' }}>
            <p className="section-label">About Archworks</p>
            <h1 className="heading-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              I'm Daniels.<br />
              <span className="text-teal-grad">Designer. Medic. Builder.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              I'm Daniels I. Daniels — the founder and creative director of <strong className="text-white">Archworks</strong>. I build visual identities and social media systems that help brands communicate, attract, and convert.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              What makes me different? I have a dual background — <strong className="text-white">design and medicine</strong>. That means I approach branding the way a doctor approaches diagnosis: systematically, analytically, and with the end result in mind.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              My mission is simple: every brand I touch should make people <span style={{ color: '#00ceca' }}>stop, look, and take action</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">Work With Me <ArrowRight size={16} /></Link>
              <a href="https://www.behance.net/ikechukwudaniel" target="_blank" rel="noopener noreferrer" className="btn-outline">
                View Behance
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9, rotateX: 8 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformStyle: 'preserve-3d' }}>
            <TiltCard intensity={6}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 depth-shadow">
                <motion.img ref={portraitRef} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f44?q=80&w=1200"
                  alt="Daniels I. Daniels" className="w-full aspect-[4/5] object-cover" style={{ y: portraitY }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className="absolute -bottom-5 -left-5 grid grid-cols-2 gap-3" style={{ transform: 'translateZ(50px)' }}>
                  <div className="rounded-2xl p-4 border backdrop-blur-xl" style={{ background: 'rgba(3,47,76,0.9)', borderColor: 'rgba(0,206,202,0.2)' }}>
                    <div className="heading-serif text-3xl font-bold text-teal-grad">50+</div>
                    <div className="text-xs text-white/40">Projects</div>
                  </div>
                  <div className="rounded-2xl p-4 border backdrop-blur-xl" style={{ background: 'rgba(3,47,76,0.9)', borderColor: 'rgba(0,206,202,0.2)' }}>
                    <div className="heading-serif text-3xl font-bold text-teal-grad">30+</div>
                    <div className="text-xs text-white/40">Clients</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Philosophy */}
        <section className="py-14 border-y border-white/5 mb-14">
          <motion.div {...fade3D} transition={{ duration: 0.35 }} className="max-w-3xl mx-auto text-center" style={{ transformStyle: 'preserve-3d' }}>
            <p className="section-label">The Philosophy</p>
            <blockquote className="heading-serif text-3xl md:text-4xl font-bold leading-snug">
              "A logo is not a brand. A colour is not a system. Real design is what happens when strategy meets creativity and produces <span className="text-teal-grad">results that matter</span>."
            </blockquote>
            <p className="text-white/40 mt-4">— Daniels I. Daniels, Archworks</p>
          </motion.div>
        </section>

        {/* Skills */}
        <section className="py-10 mb-10">
          <motion.div {...fade3D} transition={{ duration: 0.3 }}>
            <p className="section-label text-center">Capabilities</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Skills & Expertise</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-white/60 hover:border-teal/30 hover:text-white hover:scale-105 transition-all cursor-default">
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="py-10 mb-10">
          <motion.div {...fade3D} transition={{ duration: 0.3 }}>
            <p className="section-label text-center">Toolkit</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Tools I Use</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {tools.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 25, rotateX: -10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.25, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={12} className="h-full">
                  <div className="card-arch p-5 text-center group hover:border-teal/20 h-full">
                    <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-sm font-bold"
                      style={{ background: `${t.color}22`, color: t.color, transform: 'translateZ(25px)' }}>
                      {t.name.slice(0, 2)}
                    </div>
                    <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors" style={{ transform: 'translateZ(15px)' }}>{t.name}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-10">
          <motion.div {...fade3D} transition={{ duration: 0.3 }}>
            <p className="section-label text-center">Journey</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Experience</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-5">
            {timeline.map((e, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -25, rotateX: -8 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transformStyle: 'preserve-3d' }}>
                <TiltCard intensity={4}>
                  <div className="card-arch p-6 flex gap-5 hover:border-teal/20 depth-shadow">
                    <div className="heading-serif text-xl font-bold text-teal-grad min-w-[52px]" style={{ transform: 'translateZ(20px)' }}>{e.year}</div>
                    <div style={{ transform: 'translateZ(15px)' }}>
                      <p className="font-semibold text-white">{e.role}</p>
                      <p className="text-sm mb-1" style={{ color: '#00ceca' }}>{e.co}</p>
                      <p className="text-white/45 text-sm">{e.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'rgba(0,206,202,0.05)' }}
            className="mt-12 relative overflow-hidden rounded-3xl p-10 text-center border glow-teal">
          <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-3">Sounds like the right fit?</h2>
          <p className="text-white/50 mb-6">Let's talk about what your brand needs.</p>
          <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
        </motion.div>
      </div>
    </main>
  )
}
