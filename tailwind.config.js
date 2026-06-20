/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B7D3D',
          hover: '#55652F',
          50: '#EEF1E6',
          100: '#DDE4CE',
          200: '#C5CFAB',
        },
        accent: {
          DEFAULT: '#A77A53',
          light: '#D4C4B0',
        },
        background: '#F8F6F1',
        surface: '#FFFFFF',
        'section-alt': '#F2EEE5',
        heading: '#1E2328',
        body: '#5E6773',
        border: '#E2DDD3',
        success: '#7A9A67',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(30, 35, 40, 0.06)',
        'card-hover': '0 12px 40px rgba(30, 35, 40, 0.10)',
        glow: '0 0 40px rgba(107, 125, 61, 0.25)',
        'primary-glow': '0 0 24px rgba(107, 125, 61, 0.35), 0 4px 20px rgba(107, 125, 61, 0.2)',
        'hero-content': '0 8px 40px rgba(30, 35, 40, 0.10), 0 2px 12px rgba(255, 255, 255, 0.6)',
        'glass-card': '0 8px 32px rgba(30, 35, 40, 0.08), 0 2px 8px rgba(107, 125, 61, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
        'glass-card-hover': '0 16px 48px rgba(30, 35, 40, 0.12), 0 4px 16px rgba(107, 125, 61, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 125, 61, 0.3), 0 4px 16px rgba(107, 125, 61, 0.18)' },
          '50%': { boxShadow: '0 0 32px rgba(107, 125, 61, 0.45), 0 6px 24px rgba(107, 125, 61, 0.28)' },
        },
      },
    },
  },
  plugins: [],
}
