import { motion, useReducedMotion } from 'framer-motion'
import { Monitor, DoorClosed, Users, Presentation } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { WORKSPACE_CARDS } from '../data/images'
import { cardThemeAt } from '../lib/brandColors'
import { getRevealVariantByKey, VIEWPORT } from '../lib/motion'

const iconMap = { Monitor, DoorClosed, Users, Presentation }

const IMAGE_LAYOUTS = [
  [
    'col-span-2 row-span-2 min-h-[200px] sm:col-span-7 sm:row-span-2 sm:min-h-0',
    'col-span-1 row-span-1 min-h-[120px] sm:col-span-5 sm:row-span-1 sm:min-h-0',
    'col-span-1 row-span-1 min-h-[120px] sm:col-span-5 sm:row-span-1 sm:min-h-0',
  ],
  [
    'col-span-1 row-span-1 min-h-[120px] sm:col-span-5 sm:row-span-1 sm:min-h-0',
    'col-span-1 row-span-1 min-h-[120px] sm:col-span-5 sm:row-span-1 sm:min-h-0',
    'col-span-2 row-span-2 min-h-[200px] sm:col-span-7 sm:row-span-2 sm:col-start-6 sm:min-h-0',
  ],
]

function WorkspaceSeparator({ index }) {
  const theme = cardThemeAt(index)
  const nextTheme = cardThemeAt(index + 1)

  return (
    <div className="relative py-10 sm:py-14 lg:py-16" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#c1121f]/35 via-[#072ac8]/40 via-[#f72585]/35 to-transparent" />
      <div className="relative flex items-center justify-center gap-2 sm:gap-3">
        <span className={`h-2 w-2 rounded-full ${theme.accent} ring-2 ring-white/80 shadow-sm`} />
        <span className="h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-[#c1121f] via-[#072ac8] to-[#f72585] opacity-70" />
        <span className={`h-2 w-2 rounded-full ${nextTheme.accent} ring-2 ring-white/80 shadow-sm`} />
      </div>
    </div>
  )
}

const IMAGE_ORDERS = [
  ['', '', ''],
  ['order-2 sm:order-none', 'order-3 sm:order-none', 'order-first sm:order-none'],
]

function WorkspaceImages({ images, alt, layoutIndex }) {
  const layout = layoutIndex % IMAGE_LAYOUTS.length
  const slots = IMAGE_LAYOUTS[layout]
  const orders = IMAGE_ORDERS[layout]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-12 grid-rows-2 gap-2.5 sm:gap-3 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
      {images.slice(0, 3).map((src, i) => (
        <div
          key={src}
          className={`relative overflow-hidden rounded-2xl border border-border/70 shadow-card group ${slots[i]} ${orders[i]}`}
        >
          <img
            src={src}
            alt={i === 0 ? alt : ''}
            aria-hidden={i !== 0}
            className="absolute inset-0 w-full h-full object-cover brightness-[1.02] contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary-navy/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}

function WorkspaceText({ card, index, theme }) {
  const Icon = iconMap[card.icon]
  const number = String(index + 1).padStart(2, '0')

  return (
    <div className="relative flex flex-col justify-center py-2 sm:py-4 lg:py-8">
      <span
        className="font-display text-[5rem] sm:text-[6.5rem] lg:text-[7.5rem] font-bold leading-none tracking-tighter text-primary-navy/[0.06] select-none"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="relative -mt-10 sm:-mt-12 lg:-mt-14 pl-5 sm:pl-6 border-l-[3px] border-accent-gold/70">
        <span className="section-eyebrow">Workspace {number}</span>

        <div className={`mt-4 inline-flex items-center justify-center p-3 rounded-2xl ${theme.iconBadge}`}>
          <Icon size={22} strokeWidth={2} aria-hidden="true" />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main tracking-tight leading-[1.15] mt-5">
          {card.title}
        </h3>

        <p className="mt-4 sm:mt-5 text-muted text-base sm:text-lg leading-relaxed max-w-md">
          {card.description}
        </p>

        <div className={`mt-6 h-1 w-12 rounded-full ${theme.accent}`} aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Spaces() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="spaces" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="spaces-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Workspace Offerings</span>
          <h2 className="section-title mt-3">Choose Your Ideal Workspace</h2>
          <p className="section-subtitle mx-auto">
            From solo professionals to growing teams, find the perfect setup for how you work.
          </p>
        </FadeIn>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          {WORKSPACE_CARDS.map((card, index) => {
            const theme = cardThemeAt(index)
            const isReversed = index % 2 === 1

            return (
              <div key={card.title}>
                <motion.article
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center"
                  initial={prefersReducedMotion ? false : 'hidden'}
                  whileInView={prefersReducedMotion ? undefined : 'visible'}
                  viewport={VIEWPORT}
                  variants={getRevealVariantByKey(card.title)}
                >
                  <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                    <WorkspaceText card={card} index={index} theme={theme} />
                  </div>

                  <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                    <WorkspaceImages images={card.images} alt={card.title} layoutIndex={index} />
                  </div>
                </motion.article>

                {index < WORKSPACE_CARDS.length - 1 && <WorkspaceSeparator index={index} />}
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
