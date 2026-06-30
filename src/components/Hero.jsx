import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, CalendarCheck, MapPin } from 'lucide-react'
import { LOGO, BOOK_NOW_URL, WHATSAPP_URL } from '../data/images'
import {
  heroLogoReveal,
  heroWordReveal,
  heroAccentLine,
  heroSubheadlineReveal,
  heroLocationReveal,
  heroCtaButtonReveal,
} from '../lib/motion'
import MagneticLink from './MagneticLink'
import Navbar from './Navbar'
import { BRAND_GRADIENT_BACKGROUND } from '../lib/brandTheme'

const HEADLINE_LINES = [
  ['TECHSHORE'],
  ['Co-Working', 'Space'],
]

function HeroHeadlineWord({ word, index, reduced }) {
  return (
    <span className="hero-headline-word">
      <motion.span
        variants={heroWordReveal}
        custom={{ index, reduced }}
        initial="hidden"
        animate="visible"
        className="hero-headline-inner"
      >
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
      style={{ background: BRAND_GRADIENT_BACKGROUND }}
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 min-w-0 min-h-[100dvh] min-h-screen flex flex-col overflow-hidden"
    >
      <Navbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-28 text-center">
        <motion.div
          className="hero-logo-shell"
          variants={heroLogoReveal}
          initial={prefersReducedMotion ? 'small' : 'hidden'}
          animate={prefersReducedMotion ? 'small' : ['large', 'small']}
        >
          <img
            src={LOGO}
            alt="Techshore Coworking Space"
            className="hero-logo-img"
            width={320}
            height={320}
            fetchPriority="high"
          />
        </motion.div>

        <h1 className="hero-headline">
          {HEADLINE_LINES.map((line, lineIndex) => (
            <span
              key={lineIndex}
              className={
                lineIndex === 0 ? 'hero-headline-line hero-headline-line-primary' : 'hero-headline-line hero-headline-line-secondary'
              }
            >
              {line.map((word, wordIndex) => (
                <HeroHeadlineWord
                  key={word}
                  word={word}
                  reduced={prefersReducedMotion}
                  index={HEADLINE_LINES.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0) + wordIndex}
                />
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          variants={heroAccentLine}
          custom={prefersReducedMotion}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-accent-gold to-accent-gold/30 sm:origin-center"
          aria-hidden="true"
        />

        <motion.p
          variants={heroSubheadlineReveal}
          custom={prefersReducedMotion}
          initial="hidden"
          animate="visible"
          className="hero-subheadline mt-6 sm:mt-8"
        >
          Premium Workspaces for Modern Professionals
        </motion.p>

        <motion.p
          variants={heroLocationReveal}
          custom={prefersReducedMotion}
          initial="hidden"
          animate="visible"
          className="hero-location mt-5 sm:mt-6"
        >
          <span className="icon-badge icon-badge-sm shrink-0" aria-hidden="true">
            <MapPin size={14} />
          </span>
          At JNTU Metro, Kukatpally, Hyderabad
        </motion.p>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <motion.div
            variants={heroCtaButtonReveal}
            custom={{ index: 0, reduced: prefersReducedMotion }}
            initial="hidden"
            animate="visible"
            className="w-full sm:w-auto"
          >
            <MagneticLink
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full sm:w-auto"
              strength={0.25}
            >
              <CalendarCheck size={18} />
              Book Workspace
            </MagneticLink>
          </motion.div>
          <motion.div
            variants={heroCtaButtonReveal}
            custom={{ index: 1, reduced: prefersReducedMotion }}
            initial="hidden"
            animate="visible"
            className="w-full sm:w-auto"
          >
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
        </div>
      </div>
    </section>
  )
}
