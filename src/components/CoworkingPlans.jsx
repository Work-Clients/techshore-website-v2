import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { fadeUp, VIEWPORT } from '../lib/motion'

const plans = [
  {
    primary: 'Day Pass',
    description:
      'Perfect for professionals, freelancers, and remote workers who need a productive workspace for a single day. Enjoy access to our coworking environment, amenities, and community.',
  },
  {
    primary: 'Monthly Plans',
    description:
      'Ideal for individuals and teams looking for a consistent workspace. Get ongoing access to the coworking space along with member benefits and a collaborative work environment.',
  },
]

function PlanTitle({ primary, optionLabel }) {
  return (
    <>
      <p className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.28em] text-primary-navy/40 mb-4">
        {optionLabel}
      </p>
      <h3 className="font-display leading-none">
        <span className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-bold text-text-main tracking-tight">
          {primary}
        </span>
      </h3>
    </>
  )
}

function PlanDivider() {
  return (
    <div className="flex items-center justify-center shrink-0" aria-hidden="true">
      <div className="flex md:hidden items-center gap-4 w-full max-w-xs mx-auto py-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-navy/20 to-brand-blue/40" />
        <div className="flex flex-col items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red/55" />
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-primary-navy/35">
            or
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green/55" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary-navy/20 to-brand-blue/40" />
      </div>

      <div className="hidden md:flex flex-col items-center justify-center self-stretch px-6 lg:px-10 py-4 min-h-[14rem]">
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-brand-red/30 to-brand-blue/35" />
        <div className="flex flex-col items-center gap-2.5 my-5">
          <span className="h-2 w-2 rounded-full bg-accent-gold/80 ring-2 ring-accent-gold/20" />
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-primary-navy/40">
            or
          </span>
          <span className="h-2 w-2 rounded-full bg-accent-gold/80 ring-2 ring-accent-gold/20" />
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-brand-blue/35 via-brand-green/30 to-transparent" />
      </div>
    </div>
  )
}

export default function CoworkingPlans() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="coworking-plans" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.header
          className="border-b border-primary-navy/10 pb-12 sm:pb-16 text-center"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <h2 className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] text-text-main">
            Flexible {' '}
            <span className="block sm:inline font-light text-primary-navy/65">plans</span>
          </h2>
          <p className="mt-8 sm:mt-10 mx-auto max-w-xl text-base sm:text-lg text-muted leading-[1.75]">
            Choose a workspace option that suits your needs, whether you&apos;re visiting for a day or
            looking for a regular workspace.
          </p>
        </motion.header>

        <div className="mt-14 sm:mt-20 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          {plans.map((plan, index) => (
            <div key={`${plan.primary}`} className="contents">
              <motion.article
                className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={fadeUp}
              >
                <PlanTitle
                  primary={plan.primary}
                  optionLabel={`Option ${index + 1}`}
                />
                <p className="mt-8 sm:mt-10 text-muted text-[0.95rem] sm:text-base leading-[1.8] max-w-sm">
                  {plan.description}
                </p>
              </motion.article>

              {index < plans.length - 1 && <PlanDivider />}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
