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
      },
    },
  },
  plugins: [],
}
