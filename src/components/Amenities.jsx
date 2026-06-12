import { motion } from 'framer-motion'
import {
  Train,
  Bus,
  Network,
  ShoppingBag,
  Presentation,
  Wifi,
  Coffee,
  Users,
  Printer,
  Clock,
  Wind,
  Car,
  Bike,
  Projector,
  Mail,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

const amenities = [
  { icon: Train, label: 'Near JNTU Metro' },
  { icon: Bus, label: 'Close to Bus Points' },
  { icon: Network, label: 'Highly Connected Area' },
  { icon: ShoppingBag, label: 'Near LuLu Mall' },
  { icon: Presentation, label: 'Conference Rooms' },
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Coffee, label: 'Kitchenette with Coffee' },
  { icon: Users, label: 'Meeting Rooms' },
  { icon: Printer, label: 'Printer & Scanner' },
  { icon: Clock, label: '24 Hours Access' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Car, label: 'Car Parking' },
  { icon: Bike, label: 'Bike Parking' },
  { icon: Projector, label: 'Projector' },
  { icon: Mail, label: 'Mail Handling' },
]

export default function Amenities() {
  return (
    <AnimatedSection id="amenities" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Amenities</span>
          <h2 className="section-title mt-2">Everything You Need to Work Efficiently</h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully designed facilities so you can focus on what matters most.
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {amenities.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200"
            >
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-100 to-royal/10 text-royal group-hover:from-royal group-hover:to-royal-600 group-hover:text-white transition-colors duration-200">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <span className="mt-3 text-sm font-medium text-navy/80 leading-snug">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
