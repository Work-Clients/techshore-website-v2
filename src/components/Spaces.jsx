import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Monitor, DoorClosed, Users, Presentation } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import ImageCarousel from './ImageCarousel'
import { WORKSPACE_CARDS } from '../data/images'
import { getRevealVariantByKey, VIEWPORT } from '../lib/motion'

const iconMap = { Monitor, DoorClosed, Users, Presentation }

export default function Spaces() {
  const [activeCard, setActiveCard] = useState(null)
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {WORKSPACE_CARDS.map((card) => {
            const Icon = iconMap[card.icon]
            const isActive = activeCard === card.title

            return (
              <motion.article
                key={card.title}
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getRevealVariantByKey(card.title)}
                onMouseEnter={() => setActiveCard(card.title)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(card.title)}
                onTouchEnd={() => setActiveCard(null)}
                className="group flex flex-col rounded-4xl border border-border/80 bg-bg-card p-6 sm:p-8 shadow-premium transition-all duration-300 hover:-translate-y-2 hover:shadow-premium-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-badge p-2.5 rounded-xl">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-text-main tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 aspect-[4/3] rounded-2xl overflow-hidden border border-border/80">
                  <div className="absolute inset-0 overflow-hidden">
                    <ImageCarousel images={card.images} alt={card.title} isActive={isActive} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
