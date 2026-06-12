import { motion } from 'framer-motion'
import { Monitor, DoorClosed, Users, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { WORKSPACE_CARDS } from '../data/images'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

const iconMap = { Monitor, DoorClosed, Users }

export default function Spaces() {
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
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {WORKSPACE_CARDS.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.article key={card.title} variants={fadeUp} className="card-base group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 gpu-layer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/90 text-royal">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{card.title}</h3>
                  <p className="mt-3 text-navy/60 text-sm leading-relaxed">{card.description}</p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-royal font-semibold text-sm group-hover:gap-3 transition-[gap] duration-200"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
