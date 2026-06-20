import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { MessageCircle, CalendarCheck } from 'lucide-react'
import { HERO_IMAGE, WHATSAPP_URL } from '../data/images'
import { EASE_SMOOTH, stagger, getRevealVariant } from '../lib/motion'
import MagneticLink from './MagneticLink'

const METRICS = [
  { value: '150+', label: 'Seats' },
  { value: '24/7', label: 'Access' },
  { value: 'High-Speed', label: 'WiFi' },
]

const heroStagger = {
  ...stagger,
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const bgX = useTransform(springX, [-0.5, 0.5], ['-1.5%', '1.5%'])
  const bgY = useTransform(springY, [-0.5, 0.5], ['-1%', '1%'])

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-bg gpu-layer">
        <motion.img
          src={HERO_IMAGE}
          alt="Modern coworking floor at Techshore with professionals working"
          className="w-full h-full object-cover hero-image-crisp"
          style={prefersReducedMotion ? { scale: 1.04 } : { x: bgX, y: bgY, scale: 1.04 }}
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 hero-overlay pointer-events-none" aria-hidden="true" />

      <motion.div
        className="relative z-10 w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:py-24 text-center"
        variants={heroStagger}
        initial={prefersReducedMotion ? false : 'hidden'}
        animate={prefersReducedMotion ? undefined : 'visible'}
      >
        <motion.span variants={getRevealVariant(0)} className="hero-badge-premium">
          For startups, freelancers and remote teams
        </motion.span>

        <motion.h1 variants={getRevealVariant(1)} className="hero-headline-premium">
          Techshore Coworking Space
        </motion.h1>

        <motion.p variants={getRevealVariant(2)} className="hero-subheadline">
          At JNTU, Kukatpally, Hyderabad.
        </motion.p>

        <motion.div
          variants={getRevealVariant(3)}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <MagneticLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary w-full sm:w-auto"
            strength={0.25}
          >
            <CalendarCheck size={18} />
            Book a Tour
          </MagneticLink>
          <MagneticLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-glass w-full sm:w-auto"
            strength={0.25}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </MagneticLink>
        </motion.div>

        <motion.div
          variants={getRevealVariant(4)}
          className="hero-metrics mt-8 sm:mt-10"
          aria-label="Workspace highlights"
        >
          {METRICS.map((metric, index) => (
            <div key={metric.label} className="hero-metric-item">
              {index > 0 && (
                <span className="hero-metric-divider hidden sm:block" aria-hidden="true" />
              )}
              <div className="hero-metric">
                <span className="hero-metric-value">{metric.value}</span>
                <span className="hero-metric-label">{metric.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
          aria-hidden="true"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.35 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-scroll-dot" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
