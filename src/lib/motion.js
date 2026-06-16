/** Shared motion tokens — GPU-friendly (opacity + transform only) */
export const EASE_SMOOTH = [0.33, 1, 0.68, 1]

export const VIEWPORT = { once: true, margin: '0px 0px -40px 0px', amount: 0.15 }

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
}

export const galleryReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
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
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}
