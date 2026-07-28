import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, Dribbble, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink dark:bg-ink border-t border-white/5 pt-20 pb-8">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="heading-display text-3xl font-bold">
                Aether<span className="text-gradient-gold">.</span>
              </span>
            </Link>
            <p className="text-cream/50 max-w-md leading-relaxed mb-6">
              Transforming ideas into visual experiences that build brands. A premium creative studio for social media design, brand identity, and digital experiences.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Dribbble, Mail].map((Icon, i) => (
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

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/blog', label: 'Insights' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/50 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="text-cream/50 text-sm">hello@aetherstudio.com</li>
              <li className="text-cream/50 text-sm">+1 (555) 123-4567</li>
              <li>
                <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gold text-ink font-semibold text-sm hover:bg-gold-light transition-all">
                  Start A Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm">
            © 2025 Aether Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream/30 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
