/** Shared gradient for hero, navbar, and footer — update endpoints to retheme all three. */
export const BRAND_GRADIENT_START = '#0a1630'
export const BRAND_GRADIENT_END = '#3631c9'

export const BRAND_GRADIENT_BACKGROUND = `linear-gradient(
  112deg,
  ${BRAND_GRADIENT_START} 0%,
  #101c42 20%,
  #1a2468 40%,
  #262a94 60%,
  #312fb8 80%,
  ${BRAND_GRADIENT_END} 100%
)`

/** @deprecated Use BRAND_GRADIENT_* — kept for existing imports */
export const HERO_GRADIENT_START = BRAND_GRADIENT_START
export const HERO_GRADIENT_END = BRAND_GRADIENT_END
export const HERO_BACKGROUND = BRAND_GRADIENT_BACKGROUND

function hexToRgbChannels(hex) {
  const normalized = hex.replace('#', '')
  const r = parseInt(normalized.slice(0, 2), 16)
  const g = parseInt(normalized.slice(2, 4), 16)
  const b = parseInt(normalized.slice(4, 6), 16)
  return `${r} ${g} ${b}`
}

/** RGB channels for the gradient end color (shadows, overlays). */
export const BRAND_GRADIENT_END_RGB = hexToRgbChannels(BRAND_GRADIENT_END)
