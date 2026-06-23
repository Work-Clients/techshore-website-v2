/** Shared motion tokens — GPU-friendly (opacity + transform only) */
export const EASE_SMOOTH = [0.33, 1, 0.68, 1]

/** Trigger reveals earlier so sections don't look empty while scrolling */
export const VIEWPORT = {
  once: true,
  margin: '0px 0px 80px 0px',
  amount: 0.08,
}

const REVEAL_DURATION = 0.58
const SPRING_SNAPPY = { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 }
const SPRING_BOUNCE = { type: 'spring', stiffness: 180, damping: 14, mass: 0.9 }

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeUpLeft = {
  hidden: { opacity: 0, x: -40, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeUpRight = {
  hidden: { opacity: 0, x: 40, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDownLeft = {
  hidden: { opacity: 0, x: -36, y: -32 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const fadeDownRight = {
  hidden: { opacity: 0, x: 36, y: -32 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_SMOOTH },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_SNAPPY,
  },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.86, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_SNAPPY,
  },
}

export const rotateIn = {
  hidden: { opacity: 0, scale: 0.88, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.75, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_BOUNCE,
  },
}

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.62, ease: EASE_SMOOTH },
  },
}

export const swingLeft = {
  hidden: { opacity: 0, x: -56, rotate: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const swingRight = {
  hidden: { opacity: 0, x: 56, rotate: 8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const riseSpring = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_BOUNCE,
  },
}

export const rotateInRight = {
  hidden: { opacity: 0, scale: 0.88, rotate: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const slideFarLeft = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
}

export const slideFarRight = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
}

export const galleryReveal = {
  hidden: { opacity: 0, scale: 0.86, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_SNAPPY,
  },
}

export const galleryRevealLeft = {
  hidden: { opacity: 0, scale: 0.88, x: -36, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const galleryRevealRight = {
  hidden: { opacity: 0, scale: 0.88, x: 36, rotate: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: SPRING_SNAPPY,
  },
}

export const galleryRevealScale = {
  hidden: { opacity: 0, scale: 0.78 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_BOUNCE,
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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

/** Hero — strict sequential entrance (load-only) */
export const HERO_TIMING = {
  logoAppear: 0.6,
  logoPause: 0.2,
  logoShrink: 0.7,
  wordStagger: 0.09,
  wordDuration: 0.5,
  sectionDuration: 0.45,
  sectionGap: 0.06,
  ctaStagger: 0.1,
}

const HERO_WORD_COUNT = 3

export function getHeroLogoEnd(reduced = false) {
  if (reduced) return 0
  const { logoAppear, logoPause, logoShrink } = HERO_TIMING
  return logoAppear + logoPause + logoShrink
}

export function getHeroTitleStart(reduced = false) {
  return getHeroLogoEnd(reduced)
}

export function getHeroTitleEnd(reduced = false) {
  return getHeroTitleStart(reduced) + (HERO_WORD_COUNT - 1) * HERO_TIMING.wordStagger + HERO_TIMING.wordDuration
}

export function getHeroAccentDelay(reduced = false) {
  return getHeroTitleEnd(reduced) + HERO_TIMING.sectionGap
}

export function getHeroSubheadlineDelay(reduced = false) {
  return getHeroAccentDelay(reduced) + HERO_TIMING.sectionDuration + HERO_TIMING.sectionGap
}

export function getHeroLocationDelay(reduced = false) {
  return getHeroSubheadlineDelay(reduced) + HERO_TIMING.sectionDuration + HERO_TIMING.sectionGap
}

export function getHeroCtaDelay(reduced = false) {
  return getHeroLocationDelay(reduced) + HERO_TIMING.sectionDuration + HERO_TIMING.sectionGap
}

export function getHeroCtaButtonDelay(index = 0, reduced = false) {
  return getHeroCtaDelay(reduced) + index * HERO_TIMING.ctaStagger
}

export const heroLogoReveal = {
  hidden: { opacity: 0, scale: 0.78 },
  large: {
    opacity: 1,
    scale: 1,
    transition: { duration: HERO_TIMING.logoAppear, ease: EASE_SMOOTH },
  },
  small: {
    opacity: 1,
    scale: 0.38,
    transition: { duration: HERO_TIMING.logoShrink, ease: EASE_SMOOTH, delay: HERO_TIMING.logoPause },
  },
}

export const heroWordReveal = {
  hidden: { opacity: 0, y: '115%', rotateX: 42, scale: 0.88 },
  visible: ({ index = 0, reduced = false } = {}) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: HERO_TIMING.wordDuration,
      ease: EASE_SMOOTH,
      delay: getHeroTitleStart(reduced) + index * HERO_TIMING.wordStagger,
    },
  }),
}

export const heroAccentLine = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (reduced = false) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: HERO_TIMING.sectionDuration, ease: EASE_SMOOTH, delay: getHeroAccentDelay(reduced) },
  }),
}

export const heroSubheadlineReveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: (reduced = false) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: HERO_TIMING.sectionDuration, ease: EASE_SMOOTH, delay: getHeroSubheadlineDelay(reduced) },
  }),
}

export const heroLocationReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.88 },
  visible: (reduced = false) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...SPRING_BOUNCE, delay: getHeroLocationDelay(reduced) },
  }),
}

export const heroCtaButtonReveal = {
  hidden: { opacity: 0, y: 36, scale: 0.86, rotate: -3 },
  visible: ({ index = 0, reduced = false } = {}) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { ...SPRING_BOUNCE, delay: getHeroCtaButtonDelay(index, reduced) },
  }),
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
  rotateInRight,
  popIn,
  zoomIn,
  swingLeft,
  swingRight,
  riseSpring,
  slideFarLeft,
  slideFarRight,
  fadeIn,
]

export const GALLERY_REVEALS = [
  galleryReveal,
  galleryRevealLeft,
  galleryRevealRight,
  galleryRevealScale,
  scaleUp,
  popIn,
  swingLeft,
  swingRight,
  fadeUpLeft,
  fadeUpRight,
  zoomIn,
  rotateIn,
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
