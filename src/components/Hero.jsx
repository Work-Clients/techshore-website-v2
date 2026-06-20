import { useRef } from 'react'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

import { MessageCircle, CalendarCheck, MapPin } from 'lucide-react'

import { HERO_IMAGE, WHATSAPP_URL } from '../data/images'

import { stagger, getRevealVariant } from '../lib/motion'

import MagneticLink from './MagneticLink'



const heroStagger = {

  ...stagger,

  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },

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

      className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden bg-primary-navy"

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

        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-36 sm:pb-28 text-center"

        variants={heroStagger}

        initial={prefersReducedMotion ? false : 'hidden'}

        animate={prefersReducedMotion ? undefined : 'visible'}

      >

        <motion.h1 variants={getRevealVariant(0)} className="hero-headline">

          Techshore Coworking Space

        </motion.h1>



        <motion.p variants={getRevealVariant(1)} className="hero-subheadline mt-6 sm:mt-8">

          Premium Workspaces for Modern Professionals

        </motion.p>



        <motion.p variants={getRevealVariant(2)} className="hero-location mt-5 sm:mt-6">

          <MapPin size={16} className="shrink-0 text-white/50" aria-hidden="true" />

          At JNTU Metro, Kukatpally, Hyderabad

        </motion.p>



        <motion.div

          variants={getRevealVariant(3)}

          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"

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

            className="btn-hero-outline w-full sm:w-auto"

            strength={0.25}

          >

            <MessageCircle size={18} />

            Chat on WhatsApp

          </MagneticLink>

        </motion.div>

      </motion.div>

    </section>

  )

}

