/** Shared motion tokens — GPU-friendly (opacity + transform only) */
export const EASE_SMOOTH = [0.33, 1, 0.68, 1]

/** Trigger reveals earlier so sections don't look empty while scrolling */
export const VIEWPORT = {
  once: true,
  margin: '0px 0px 80px 0px',
  amount: 0.08,
}

const REVEAL_DURATION = 0.42

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.38, ease: EASE_SMOOTH },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeUpLeft = {
  hidden: { opacity: 0, x: -18, y: 18 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeUpRight = {
  hidden: { opacity: 0, x: 18, y: 18 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDownLeft = {
  hidden: { opacity: 0, x: -18, y: -14 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDownRight = {
  hidden: { opacity: 0, x: 18, y: -14 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const rotateIn = {
  hidden: { opacity: 0, scale: 0.96, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const galleryReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
}

export const galleryRevealLeft = {
  hidden: { opacity: 0, scale: 0.97, x: -14 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
}

export const galleryRevealRight = {
  hidden: { opacity: 0, scale: 0.97, x: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
}

export const galleryRevealScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: EASE_SMOOTH },
  },
}

export const lightboxReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.25, ease: EASE_SMOOTH },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0 },
  },
}

/** Pool of reveal animations cycled by index or key */
export const REVEAL_VARIANTS = [
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeDown,
  fadeUpLeft,
  fadeUpRight,
  fadeDownLeft,
  fadeDownRight,
  scaleIn,
  scaleUp,
  rotateIn,
  fadeIn,
]

export const GALLERY_REVEALS = [
  galleryReveal,
  galleryRevealLeft,
  galleryRevealRight,
  galleryRevealScale,
  scaleUp,
  fadeUpLeft,
  fadeUpRight,
]

export function getRevealVariant(index = 0) {
  const i = ((index % REVEAL_VARIANTS.length) + REVEAL_VARIANTS.length) % REVEAL_VARIANTS.length
  return REVEAL_VARIANTS[i]
}

export function getRevealVariantByKey(key) {
  if (key == null || key === '') return fadeUp
  const str = String(key)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return getRevealVariant(Math.abs(hash))
}

export function getGalleryReveal(index = 0) {
  const i = ((index % GALLERY_REVEALS.length) + GALLERY_REVEALS.length) % GALLERY_REVEALS.length
  return GALLERY_REVEALS[i]
}
