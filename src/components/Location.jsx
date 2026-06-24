import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { Navigation, Phone, Mail, MapPin } from 'lucide-react'
import { ADDRESS, DIRECTIONS_URL, PHONE, MAP_EMBED_URL } from '../data/images'
import { cardThemeAt, themedCardClasses } from '../lib/brandColors'
import { fadeLeft, fadeRight } from '../lib/motion'

export default function Location() {
  const addressTheme = cardThemeAt(0)
  const contactTheme = cardThemeAt(1)
  const mapTheme = cardThemeAt(2)
  return (
    <AnimatedSection id="location" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="location-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Location</span>
          <h2 className="section-title mt-3">Find Us</h2>
          <p className="section-subtitle mx-auto">
            Conveniently located in Kukatpally with easy access to metro, bus routes, and LuLu Mall.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 mt-16 sm:mt-20">
          <FadeIn variants={fadeLeft} className="lg:col-span-2 space-y-5">
            <div className={`p-6 ${themedCardClasses(addressTheme, { rounded: 'rounded-3xl' })}`}>
              <div className="flex items-start gap-4">
                <div className={`inline-flex items-center justify-center shrink-0 p-3 rounded-xl ${addressTheme.iconBadge}`}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-main text-lg">Address</h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    <strong>{ADDRESS.name}</strong>
                    <br />
                    {ADDRESS.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 ${themedCardClasses(contactTheme, { rounded: 'rounded-3xl' })}`}>
              <div className="flex items-start gap-4">
                <div className={`inline-flex items-center justify-center shrink-0 p-3 rounded-xl ${contactTheme.iconBadge}`}>
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-main text-lg">Contact</h3>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="mt-2 block text-text-main font-medium hover:text-accent-gold transition-colors">
                    {PHONE}
                  </a>
                  <a href="mailto:contact@techshorecoworking.com" className="mt-1 flex items-center gap-2.5 text-muted hover:text-primary-navy transition-colors duration-200">
                    <span className={`inline-flex items-center justify-center shrink-0 p-1.5 rounded-lg ${contactTheme.iconBadge}`}>
                      <Mail size={14} />
                    </span>
                    contact@techshorecoworking.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </FadeIn>

          <FadeIn variants={fadeRight} className={`lg:col-span-3 rounded-3xl overflow-hidden shadow-premium border ${mapTheme.border} h-[280px] sm:h-[360px] lg:h-auto min-h-[280px] sm:min-h-[360px] lg:min-h-[400px]`}>
            <iframe
              title="Techshore Coworking Space location on Google Maps"
              src={MAP_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
