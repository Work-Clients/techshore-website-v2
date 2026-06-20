import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MessageCircle, CalendarCheck } from 'lucide-react'
import { HERO_IMAGE, WHATSAPP_URL } from '../data/images'
import { EASE_SMOOTH, stagger } from '../lib/motion'
import MagneticLink from './MagneticLink'

const CONTENT_START_MS = 2200

const heroStagger = {
  ...stagger,
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const heroFromTop = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_SMOOTH },
  },
}

const heroFromLeft = {
  hidden: { opacity: 0, x: -160, y: 24 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
}

const heroFromRight = {
  hidden: { opacity: 0, x: 160, y: 24 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
}

const heroBtnLeft = {
  hidden: { opacity: 0, x: -120, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH, delay: 0.55 },
  },
}

const heroBtnRight = {
  hidden: { opacity: 0, x: 120, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH, delay: 0.68 },
  },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const [showContent, setShowContent] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const bgX = useTransform(springX, [-0.5, 0.5], ['-1.5%', '1.5%'])
  const bgY = useTransform(springY, [-0.5, 0.5], ['-1%', '1%'])
  const shapeX = useTransform(springX, [-0.5, 0.5], [-20, 20])
  const shapeY = useTransform(springY, [-0.5, 0.5], [-15, 15])
  const shape2X = useTransform(springX, [-0.5, 0.5], [24, -24])
  const shape2Y = useTransform(springY, [-0.5, 0.5], [-12, 12])
  const shape3X = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const shape3Y = useTransform(springY, [-0.5, 0.5], [21, -21])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const contentStart = reducedMotion ? 200 : CONTENT_START_MS

    const contentTimer = setTimeout(() => setShowContent(true), contentStart)

    return () => clearTimeout(contentTimer)
  }, [])

  const handleMouseMove = (e) => {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-bg gpu-layer">
        <motion.img
          src={HERO_IMAGE}
          alt="Modern coworking floor at Techshore with professionals working"
          className="w-full h-full object-cover hero-image-crisp"
          style={{ x: bgX, y: bgY, scale: 1.04 }}
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div className="hero-shape hero-shape-1" style={{ x: shapeX, y: shapeY }} />
        <motion.div className="hero-shape hero-shape-2" style={{ x: shape2X, y: shape2Y }} />
        <motion.div className="hero-shape hero-shape-3" style={{ x: shape3X, y: shape3Y }} />
        <div className="hero-dot-grid" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center"
        variants={heroStagger}
        initial="hidden"
        animate={showContent ? 'visible' : 'hidden'}
      >
        <div className="hero-content-panel mx-auto flex flex-col items-center">
          <motion.span variants={heroFromTop} className="hero-badge">
            Premium Coworking in Kukatpally
          </motion.span>

          <motion.h1 variants={heroFromLeft} className="hero-headline">
            <span className="hero-title-block">
              <span className="hero-title-line whitespace-nowrap">
                <span className="hero-accent">Techshore</span> Coworking Space
              </span>
              <span className="hero-title-line">
                at <span className="hero-accent">JNTU</span>,{' '}
                <span className="hero-accent">Kukatpally</span>.
              </span>
            </span>
          </motion.h1>

          <motion.p variants={heroFromRight} className="hero-subtext">
            <span className="hero-subtext-block">
              Flexible workspaces designed for startups, freelancers, remote teams, and growing businesses.
            </span>
          </motion.p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <motion.div variants={heroBtnLeft}>
              <MagneticLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
                strength={0.25}
              >
                <CalendarCheck size={18} />
                Book a Workspace
              </MagneticLink>
            </motion.div>
            <motion.div variants={heroBtnRight}>
              <MagneticLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
                strength={0.25}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </MagneticLink>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 12 }}
        transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2 shadow-lg bg-navy/40">
          <div className="w-1.5 h-1.5 rounded-full bg-electric animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}
