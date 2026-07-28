import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(0,206,202,0.08)', background: '#0f1626' }}>
      <div className="container-arch py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-ink text-lg" style={{ background: '#00ceca' }}>A</div>
              <span className="text-xl font-bold text-ink">Archworks<span style={{ color: '#00ceca' }}>.</span></span>
            </Link>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm mb-6">
              Creative design studio by Daniels I. Daniels. I design to make you SPEAK · STAY · SELL.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:hello@archworks.studio' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(0,206,202,0.08)', color: '#00ceca' }}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/portfolio', label: 'Work' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-ink-muted hover:text-ink transition-colors flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2.5">
              {['Brand Identity', 'Social Media Design', 'Campaign Visuals', 'Event Branding', 'Prints & Merch'].map(s => (
                <span key={s} className="text-sm text-ink-muted">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(0,206,202,0.06)' }}>
          <p className="text-xs text-ink-faint">© 2026 Archworks. Designed by Daniels I. Daniels.</p>
          <p className="text-xs text-ink-faint">SPEAK · STAY · SELL</p>
        </div>
      </div>
    </footer>
  )
}
