import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/portfolio'
import TiltCard from '@/components/TiltCard'

const fade3D = {
  initial: { opacity: 0, y: 24, rotateX: -8 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, margin: '-30px' },
}

export default function Blog() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-arch">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16" style={{ transformStyle: 'preserve-3d' }}>
          <p className="section-label">Insights</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Design. Brand. <span className="text-teal-grad">Strategy.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Thoughts on visual identity, social media, and what it actually takes to build a brand that works.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="mb-12">
          <TiltCard intensity={4}>
            <Link to="#" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center card-arch overflow-hidden p-0 hover:border-teal/20 depth-shadow">
              <div className="relative overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-400" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(0,206,202,0.2)', color: '#00ceca' }}>
                  {blogPosts[0].category}
                </span>
              </div>
              <div className="p-8" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-center gap-3 text-xs text-white/35 mb-4">
                  <span>{blogPosts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {blogPosts[0].readTime} read</span>
                </div>
                <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-teal transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#00ceca' }}>
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </TiltCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div key={post.id}
              initial={{ opacity: 0, y: 30, rotateX: -12, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ transformStyle: 'preserve-3d' }}>
              <TiltCard intensity={8} className="h-full">
                <Link to="#" className="group block card-arch overflow-hidden hover:border-teal/20 depth-shadow h-full">
                  <div className="relative overflow-hidden">
                    <img src={post.image} alt={post.title}
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-400" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(0,206,202,0.2)', color: '#00ceca' }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5" style={{ transform: 'translateZ(15px)' }}>
                    <div className="flex items-center gap-3 text-xs text-white/35 mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h3 className="heading-serif text-lg font-bold mb-2 group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotateX: -8, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformStyle: 'preserve-3d', borderColor: 'rgba(0,206,202,0.2)', background: 'rgba(0,206,202,0.05)' }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center border glow-teal">
          <h2 className="heading-serif text-3xl font-bold mb-3">Stay in the loop</h2>
          <p className="text-white/50 mb-7 max-w-md mx-auto">Get brand & design tips direct to your inbox. No spam, just useful stuff.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none border"
              style={{ background: 'rgba(3,47,76,0.8)', borderColor: 'rgba(255,255,255,0.1)' }} />
            <button className="btn-primary text-sm py-3">Subscribe</button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
