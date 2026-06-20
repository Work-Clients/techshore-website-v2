/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          800: '#0F2240',
          700: '#152D54',
        },
        royal: {
          DEFAULT: '#1E56A0',
          600: '#2563B8',
          500: '#2B6FD4',
        },
        sky: {
          DEFAULT: '#5BACE4',
          300: '#7EC8F2',
          200: '#A8DBFA',
          100: '#D6EEFB',
        },
        electric: {
          DEFAULT: '#0066FF',
          400: '#3399FF',
          600: '#0052CC',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 22, 40, 0.08)',
        'card-hover': '0 12px 40px rgba(10, 22, 40, 0.15)',
        glow: '0 0 40px rgba(91, 172, 228, 0.3)',
        'electric-glow': '0 0 24px rgba(0, 102, 255, 0.4), 0 4px 20px rgba(0, 102, 255, 0.25)',
        'hero-content': '0 8px 40px rgba(10, 22, 40, 0.12), 0 2px 12px rgba(255, 255, 255, 0.6)',
        'glass-card': '0 8px 32px rgba(10, 22, 40, 0.1), 0 2px 8px rgba(0, 102, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
        'glass-card-hover': '0 16px 48px rgba(10, 22, 40, 0.14), 0 4px 16px rgba(0, 102, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float-card': 'float-card 6s ease-in-out infinite',
        'float-card-delayed': 'float-card 7s ease-in-out 1.5s infinite',
        'float-card-slow': 'float-card 8s ease-in-out 0.8s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'float-card': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.35), 0 4px 16px rgba(0, 102, 255, 0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(0, 102, 255, 0.55), 0 6px 24px rgba(0, 102, 255, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
