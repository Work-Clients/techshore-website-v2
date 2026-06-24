export const brandCardThemes = [
  {
    bg: 'bg-[#f8dde0]',
    border: 'border-[#c1121f]/20',
    accent: 'bg-[#c1121f]/25',
    text: 'text-text-main',
    muted: 'text-muted',
    iconBadge: 'bg-primary-navy/10 text-primary-navy',
  },
  {
    bg: 'bg-[#dce3ee]',
    border: 'border-[#000814]/15',
    accent: 'bg-[#000814]/20',
    text: 'text-text-main',
    muted: 'text-muted',
    iconBadge: 'bg-primary-navy/10 text-primary-navy',
  },
  {
    bg: 'bg-[#d6e3fa]',
    border: 'border-[#072ac8]/20',
    accent: 'bg-[#072ac8]/25',
    text: 'text-text-main',
    muted: 'text-muted',
    iconBadge: 'bg-primary-navy/10 text-primary-navy',
  },
  {
    bg: 'bg-[#fadceb]',
    border: 'border-[#f72585]/20',
    accent: 'bg-[#f72585]/25',
    text: 'text-text-main',
    muted: 'text-muted',
    iconBadge: 'bg-primary-navy/10 text-primary-navy',
  },
]

export function cardThemeAt(index) {
  return brandCardThemes[index % brandCardThemes.length]
}

export function themedCardClasses(theme, { premium = false, rounded = 'rounded-4xl' } = {}) {
  const shadow = premium ? 'shadow-premium hover:shadow-premium-hover' : 'shadow-card hover:shadow-card-hover'

  return [
    theme.bg,
    theme.border,
    'border',
    rounded,
    shadow,
    'transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2',
  ].join(' ')
}
