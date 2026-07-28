import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, Instagram, Twitter, Linkedin, Facebook, ExternalLink } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const projectTypes = ['Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Event Branding', 'Prints & Merch', 'Marketing Assets', 'Not Sure Yet']
const budgets = ['Under ₦50,000', '₦50,000 – ₦100,000', '₦100,000 – ₦250,000', '₦250,000+', "I'm flexible"]

const socials = [
  { Icon: Instagram, label: '@the_archworks', href: 'https://www.instagram.com/the_archworks', note: 'Instagram' },
  { Icon: Twitter, label: '@A_Archworks2013', href: 'https://x.com/A_Archworks2013', note: 'Twitter/X' },
  { Icon: Linkedin, label: 'Daniels I. Daniels', href: 'https://www.linkedin.com/in/daniels-i-daniels-285578220', note: 'LinkedIn' },
  { Icon: Facebook, label: 'Archworks', href: 'https://www.facebook.com/share/17t8ojuqZF/', note: 'Facebook' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', instagram: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const up = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', instagram: '', service: '', budget: '', message: '' })
  }

  return (
    <main className="pt-32 pb-24 noise-overlay">
      <div className="container-arch relative z-10">
        <div className="text-center mb-14">
          <p className="section-label">Contact</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Let's Build Something <span className="text-accent-grad">Solid</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <p className="text-white/50 mb-6 text-base">
              Let's build something solid — tell us about your project.
            </p>
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Name *</label>
                  <input type="text" required value={form.name} onChange={e => up('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-all duration-300"
                    style={{ background: 'rgba(18,18,26,0.6)', borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,247,79,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Email *</label>
                  <input type="email" required value={form.email} onChange={e => up('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-all duration-300"
                    style={{ background: 'rgba(18,18,26,0.6)', borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,247,79,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Instagram Handle</label>
                <input type="text" value={form.instagram} onChange={e => up('instagram', e.target.value)}
                  placeholder="@yourbrand"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-all duration-300"
                  style={{ background: 'rgba(18,18,26,0.6)', borderColor: 'rgba(255,255,255,0.08)' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,247,79,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Service Needed *</label>
                  <select required value={form.service} onChange={e => up('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none border transition-all duration-300"
                    style={{ background: 'rgba(18,18,26,0.8)', borderColor: 'rgba(255,255,255,0.08)', color: form.service ? 'white' : 'rgba(255,255,255,0.3)' }}>
                    <option value="" className="bg-ink-card">Select a service</option>
                    {projectTypes.map(t => <option key={t} value={t} className="bg-ink-card">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Budget *</label>
                  <select required value={form.budget} onChange={e => up('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none border transition-all duration-300"
                    style={{ background: 'rgba(18,18,26,0.8)', borderColor: 'rgba(255,255,255,0.08)', color: form.budget ? 'white' : 'rgba(255,255,255,0.3)' }}>
                    <option value="" className="bg-ink-card">Select a budget</option>
                    {budgets.map(b => <option key={b} value={b} className="bg-ink-card">{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Project Details *</label>
                <textarea required value={form.message} onChange={e => up('message', e.target.value)}
                  placeholder="Tell me about your brand, what you need, and your timeline..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-all duration-300 resize-none"
                  style={{ background: 'rgba(18,18,26,0.6)', borderColor: 'rgba(255,255,255,0.08)' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,247,79,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                {sent ? 'Message Sent! ✓' : 'Send Message'} <Send size={16} />
              </button>
              {sent && (
                <p className="text-center text-sm" style={{ color: '#c5f74f' }}>
                  Thanks! I'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card-arch p-6 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(197,247,79,0.1)' }}>
                  <Mail size={18} style={{ color: '#c5f74f' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                  <a href="mailto:archdaniels101@gmail.com" className="text-sm text-white hover:text-lime transition-colors">archdaniels101@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(197,247,79,0.1)' }}>
                  <MessageCircle size={18} style={{ color: '#c5f74f' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">WhatsApp</p>
                  <a href="https://wa.me/2348000000000" className="text-sm text-white hover:text-lime transition-colors">Chat on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="card-arch p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Find Me On</p>
              <div className="space-y-3">
                {socials.map(({ Icon, label, href, note }) => (
                  <a key={note} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-lime transition-colors group">
                    <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-lime/30 group-hover:bg-lime/5 transition-all">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm">{label}</p>
                      <p className="text-xs text-white/30">{note}</p>
                    </div>
                    <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-arch p-6 text-center gradient-border">
              <p className="text-sm text-white/50 mb-2">Response Time</p>
              <p className="heading-serif text-3xl font-bold text-accent-grad">24hrs</p>
              <p className="text-xs text-white/30 mt-1">Average reply time</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
