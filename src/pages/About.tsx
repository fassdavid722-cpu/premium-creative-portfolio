import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const skills = [
  'Brand Identity Design', 'Social Media Content', 'Art Direction', 'Creative Strategy',
  'Campaign Design', 'Typography', 'Event Branding', 'Packaging', 'Print Design', 'Visual Storytelling',
]

const tools = [
  { name: 'Photoshop', color: '#31A8FF' },
  { name: 'Illustrator', color: '#FF7C00' },
  { name: 'Figma', color: '#A259FF' },
  { name: 'Canva', color: '#00C4CC' },
  { name: 'After Effects', color: '#9999FF' },
  { name: 'AI Tools', color: '#00ceca' },
]

const timeline = [
  { year: '2026', role: 'Founder & Creative Director', co: 'Archworks Studio', desc: 'Running a full-service visual design studio — brand identity, social media, and campaign design.' },
  { year: '2024', role: 'Freelance Visual Designer', co: 'Self-employed', desc: 'Grew a client base across multiple industries — beauty, food, tech, fashion, and events.' },
  { year: '2021', role: 'Visual Designer', co: 'Freelance · Anambra, Nigeria', desc: 'Started formally building brands and social media systems for Nigerian businesses.' },
]

export default function About() {
  return (
    <main className="pt-32 pb-24 noise-overlay">
      <div className="container-arch relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
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

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f44?q=80&w=1200"
                alt="Daniels I. Daniels" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-4 border backdrop-blur-xl" style={{ background: 'rgba(2,30,49,0.9)', borderColor: 'rgba(0,206,202,0.2)' }}>
                <div className="heading-serif text-3xl font-bold text-teal-grad">50+</div>
                <div className="text-xs text-white/40">Projects</div>
              </div>
              <div className="rounded-2xl p-4 border backdrop-blur-xl" style={{ background: 'rgba(2,30,49,0.9)', borderColor: 'rgba(0,206,202,0.2)' }}>
                <div className="heading-serif text-3xl font-bold text-teal-grad">30+</div>
                <div className="text-xs text-white/40">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <section className="py-16 border-y border-white/5 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">The Philosophy</p>
            <blockquote className="heading-serif text-3xl md:text-4xl font-bold leading-snug">
              "A logo is not a brand. A colour is not a system. Real design is what happens when strategy meets creativity and produces <span className="text-teal-grad">results that matter</span>."
            </blockquote>
            <p className="text-white/40 mt-4">— Daniels I. Daniels, Archworks</p>
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 mb-12">
          <p className="section-label text-center">Capabilities</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <motion.span key={i} {...fadeUp} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-white/60 hover:border-teal/30 hover:text-teal transition-all duration-300 cursor-default">
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="py-12 mb-12">
          <p className="section-label text-center">Toolkit</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Tools I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {tools.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                className="card-arch p-5 text-center group">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-sm font-bold"
                  style={{ background: `${t.color}22`, color: t.color }}>
                  {t.name.slice(0, 2)}
                </div>
                <p className="text-sm font-medium text-white/70 group-hover:text-teal transition-colors">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-12">
          <p className="section-label text-center">Journey</p>
          <h2 className="heading-serif text-3xl md:text-4xl font-bold text-center mb-8">Experience</h2>
          <div className="max-w-2xl mx-auto space-y-5">
            {timeline.map((e, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.12 }}
                className="card-arch p-6 flex gap-5 gradient-border">
                <div className="heading-serif text-xl font-bold text-teal-grad min-w-[52px]">{e.year}</div>
                <div>
                  <p className="font-semibold text-white">{e.role}</p>
                  <p className="text-sm mb-1" style={{ color: '#00ceca' }}>{e.co}</p>
                  <p className="text-white/45 text-sm">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 glass-panel p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00ceca 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-3">Sounds like the right fit?</h2>
            <p className="text-white/50 mb-6">Let's talk about what your brand needs.</p>
            <Link to="/contact" className="btn-primary">Start A Project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
