import { MapPin, Phone } from 'lucide-react'
import { LOGO, NAV_LINKS, ADDRESS, PHONE, WHATSAPP_URL } from '../data/images'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <img src={LOGO} alt="Techshore Coworking Space" className="h-12 w-12 object-contain" width={48} height={48} />
              <span className="font-display font-bold text-xl">Techshore</span>
            </a>
            <p className="mt-4 text-white/55 text-sm leading-relaxed">
              Premium coworking spaces in Kukatpally, designed for modern professionals and growing businesses.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Address</h3>
            <div className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
              <span className="icon-badge icon-badge-sm shrink-0 mt-0.5">
                <MapPin size={16} />
              </span>
              <address className="not-italic">
                {ADDRESS.name}
                <br />
                {ADDRESS.lines.join(', ')}
              </address>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-white/55 hover:text-accent-gold transition-colors text-sm"
            >
              <span className="icon-badge icon-badge-sm shrink-0">
                <Phone size={16} />
              </span>
              {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-accent-gold hover:text-white transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/35 text-sm">
          © {currentYear} Techshore Coworking Space. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
