import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '../lib/motion'

export default function FadeIn({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
  as: Tag = motion.div,
}) {
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
      transition={{ delay }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </Tag>
  )
}
