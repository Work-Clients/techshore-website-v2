import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, CalendarCheck, MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '../data/images'
import {
  heroStaggerContainer,
  heroHeadlineContainer,
  heroWordReveal,
  heroAccentLine,
  heroSubheadlineReveal,
  heroLocationReveal,
  heroCtaContainer,
  heroCtaButtonReveal,
} from '../lib/motion'
import MagneticLink from './MagneticLink'

const HEADLINE_LINES = [
  ['Techshore'],
  ['Coworking', 'Space'],
]

function HeroHeadlineWord({ word }) {
  return (
    <span className="hero-headline-word">
      <motion.span variants={heroWordReveal} className="hero-headline-inner">
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 min-w-0 min-h-[100dvh] min-h-screen flex items-center overflow-hidden bg-[#0a1630]"
    >
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-36 sm:pb-28 text-center"
        variants={heroStaggerContainer}
        initial={prefersReducedMotion ? false : 'hidden'}
        animate={prefersReducedMotion ? undefined : 'visible'}
      >
        <motion.h1 variants={heroHeadlineContainer} className="hero-headline">
          {HEADLINE_LINES.map((line, lineIndex) => (
            <span key={lineIndex} className="hero-headline-line">
              {line.map((word) => (
                <HeroHeadlineWord key={word} word={word} />
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={heroAccentLine}
          className="mx-auto mt-5 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-accent-gold to-accent-gold/30 sm:origin-center"
          aria-hidden="true"
        />

        <motion.p variants={heroSubheadlineReveal} className="hero-subheadline mt-6 sm:mt-8">
          Premium Workspaces for Modern Professionals
        </motion.p>

        <motion.p variants={heroLocationReveal} className="hero-location mt-5 sm:mt-6">
          <MapPin size={16} className="shrink-0 text-white/50" aria-hidden="true" />
          At JNTU Metro, Kukatpally, Hyderabad
        </motion.p>

        <motion.div
          variants={heroCtaContainer}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.div variants={heroCtaButtonReveal} className="w-full sm:w-auto">
            <MagneticLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full sm:w-auto"
              strength={0.25}
            >
              <CalendarCheck size={18} />
              Book Workspace
            </MagneticLink>
          </motion.div>
          <motion.div variants={heroCtaButtonReveal} className="w-full sm:w-auto">
            <MagneticLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-outline w-full sm:w-auto"
              strength={0.25}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </MagneticLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
