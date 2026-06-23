import { motion, useReducedMotion } from 'framer-motion'
import { Rocket, Laptop, Users, Palette } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { ABOUT_IMAGE } from '../data/images'
import { getRevealVariant, VIEWPORT } from '../lib/motion'

const audiences = [
  {
    icon: Rocket,
    title: 'For Startups and Entrepreneurs',
    description:
      'Scale without heavy overhead — flexible plans, a collaborative atmosphere, and the infrastructure early-stage teams need to move fast.',
  },
  {
    icon: Laptop,
    title: 'For Remote Employees and Professionals',
    description:
      'Leave the home desk behind for a professional setting with reliable WiFi, fewer distractions, and a routine that keeps you focused.',
  },
  {
    icon: Users,
    title: 'For Small Businesses and Teams',
    description:
      'Private cabins and meeting rooms give your team a dedicated base to collaborate, host clients, and work with clarity.',
  },
  {
    icon: Palette,
    title: 'For Digital Creators and Designers',
    description:
      'A calm, well-lit space with the connectivity and privacy to create, edit, and deliver — without working in isolation.',
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mt-12 sm:mt-14 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.article
                key={audience.title}
                className="audience-card group"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getRevealVariant(index + 2)}
              >
                <div className="inline-flex p-3.5 rounded-2xl bg-accent-gold/15 text-accent-gold mb-5 transition-colors duration-300 group-hover:bg-accent-gold group-hover:text-primary-navy">
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-main tracking-tight leading-snug">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                  {audience.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
