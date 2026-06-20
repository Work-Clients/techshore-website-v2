import { motion, useReducedMotion } from 'framer-motion'
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
import { getRevealVariant, VIEWPORT } from '../lib/motion'

const amenityGroups = [
  {
    title: 'Comfort & Convenience',
    description: 'Everyday essentials for a seamless workday',
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
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="amenities" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="amenities-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Amenities</span>
          <h2 className="section-title mt-3">Everything You Need to Work Efficiently</h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully designed facilities so you can focus on what matters most.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {amenityGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              viewport={VIEWPORT}
              variants={getRevealVariant(index + 3)}
            >
              <article className="flex flex-col h-full rounded-4xl border border-border/80 bg-bg-card p-8 sm:p-9 shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover">
                <header className="pb-6 mb-6 border-b border-border/60">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-main tracking-tight leading-tight">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{group.description}</p>
                </header>

                <ul className="space-y-4">
                  {group.items.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3.5 group/item">
                      <div className="shrink-0 p-2 rounded-lg bg-accent-gold/15 text-accent-gold transition-colors duration-200 group-hover/item:bg-accent-gold group-hover/item:text-primary-navy">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-muted leading-relaxed pt-0.5 group-hover/item:text-text-main transition-colors duration-200">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
