import { motion, useReducedMotion } from 'framer-motion'
import { getRevealVariantByKey, VIEWPORT } from '../lib/motion'

export default function FadeIn({
  children,
  className = '',
  variants,
  seed,
  as: Tag = motion.div,
}) {
  const prefersReducedMotion = useReducedMotion()
  const resolvedVariants = variants ?? getRevealVariantByKey(seed)

  return (
    <Tag
      className={className}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={VIEWPORT}
      variants={resolvedVariants}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </Tag>
  )
}
