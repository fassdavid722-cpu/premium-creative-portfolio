import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Briefcase, Star } from 'lucide-react'

const skills = [
  'Brand Identity Design', 'Social Media Design', 'Art Direction', 'Creative Strategy',
  'Motion Graphics', 'UI/UX Design', 'Typography', 'Visual Storytelling',
  'Content Strategy', 'Campaign Design', 'Packaging Design', 'Print Design',
]

const tools = ['Photoshop', 'Illustrator', 'Figma', 'Canva', 'After Effects', 'AI Tools']
const toolsColors = ['from-blue-600 to-cyan-500', 'from-orange-600 to-amber-500', 'from-purple-600 to-pink-500', 'from-cyan-500 to-teal-400', 'from-purple-700 to-indigo-500', 'from-emerald-500 to-green-400']

const experience = [
  { year: '2025', role: 'Creative Director', company: 'Aether Studio', desc: 'Leading creative direction for premium brands worldwide.' },
  { year: '2022', role: 'Senior Designer', company: 'Apex Creative Agency', desc: 'Managed social media design for 30+ enterprise clients.' },
  { year: '2019', role: 'Visual Designer', company: 'Studio Forma', desc: 'Specialized in brand identity and digital campaign design.' },
  { year: '2017', role: 'Junior Designer', company: 'Pixel Lab', desc: 'Started the journey in social media and content design.' },
]

export default function About() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-lux">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">About Me</div>
            <h1 className="heading-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Behind every design is a <span className="text-gradient-gold">strategy</span>
            </h1>
            <p className="text-lg text-cream/60 leading-relaxed mb-6">
              I combine creativity, communication, and technology to help brands build meaningful connections. With over 8 years of experience in social media design and brand identity, I've helped 250+ businesses transform their visual presence into a strategic asset.
            </p>
            <p className="text-lg text-cream/60 leading-relaxed mb-8">
              My approach is simple: understand the business goal first, then create visuals that serve it. Every color, every font, every composition has a purpose — to make your brand impossible to ignore.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-ink font-semibold hover:bg-gold-light transition-all hover:shadow-2xl hover:shadow-gold/30"
            >
              Work With Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f44?q=80&w=1200"
                alt="Portrait"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-4">
              <div className="bg-ink-card border border-gold/20 rounded-2xl p-4 backdrop-blur-xl">
                <div className="heading-display text-3xl font-bold text-gradient-gold">250+</div>
                <div className="text-xs text-cream/40">Projects</div>
              </div>
              <div className="bg-ink-card border border-gold/20 rounded-2xl p-4 backdrop-blur-xl">
                <div className="heading-display text-3xl font-bold text-gradient-gold">8+</div>
                <div className="text-xs text-cream/40">Years</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Capabilities</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">Skills & <span className="text-gradient-gold">Expertise</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-white/10 text-cream/70 hover:border-gold/30 hover:text-gold hover:bg-gold/5 transition-all text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Toolkit</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">Tools I <span className="text-gradient-gold">Use</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-all text-center overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${toolsColors[i]} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10 font-semibold text-cream group-hover:text-gold transition-colors">{tool}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="text-sm text-gold font-medium uppercase tracking-wider mb-3">Journey</div>
            <h2 className="heading-display text-3xl md:text-5xl font-bold">Professional <span className="text-gradient-gold">Experience</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-all"
              >
                <div className="text-2xl font-bold text-gradient-gold heading-display min-w-[60px]">{exp.year}</div>
                <div>
                  <h3 className="text-lg font-semibold text-cream">{exp.role}</h3>
                  <p className="text-gold text-sm mb-2">{exp.company}</p>
                  <p className="text-cream/50 text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
