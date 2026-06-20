/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,css}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0a1630',
        'accent-gold': {
          DEFAULT: '#dfb15b',
          dark: '#9a7b3c',
        },
        'bg-main': '#0a1630',
        'bg-card': '#ffffff',
        'text-main': '#1e293b',
        border: '#dce3ed',
        muted: '#556275',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.25), 0 16px 48px rgba(0, 0, 0, 0.2)',
        premium: '0 4px 20px rgba(0, 0, 0, 0.18), 0 12px 40px rgba(0, 0, 0, 0.15)',
        'premium-hover': '0 8px 28px rgba(0, 0, 0, 0.28), 0 20px 56px rgba(0, 0, 0, 0.22)',
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
