import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, DoorClosed, Users, Presentation } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import ImageCarousel from './ImageCarousel'
import { WORKSPACE_CARDS } from '../data/images'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

const iconMap = { Monitor, DoorClosed, Users, Presentation }

export default function Spaces() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <AnimatedSection id="spaces" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Workspace Offerings</span>
          <h2 className="section-title mt-2">Choose Your Ideal Workspace</h2>
          <p className="section-subtitle mx-auto">
            From solo professionals to growing teams, find the perfect setup for how you work.
          </p>
        </FadeIn>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {WORKSPACE_CARDS.map((card) => {
            const Icon = iconMap[card.icon]
            const isActive = activeCard === card.title

            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                onMouseEnter={() => setActiveCard(card.title)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(card.title)}
                onTouchEnd={() => setActiveCard(null)}
                className={`group flex flex-col rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 ${
                  isActive
                    ? 'border-royal/30 bg-white shadow-card-hover -translate-y-1'
                    : 'border-sky-200 bg-gradient-to-br from-sky-100 to-sky-50 shadow-card'
                }`}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex p-3 rounded-2xl mb-4 transition-colors duration-300 ${
                      isActive ? 'bg-royal text-white' : 'bg-white/90 text-royal'
                    }`}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy tracking-tight">
                    {card.title}
                  </h3>
                  <div
                    className={`mx-auto mt-3 h-0.5 rounded-full bg-gradient-to-r from-royal to-sky transition-all duration-500 ${
                      isActive ? 'w-16' : 'w-10'
                    }`}
                  />
                  <p className="mt-4 text-navy/70 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="relative mt-6 aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/5">
                  <ImageCarousel images={card.images} alt={card.title} isActive={isActive} />
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
