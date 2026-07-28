import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, Facebook, Mail, ArrowRight } from 'lucide-react'

const socials = [
  { Icon: Instagram, href: 'https://www.instagram.com/the_archworks', label: 'Instagram' },
  { Icon: Twitter, href: 'https://x.com/A_Archworks2013', label: 'Twitter/X' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/daniels-i-daniels-285578220', label: 'LinkedIn' },
  { Icon: Facebook, href: 'https://www.facebook.com/share/17t8ojuqZF/', label: 'Facebook' },
  { Icon: Mail, href: 'mailto:archdaniels101@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t" style={{ background: '#021e31', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="container-arch">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-navy text-lg" style={{ background: '#00ceca' }}>A</div>
              <span className="text-xl font-bold text-white">Archworks<span style={{ color: '#00ceca' }}>.</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              I design to make you <span style={{ color: '#00ceca' }}>SPEAK</span> · <span style={{ color: '#00ceca' }}>STAY</span> · <span style={{ color: '#00ceca' }}>SELL</span>
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-teal/40 transition-all"
                  style={{ '--hover-color': '#00ceca' } as any}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#00ceca' }}>Navigate</h4>
            <ul className="space-y-2.5">
              {[{ to: '/', l: 'Home' }, { to: '/portfolio', l: 'Work' }, { to: '/services', l: 'Services' }, { to: '/about', l: 'About' }, { to: '/blog', l: 'Insights' }].map(x => (
                <li key={x.to}><Link to={x.to} className="text-white/40 hover:text-white text-sm transition-colors">{x.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#00ceca' }}>Let's Work</h4>
            <div className="space-y-2 mb-5">
              <p className="text-white/40 text-sm">archdaniels101@gmail.com</p>
              <a href="https://wa.me/2348000000000" className="text-white/40 text-sm hover:text-white transition-colors">WhatsApp</a>
            </div>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5 gap-1.5">
              Start A Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2026 Archworks · Daniels I. Daniels · All rights reserved</p>
          <p className="text-white/20 text-xs">Brand Identity · Social Media Design · Anambra, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
