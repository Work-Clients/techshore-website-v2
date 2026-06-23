/** @type {import('tailwindcss').Config} */
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
        'bg-main': '#f8f9fa',
        'bg-card': '#f1ede4',
        'text-main': '#1e293b',
        border: '#e2e0d9',
        muted: '#556275',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(10, 22, 48, 0.04), 0 6px 20px rgba(10, 22, 48, 0.05)',
        'card-hover': '0 4px 12px rgba(10, 22, 48, 0.06), 0 16px 40px rgba(10, 22, 48, 0.08)',
        premium: '0 2px 6px rgba(10, 22, 48, 0.04), 0 12px 32px rgba(10, 22, 48, 0.06)',
        'premium-hover': '0 6px 20px rgba(10, 22, 48, 0.08), 0 20px 48px rgba(10, 22, 48, 0.10)',
        glow: '0 0 40px rgba(223, 177, 91, 0.15)',
        'secondary-glow': '0 0 24px rgba(223, 177, 91, 0.25), 0 4px 20px rgba(223, 177, 91, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
