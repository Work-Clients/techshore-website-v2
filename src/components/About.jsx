import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Wifi, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { ABOUT_IMAGE } from '../data/images'
import { getRevealVariant, VIEWPORT } from '../lib/motion'

const stats = [
  { icon: Clock, label: 'Access', value: '24', suffix: '/ 7' },
  { icon: Wifi, label: 'High-Speed WiFi', value: '1', suffix: 'Gbps' },
  { icon: MapPin, label: 'Prime Kukatpally Location', value: '500m', suffix: 'to Metro' },
]

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="about-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title mt-3">Why Choose Techshore?</h2>
        </FadeIn>

        <FadeIn seed="about-image" className="mt-12 sm:mt-16">
          <div className="relative rounded-4xl overflow-hidden shadow-premium">
            <img
              src={ABOUT_IMAGE}
              alt="Techshore reception area with branding"
              className="w-full h-auto block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent pointer-events-none" aria-hidden="true" />
          </div>
        </FadeIn>

        <FadeIn seed="about-text" className="mt-10 sm:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted text-lg leading-relaxed">
            Techshore Coworking Space offers modern and productive work environments with excellent connectivity, premium amenities, and flexible workspace options tailored to professionals, startups, and businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="card-base p-6 text-center group"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getRevealVariant(index + 2)}
              >
                <div className="inline-flex p-3 rounded-2xl bg-accent-gold/15 text-accent-gold mb-4 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <div className="font-display text-3xl font-bold text-text-main">
                  {stat.value}
                  <span className="text-accent-gold ps-1">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
