/** @type {import('tailwindcss').Config} */
import { BRAND_GRADIENT_END_RGB } from './src/lib/brandTheme.js'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,css}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0a1630',
        icon: {
          DEFAULT: '#0a1630',
          soft: 'rgba(10, 22, 48, 0.92)',
          muted: '#4d6182',
          bg: 'rgba(10, 22, 48, 0.09)',
          'on-dark': '#9eb0cc',
        },
        'accent-gold': {
          DEFAULT: '#dfb15b',
          dark: '#9a7b3c',
        },
        'accent-cta': '#01c4c0',
        'bg-main': '#f8f9fa',
        'bg-card': '#f1ede4',
        'text-main': '#1e293b',
        border: '#e2e0d9',
        muted: '#556275',
        brand: {
          red: '#c1121f',
          blue: '#072ac8',
          green: '#2d6a4f',
        },
        pillar: {
          red: '#f8dde0',
          navy: '#e1e3e7',
          blue: '#d6e3fa',
          green: '#d8ede3',
        },
      },
      fontFamily: {
        sans: ['Bitter', 'Georgia', 'serif'],
        serif: ['Bitter', 'Georgia', 'serif'],
        body: ['Bitter', 'Georgia', 'serif'],
        display: ['Bitter', 'Georgia', 'serif'],
        heading: ['Bitter', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(10, 22, 48, 0.04), 0 6px 20px rgba(10, 22, 48, 0.05)',
        'card-hover': '0 4px 12px rgba(10, 22, 48, 0.06), 0 16px 40px rgba(10, 22, 48, 0.08)',
        premium: '0 2px 6px rgba(10, 22, 48, 0.04), 0 12px 32px rgba(10, 22, 48, 0.06)',
        'premium-hover': '0 6px 20px rgba(10, 22, 48, 0.08), 0 20px 48px rgba(10, 22, 48, 0.10)',
        glow: '0 0 40px rgba(223, 177, 91, 0.15)',
        'secondary-glow': '0 0 24px rgba(223, 177, 91, 0.25), 0 4px 20px rgba(223, 177, 91, 0.12)',
        'nav-scrolled': `0 1px 12px rgb(${BRAND_GRADIENT_END_RGB} / 0.25)`,
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
