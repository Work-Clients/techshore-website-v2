import { motion } from 'framer-motion'
import { Clock, Wifi, Users, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { ABOUT_IMAGE } from '../data/images'
import { fadeLeft, fadeUp, stagger, VIEWPORT } from '../lib/motion'

const stats = [
  { icon: Clock, label: '24/7 Access', value: '24', suffix: '/7' },
  { icon: Wifi, label: 'High-Speed WiFi', value: '1', suffix: 'Gbps' },
  { icon: Users, label: 'Meeting Rooms', value: '5', suffix: '+' },
  { icon: MapPin, label: 'Prime Kukatpally Location', value: '1', suffix: 'km to Metro' },
]

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center lg:text-left mb-12 lg:mb-0 lg:hidden">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">About Us</span>
          <h2 className="section-title mt-2">Why Choose Techshore?</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn variants={fadeLeft} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Techshore reception area with branding"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-royal rounded-2xl -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky rounded-2xl -z-10 opacity-60" aria-hidden="true" />
          </FadeIn>

          <div>
            <FadeIn className="hidden lg:block">
              <span className="text-royal font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="section-title mt-2">Why Choose Techshore?</h2>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed">
                Techshore Coworking Space offers modern and productive work environments with excellent connectivity, premium amenities, and flexible workspace options tailored to professionals, startups, and businesses.
              </p>
              <p className="mt-4 text-navy/60 leading-relaxed">
                Located near JNTU Metro and LuLu Mall, our space combines convenience with a professional atmosphere — giving you everything you need to focus, collaborate, and grow.
              </p>
            </FadeIn>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-10"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <motion.div key={stat.label} variants={fadeUp} className="card-base p-6 text-center group">
                    <div className="inline-flex p-3 rounded-2xl bg-sky-100 text-royal mb-4 group-hover:bg-royal group-hover:text-white transition-colors duration-200">
                      <Icon size={24} />
                    </div>
                    <div className="font-display text-3xl font-bold text-navy">
                      {stat.value}
                      <span className="text-royal">{stat.suffix}</span>
                    </div>
                    <p className="mt-2 text-sm text-navy/60 font-medium">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
