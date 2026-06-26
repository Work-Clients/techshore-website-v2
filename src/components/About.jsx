import { useRef, useCallback, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Rocket, Laptop, Users, Palette } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { ABOUT_IMAGE } from '../data/images'
import { brandCardThemes } from '../lib/brandColors'
import { getRevealVariant, VIEWPORT } from '../lib/motion'

const audiences = [
  {
    icon: Rocket,
    shortTitle: 'Startups & Entrepreneurs',
    description:
      'Scale without heavy overhead — flexible plans, a collaborative atmosphere, and the infrastructure early-stage teams need to move fast.',
    theme: brandCardThemes[0],
  },
  {
    icon: Laptop,
    shortTitle: 'Remote Work',
    description:
      'Leave the home desk behind for a professional setting with reliable WiFi, fewer distractions, and a routine that keeps you focused.',
    theme: brandCardThemes[1],
  },
  {
    icon: Users,
    shortTitle: 'Small Businesses & Teams',
    description:
      'Private cabins and meeting rooms give your team a dedicated base to collaborate, host clients, and work with clarity.',
    theme: brandCardThemes[2],
  },
  {
    icon: Palette,
    shortTitle: 'Digital Creators & Designers',
    description:
      'A calm, well-lit space with the connectivity and privacy to create, edit, and deliver — without working in isolation.',
    theme: brandCardThemes[3],
  },
]

const PILLAR_ABOVE = 'h-12 sm:h-16 md:h-20'
const IMAGE_TOP = 'top-12 sm:top-16 md:top-20'

const PILLAR_FOOTER_ACCENTS = [
  'bg-brand-red/45',
  'bg-primary-navy/30',
  'bg-brand-blue/45',
  'bg-brand-green/45',
]

function PillarFooter({ index }) {
  const accent = PILLAR_FOOTER_ACCENTS[index % PILLAR_FOOTER_ACCENTS.length]

  const footers = [
    // Startups — ascending steps
    <div className="flex items-end justify-center gap-1.5 h-9 lg:h-10" aria-hidden="true">
      <span className={`w-2.5 h-2 rounded-t-md ${accent}`} />
      <span className={`w-2.5 h-3.5 rounded-t-md ${accent}`} />
      <span className={`w-2.5 h-5 rounded-t-md ${accent}`} />
      <span className={`w-2.5 h-7 rounded-t-md ${accent}`} />
    </div>,
    // Remote — framed window
    <div className="flex justify-center items-end h-9 lg:h-10" aria-hidden="true">
      <div className={`flex gap-1 p-1.5 rounded-md ${accent}`}>
        <span className="h-6 w-4 rounded-sm bg-white/50" />
        <span className="h-6 w-4 rounded-sm bg-white/50" />
      </div>
    </div>,
    // Teams — overlapping circles
    <div className="flex items-center justify-center h-9 lg:h-10" aria-hidden="true">
      <span className={`h-5 w-5 rounded-full ${accent} opacity-75`} />
      <span className={`h-7 w-7 rounded-full ${accent} -mx-2 z-[1] ring-2 ring-white/60`} />
      <span className={`h-5 w-5 rounded-full ${accent} opacity-75`} />
    </div>,
    // Creators — stacked layers
    <div className="relative flex justify-center items-center h-9 lg:h-10 w-14 mx-auto" aria-hidden="true">
      <span className={`absolute w-10 h-6 rounded-sm ${accent} opacity-35 translate-x-1.5 -translate-y-1`} />
      <span className={`absolute w-10 h-6 rounded-sm ${accent} opacity-60`} />
      <span className={`relative w-10 h-6 rounded-sm ${accent} -translate-x-1.5 translate-y-1`} />
    </div>,
  ]

  return (
    <div className="shrink-0 mt-6 lg:mt-8 pb-6 lg:pb-8">
      {footers[index % footers.length]}
      <div
        className={`mx-auto mt-4 h-0.5 w-10 rounded-full ${accent} opacity-50`}
        aria-hidden="true"
      />
    </div>
  )
}

function AboutImage({ className, imageRef, onLoad }) {
  return (
    <div className={`relative overflow-hidden shadow-premium ring-1 ring-white/30 ${className}`}>
      <img
        src={ABOUT_IMAGE}
        alt="Techshore reception area with branding"
        className="w-full h-auto block"
        loading="lazy"
        onLoad={onLoad}
        ref={imageRef}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

function AudienceContent({ audience, iconSize, titleClass, descClass, paddingClass }) {
  const Icon = audience.icon

  return (
    <div className={paddingClass}>
      <div className={`inline-flex items-center justify-center rounded-xl ${audience.theme.iconBadge} p-2.5 sm:p-3`}>
        <Icon size={iconSize} strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className={`mt-3 font-display font-semibold tracking-[-0.02em] leading-snug ${audience.theme.text} ${titleClass}`}>
        {audience.shortTitle}
      </h3>
      <p className={`mt-2 leading-relaxed ${audience.theme.muted} ${descClass}`}>
        {audience.description}
      </p>
    </div>
  )
}

export default function About() {
  const prefersReducedMotion = useReducedMotion()
  const imageRef = useRef(null)
  const [imageHeight, setImageHeight] = useState(0)

  const syncImageHeight = useCallback(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    syncImageHeight()
    window.addEventListener('resize', syncImageHeight)
    return () => window.removeEventListener('resize', syncImageHeight)
  }, [syncImageHeight])

  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="about-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Greetings</span>
          <h2 className="section-title mt-3">We welcome every business, creator and influencer.</h2>
        </FadeIn>

        <FadeIn seed="about-text" className="mt-10 sm:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted text-lg leading-relaxed">
            From entrepreneurs and startups to content creators and influencers, Techshore Coworking Space delivers flexible workspaces, premium facilities, and a vibrant community to help you thrive.
          </p>
        </FadeIn>

        <FadeIn seed="about-composition" className="mt-12 sm:mt-16">
          {/* Mobile: stacked image + full-width audience blocks */}
          <div className="md:hidden max-w-lg mx-auto" aria-label="Who we welcome">
            <AboutImage className="rounded-2xl" />

            <div className="mt-4 flex flex-col gap-3">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.shortTitle}
                  className={`${audience.theme.bg} rounded-2xl overflow-hidden flex flex-col`}
                  initial={prefersReducedMotion ? false : 'hidden'}
                  whileInView={prefersReducedMotion ? undefined : 'visible'}
                  viewport={VIEWPORT}
                  variants={getRevealVariant(index + 2)}
                >
                  <div className="flex flex-1 min-w-0">
                    <div className={`w-1.5 shrink-0 ${audience.theme.accent}`} aria-hidden="true" />
                    <AudienceContent
                      audience={audience}
                      iconSize={24}
                      titleClass="text-base"
                      descClass="text-sm"
                      paddingClass="px-4 pt-5 pb-6 text-left flex-1 min-w-0"
                    />
                  </div>
                  <PillarFooter index={index} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: four-pillar composition */}
          <div
            className="relative hidden md:grid grid-cols-4 items-stretch gap-x-3 lg:gap-x-4 max-w-6xl mx-auto overflow-visible"
            aria-label="Who we welcome"
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.shortTitle}
                className={`${audience.theme.bg} rounded-t-2xl lg:rounded-t-3xl rounded-b-2xl lg:rounded-b-3xl overflow-hidden flex flex-col h-full relative z-0`}
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getRevealVariant(index + 2)}
              >
                <div className={`shrink-0 ${PILLAR_ABOVE}`} aria-hidden="true" />

                <div
                  className="shrink-0"
                  style={{ height: imageHeight > 0 ? `${imageHeight}px` : '12rem' }}
                  aria-hidden="true"
                />

                <div className="flex-1 min-h-12 md:min-h-16 lg:min-h-20" aria-hidden="true" />

                <AudienceContent
                  audience={audience}
                  iconSize={22}
                  titleClass="text-sm lg:text-base"
                  descClass="text-xs lg:text-sm"
                  paddingClass="px-3 lg:px-4 pt-6 lg:pt-10 pb-6 lg:pb-8 text-left shrink-0"
                />
                <PillarFooter index={index} />
              </motion.div>
            ))}

            <div className={`absolute left-1/2 -translate-x-1/2 w-[132%] lg:w-[122%] z-20 ${IMAGE_TOP}`}>
              <AboutImage
                imageRef={imageRef}
                onLoad={syncImageHeight}
                className="rounded-3xl lg:rounded-4xl"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
