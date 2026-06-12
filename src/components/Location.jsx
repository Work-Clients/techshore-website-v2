import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { Navigation, Phone, Mail, MapPin } from 'lucide-react'
import { ADDRESS, DIRECTIONS_URL, PHONE, MAP_EMBED_URL } from '../data/images'
import { fadeLeft, fadeRight } from '../lib/motion'

export default function Location() {
  return (
    <AnimatedSection id="location" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Location</span>
          <h2 className="section-title mt-2">Find Us</h2>
          <p className="section-subtitle mx-auto">
            Conveniently located in Kukatpally with easy access to metro, bus routes, and LuLu Mall.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 mt-16">
          <FadeIn variants={fadeLeft} className="lg:col-span-2 space-y-6">
            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-100 text-royal shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg">Address</h3>
                  <p className="mt-2 text-navy/70 leading-relaxed">
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

            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-100 text-royal shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg">Contact</h3>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="mt-2 block text-royal font-medium hover:underline">
                    {PHONE}
                  </a>
                  <a href="mailto:info@techshore.in" className="mt-1 flex items-center gap-2 text-navy/70 hover:text-royal transition-colors duration-200">
                    <Mail size={16} />
                    info@techshore.in
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

          <FadeIn variants={fadeRight} className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto min-h-[400px]">
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
