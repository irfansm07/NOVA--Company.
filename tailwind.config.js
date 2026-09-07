/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F7F4',
          dark: '#12151B',
        },
        ink: {
          DEFAULT: '#14171C',
          soft: '#4A5160',
          dark: '#EDEFF3',
        },
        indigo: {
          50: '#EEF1FA',
          100: '#D6DCF0',
          300: '#8797CC',
          500: '#3E4F8C',
          600: '#2B3A67',
          700: '#212C50',
          900: '#161C34',
        },
        gold: {
          100: '#FBEBCB',
          300: '#F0C57C',
          500: '#E8A33D',
          600: '#C6842A',
        },
        sage: {
          100: '#E1EBE4',
          400: '#7FA88F',
          500: '#4F7965',
          600: '#3C5C4E',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 23, 28, 0.04), 0 8px 24px -12px rgba(20, 23, 28, 0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
