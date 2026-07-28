import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/portfolio'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Blog() {
  return (
    <main className="pt-32 pb-24 noise-overlay">
      <div className="container-arch relative z-10">
        <div className="text-center mb-16">
          <p className="section-label">Insights</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Design. Brand. <span className="text-accent-grad">Strategy.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Thoughts on visual identity, social media, and what it actually takes to build a brand that works.
          </p>
        </div>

        {/* Featured */}
        <motion.div {...fadeUp} className="mb-12">
          <Link to="#" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center card-arch overflow-hidden p-0 gradient-border">
            <div className="relative overflow-hidden">
              <img src={blogPosts[0].image} alt={blogPosts[0].title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(197,247,79,0.15)', color: '#c5f74f' }}>
                {blogPosts[0].category}
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 text-xs text-white/35 mb-4">
                <span>{blogPosts[0].date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {blogPosts[0].readTime} read</span>
              </div>
              <h2 className="heading-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-lime transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#c5f74f' }}>
                Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div key={post.id} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <Link to="#" className="group block card-arch overflow-hidden gradient-border">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(197,247,79,0.15)', color: '#c5f74f' }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-white/35 mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <h3 className="heading-serif text-lg font-bold mb-2 group-hover:text-lime transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-panel p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 animate-blob pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c5f74f 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="heading-serif text-3xl font-bold mb-3">Stay in the loop</h2>
            <p className="text-white/50 mb-7 max-w-md mx-auto">Get brand & design tips direct to your inbox. No spam, just useful stuff.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input type="email" placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none border transition-all duration-300"
                style={{ background: 'rgba(18,18,26,0.8)', borderColor: 'rgba(255,255,255,0.08)' }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,247,79,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
              <button className="btn-primary text-sm py-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
