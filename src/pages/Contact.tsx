import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, Instagram, Twitter, Linkedin } from 'lucide-react'

const projectTypes = ['Social Media Design', 'Brand Identity', 'Content Strategy', 'Digital Campaign', 'Other']
const budgets = ['< $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+', 'Not Sure Yet']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', business: '', projectType: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', business: '', projectType: '', budget: '', message: '' })
  }

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }))

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
            Contact
          </motion.div>
          <h1 className="heading-display text-5xl md:text-7xl font-bold mb-6">
            Let's Build Something <span className="text-gradient-gold">Remarkable</span>
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Tell me about your project and let's create something that makes your brand impossible to ignore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gold font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gold font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gold font-medium mb-2">Business / Brand</label>
                <input
                  type="text"
                  value={form.business}
                  onChange={e => update('business', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gold font-medium mb-2">Project Type *</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={e => update('projectType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream focus:outline-none focus:border-gold/40 transition-colors"
                  >
                    <option value="" className="bg-ink">Select a type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-ink">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gold font-medium mb-2">Budget *</label>
                  <select
                    required
                    value={form.budget}
                    onChange={e => update('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream focus:outline-none focus:border-gold/40 transition-colors"
                  >
                    <option value="" className="bg-ink">Select a range</option>
                    {budgets.map(b => (
                      <option key={b} value={b} className="bg-ink">{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gold font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink-card/50 border border-white/10 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-ink font-semibold text-lg hover:bg-gold-light transition-all hover:shadow-2xl hover:shadow-gold/30"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gold text-sm"
                >
                  Thank you! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-ink-card/30">
              <h3 className="heading-display text-xl font-semibold mb-4">Other Ways To Connect</h3>
              <div className="space-y-4">
                <a href="https://wa.me/15551234567" className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <MessageCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">WhatsApp</div>
                    <div className="text-xs text-cream/40">+1 (555) 123-4567</div>
                  </div>
                </a>
                <a href="mailto:hello@aetherstudio.com" className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-cream/40">hello@aetherstudio.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-ink-card/30">
              <h3 className="heading-display text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gold/20 bg-gold/5">
              <h3 className="heading-display text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-cream/50 text-sm">I respond to all inquiries within 24 hours. Let's make something great together.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
