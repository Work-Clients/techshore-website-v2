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
    <AnimatedSection id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn seed="about-header" className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">About Us</span>
          <h2 className="section-title mt-2">Why Choose Techshore?</h2>
        </FadeIn>

        <FadeIn seed="about-image" className="mt-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ABOUT_IMAGE}
              alt="Techshore reception area with branding"
              className="w-full h-auto block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/20 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        <FadeIn seed="about-text" className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-body text-lg leading-relaxed">
            Techshore Coworking Space offers modern and productive work environments with excellent connectivity, premium amenities, and flexible workspace options tailored to professionals, startups, and businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
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
                <div className="inline-flex p-3 rounded-2xl bg-primary-50 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <Icon size={24} />
                </div>
                <div className="font-display text-3xl font-bold text-heading">
                  {stat.value}
                  <span className="text-primary ps-1">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-body/80 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
