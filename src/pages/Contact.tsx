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
    <main className="pt-32 pb-24">
      <div className="container-arch">
        <div className="text-center mb-14">
          <p className="section-label">Contact</p>
          <h1 className="heading-serif text-5xl md:text-6xl font-bold mb-4">
            Let's Build Something <span className="text-teal-grad">Solid</span>
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
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-colors"
                    style={{ background: 'rgba(4,57,92,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,206,202,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Email *</label>
                  <input type="email" required value={form.email} onChange={e => up('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-colors"
                    style={{ background: 'rgba(4,57,92,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,206,202,0.4)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Instagram Handle</label>
                <input type="text" value={form.instagram} onChange={e => up('instagram', e.target.value)}
                  placeholder="@yourbrand"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-colors"
                  style={{ background: 'rgba(4,57,92,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,206,202,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Service Needed *</label>
                  <select required value={form.service} onChange={e => up('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none border"
                    style={{ background: 'rgba(4,57,92,0.7)', borderColor: 'rgba(255,255,255,0.08)', color: form.service ? 'white' : 'rgba(255,255,255,0.3)' }}>
                    <option value="" className="bg-navy">Select a service</option>
                    {projectTypes.map(t => <option key={t} value={t} className="bg-navy">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Budget *</label>
                  <select required value={form.budget} onChange={e => up('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none border"
                    style={{ background: 'rgba(4,57,92,0.7)', borderColor: 'rgba(255,255,255,0.08)', color: form.budget ? 'white' : 'rgba(255,255,255,0.3)' }}>
                    <option value="" className="bg-navy">Select a range</option>
                    {budgets.map(b => <option key={b} value={b} className="bg-navy">{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">Brief Description of Project *</label>
                <textarea required rows={5} value={form.message} onChange={e => up('message', e.target.value)}
                  placeholder="Tell me what you're building, your goals, and any deadlines..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none border transition-colors resize-none"
                  style={{ background: 'rgba(4,57,92,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,206,202,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>

              <button type="submit"
                className="btn-primary text-base w-full sm:w-auto">
                {sent ? '✓ Message Sent!' : 'Send Message'}
                <Send size={18} />
              </button>
              {sent && <p className="text-sm" style={{ color: '#00ceca' }}>Thanks! I'll be in touch within 24 hours.</p>}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* WhatsApp */}
            <a href="https://wa.me/2348000000000?text=Hi%20Daniels%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Archworks"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border hover:border-teal/30 transition-all group"
              style={{ background: 'rgba(37,211,102,0.08)', borderColor: 'rgba(37,211,102,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.15)' }}>
                <MessageCircle size={22} style={{ color: '#25d366' }} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">WhatsApp</p>
                <p className="text-xs text-white/40">Message directly</p>
              </div>
              <ExternalLink size={14} className="ml-auto text-white/20 group-hover:text-white/50 transition-colors" />
            </a>

            {/* Email */}
            <a href="mailto:archdaniels101@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl border hover:border-teal/30 transition-all group"
              style={{ background: 'rgba(0,206,202,0.05)', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,206,202,0.1)' }}>
                <Mail size={22} style={{ color: '#00ceca' }} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Email</p>
                <p className="text-xs text-white/40">archdaniels101@gmail.com</p>
              </div>
            </a>

            {/* Social */}
            <div className="card-arch p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Follow Archworks</p>
              <div className="space-y-3">
                {socials.map(({ Icon, label, href, note }) => (
                  <a key={note} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-teal/30 transition-colors"
                      style={{ background: 'rgba(4,57,92,0.6)' }}>
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/70">{note}</p>
                      <p className="text-xs text-white/30">{label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-arch p-5 border-teal/20" style={{ borderColor: 'rgba(0,206,202,0.15)' }}>
              <p className="font-semibold text-white text-sm mb-1">⚡ Fast Response</p>
              <p className="text-white/40 text-xs">I reply to all messages within 24 hours — usually much faster.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
