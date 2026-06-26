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
import { cardThemeAt } from '../lib/brandColors'
import { getRevealVariant, VIEWPORT } from '../lib/motion'

const amenityGroups = [
  {
    title: 'Security & Support',
    description: 'Peace of mind with dedicated on-site assistance',
    items: [
      { icon: Cctv, label: 'CCTV Surveillance' },
      { icon: ShieldCheck, label: 'Secure Access' },
      { icon: Package, label: 'Courier & Package Handling' },
      { icon: Headset, label: 'Reception & Administrative Support' },
    ],
  },
  {
    title: 'Comfort & Convenience',
    description: 'Everyday essentials for a seamless workday',
    items: [
      { icon: ArrowUpDown, label: 'Lift Access' },
      { icon: Sparkles, label: 'Daily Housekeeping' },
      { icon: CircleParking, label: 'Bike Parking Facility' },
      { icon: Coffee, label: 'Café / Refreshment Area' },
      { icon: Bath, label: 'Clean & Hygienic Washrooms' },
    ],
  },
  {
    title: 'Business-Friendly Features',
    description: 'Tools and flexibility to grow your business',
    items: [
      { icon: MapPin, label: 'Prime Location' },
      { icon: LayoutGrid, label: 'Flexible Seating Plans' },
      { icon: Users, label: 'Networking Environment' },
      { icon: Printer, label: 'Printing & Scanning Services' },
      { icon: Building2, label: 'Business Registration Address' },
    ],
  },
]

function CategorySeparator() {
  return (
    <div className="flex items-center gap-3 py-10 sm:py-14" aria-hidden="true">
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-red/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-green/50" />
      </div>
      <div className="h-px flex-1 border-t border-dashed border-border" />
    </div>
  )
}

function CategoryHeading({ title, description, index }) {
  const parts = title.split('&').map((part) => part.trim())

  return (
    <header className="text-center">
      <h3 className="font-display text-[1.75rem] sm:text-4xl font-semibold leading-[1.1] tracking-[-0.02em]">
        {parts.length > 1 ? (
          <>
            <span className="text-text-main">{parts[0]}</span>
            <span className="font-normal italic text-accent-gold-dark"> &amp; </span>
            <span className="text-text-main">{parts[1]}</span>
          </>
        ) : (
          <span className="text-text-main">{title}</span>
        )}
      </h3>

      <p
        className={`mt-3 sm:mt-4 text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto ${
          index === 0 ? 'font-medium' : ''
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-5 mx-auto h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent to-transparent ${
          index === 2 ? 'via-primary-navy/30' : 'via-accent-gold/80'
        }`}
        aria-hidden="true"
      />
    </header>
  )
}

function AmenityChip({ icon: Icon, label, theme }) {
  return (
    <div
      className={[
        theme.bg,
        theme.border,
        'border inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full',
        'shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-card',
      ].join(' ')}
    >
      <span className={`inline-flex items-center justify-center p-1.5 sm:p-2 rounded-full ${theme.iconBadge}`}>
        <Icon size={17} strokeWidth={2} aria-hidden="true" />
      </span>
      <span className={`text-xs sm:text-sm font-medium leading-snug ${theme.text}`}>{label}</span>
    </div>
  )
}

function AmenityChips({ items, groupIndex }) {
  let colorOffset = 0
  for (let i = 0; i < groupIndex; i += 1) {
    colorOffset += amenityGroups[i].items.length
  }

  return (
    <ul className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 list-none">
      {items.map(({ icon, label }, itemIndex) => (
        <li key={label}>
          <AmenityChip icon={icon} label={label} theme={cardThemeAt(colorOffset + itemIndex)} />
        </li>
      ))}
    </ul>
  )
}

export default function Amenities() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="amenities" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn seed="amenities-header" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Amenities</span>
          <h2 className="section-title mt-3 !leading-[1.4]">Everything You Need to Work Efficiently</h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully designed facilities so you can focus on what matters most.
          </p>
        </FadeIn>

        <div className="mt-16 sm:mt-20 lg:mt-24 space-y-0">
          {amenityGroups.map((group, index) => (
            <div key={group.title}>
              <motion.article
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getRevealVariant(index + 3)}
              >
                <CategoryHeading title={group.title} description={group.description} index={index} />
                <AmenityChips items={group.items} groupIndex={index} />
              </motion.article>

              {index < amenityGroups.length - 1 && <CategorySeparator />}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
