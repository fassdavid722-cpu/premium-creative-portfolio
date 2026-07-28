import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '@/data/portfolio'

export default function Blog() {
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
            Insights
          </motion.div>
          <h1 className="heading-display text-5xl md:text-7xl font-bold mb-6">
            Ideas & <span className="text-gradient-gold">Perspectives</span>
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Thoughts on design, branding, and the business of visual storytelling.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Link to="/blog" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-gold text-sm font-medium">
                {blogPosts[0].category}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-sm text-cream/40 mb-4">
                <span>{blogPosts[0].date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blogPosts[0].readTime} read</span>
              </div>
              <h2 className="heading-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-gold transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-gold font-medium">
                Read Article
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/blog" className="group block">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-gold text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-cream/40 mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="heading-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <section className="py-16">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-purple-500/10" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="heading-display text-3xl md:text-4xl font-bold mb-4">
                Stay In The <span className="text-gradient-gold">Loop</span>
              </h2>
              <p className="text-cream/60 mb-8">Get the latest insights on design, branding, and creative strategy.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-xl bg-ink/50 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40"
                />
                <button className="px-6 py-3 rounded-xl bg-gold text-ink font-semibold hover:bg-gold-light transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
