import { motion } from 'framer-motion'
import {
  Coffee,
  Droplets,
  Sparkles,
  Bath,
  ArrowUpDown,
  CircleParking,
  Cctv,
  ShieldCheck,
  Headset,
  Package,
  MapPin,
  Building2,
  Printer,
  LayoutGrid,
  Clock,
  Users,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion'

const amenityGroups = [
  {
    title: 'Comfort & Convenience',
    description: 'Everyday essentials for a seamless workday',
    accent: 'from-royal via-sky to-sky-300',
    iconGradient: 'from-royal to-sky-300',
    glow: 'bg-royal/25',
    items: [
      { icon: Coffee, label: 'Café / Refreshment Area' },
      { icon: Droplets, label: 'Drinking Water Facility' },
      { icon: Sparkles, label: 'Daily Housekeeping' },
      { icon: Bath, label: 'Clean & Hygienic Washrooms' },
      { icon: ArrowUpDown, label: 'Lift Access' },
      { icon: CircleParking, label: 'Bike Parking Facility' },
    ],
  },
  {
    title: 'Security & Support',
    description: 'Peace of mind with dedicated on-site assistance',
    accent: 'from-navy via-royal to-sky',
    iconGradient: 'from-navy-700 to-royal',
    glow: 'bg-navy/20',
    items: [
      { icon: Cctv, label: 'CCTV Surveillance' },
      { icon: ShieldCheck, label: 'Secure Access' },
      { icon: Headset, label: 'Reception & Administrative Support' },
      { icon: Package, label: 'Courier & Package Handling' },
    ],
  },
  {
    title: 'Business-Friendly Features',
    description: 'Tools and flexibility to grow your business',
    accent: 'from-sky via-royal-500 to-royal',
    iconGradient: 'from-sky to-royal-500',
    glow: 'bg-sky/30',
    items: [
      { icon: MapPin, label: 'Prime Location' },
      { icon: Building2, label: 'Business Registration Address' },
      { icon: Printer, label: 'Printing & Scanning Services' },
      { icon: LayoutGrid, label: 'Flexible Seating Plans' },
      { icon: Clock, label: '24/7 Access' },
      { icon: Users, label: 'Networking Environment' },
    ],
  },
]

export default function Amenities() {
  return (
    <AnimatedSection id="amenities" className="section-padding amenities-section relative overflow-hidden">
      <div className="amenities-mesh pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-sky/20 rounded-full blur-[100px] pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-24 w-80 h-80 bg-royal/15 rounded-full blur-[90px] pointer-events-none animate-float-slow-delayed"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Amenities</span>
          <h2 className="section-title mt-2">Everything You Need to Work Efficiently</h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully designed facilities so you can focus on what matters most.
          </p>
        </FadeIn>

        <motion.div
          className="grid lg:grid-cols-3 gap-10 lg:gap-12 mt-16 lg:mt-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {amenityGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="group/card relative"
            >
              <div
                className={`absolute -inset-px rounded-[20px] bg-gradient-to-b ${group.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover/card:opacity-40`}
                aria-hidden="true"
              />
              <div
                className={`absolute -inset-3 rounded-[28px] ${group.glow} blur-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-60`}
                aria-hidden="true"
              />

              <article className="relative flex flex-col h-full rounded-[18px] border border-white/80 bg-white/75 backdrop-blur-xl p-8 sm:p-9 lg:p-10 shadow-[0_4px_24px_rgba(10,22,40,0.06),0_1px_2px_rgba(10,22,40,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover/card:-translate-y-1.5 group-hover/card:border-white group-hover/card:shadow-[0_20px_50px_rgba(10,22,40,0.12),0_8px_16px_rgba(30,86,160,0.08),inset_0_1px_0_rgba(255,255,255,1)]">
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] rounded-t-[18px] bg-gradient-to-r ${group.accent} opacity-90`}
                  aria-hidden="true"
                />
                <div
                  className={`absolute inset-x-6 top-0 h-8 bg-gradient-to-b ${group.accent} opacity-[0.07] blur-md rounded-b-full`}
                  aria-hidden="true"
                />

                <header className="relative pb-6 mb-7 border-b border-gray-200/70">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy tracking-tight leading-tight">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{group.description}</p>
                </header>

                <ul className="relative space-y-5">
                  {group.items.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-4 group/item">
                      <div
                        className={`shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${group.iconGradient} text-white shadow-[0_4px_12px_rgba(30,86,160,0.25)] ring-1 ring-white/20 transition-transform duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-3`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-gray-600 leading-relaxed pt-1.5 group-hover/item:text-navy/90 transition-colors duration-200">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
