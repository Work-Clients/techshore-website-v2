import { motion } from 'framer-motion'
import { MessageCircle, CalendarCheck, Wifi, Clock, MapPin } from 'lucide-react'
import RippleButton from './RippleButton'
import { HERO_IMAGE, WHATSAPP_URL } from '../data/images'
import { stagger, fadeUp, fadeRight } from '../lib/motion'

const floatingCards = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Clock, label: '24/7 Access' },
  { icon: MapPin, label: 'Prime Location' },
]

const heroStagger = {
  ...stagger,
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-bg gpu-layer">
        <img
          src={HERO_IMAGE}
          alt="Modern coworking floor at Techshore with professionals working"
          className="w-full h-full object-cover hero-ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky/20 rounded-full blur-3xl gpu-layer animate-float-slow" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-royal/20 rounded-full blur-3xl gpu-layer animate-float-slow-delayed" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-sm font-medium mb-6"
          >
            Premium Coworking in Kukatpally
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Work Smarter at{' '}
            <span className="text-sky-300">Techshore</span>{' '}
            Coworking Space
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            Flexible workspaces designed for startups, freelancers, remote teams, and growing businesses in the heart of Kukatpally.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <RippleButton className="btn-primary" onClick={scrollToContact}>
              <CalendarCheck size={18} />
              Book a Workspace
            </RippleButton>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {floatingCards.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeRight}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 shadow-lg"
            >
              <div className="p-2 rounded-xl bg-sky/30">
                <Icon size={18} className="text-white" />
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delayed" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-scroll-dot" />
        </div>
      </div>
    </section>
  )
}
