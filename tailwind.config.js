/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'bg': '#ABD9BA',
      'text': '#000000',
      'card': '#EDEF6E',
      'transparent': 'transparent'
    },
    extend: {
     boxShadow: {
        'md': '0px 0px 3px 0px rgba(87, 225, 195, 1)',
        'lg': '0px 0px 6px 0px rgba(87, 225, 195, 1)',
      },
      gridAutoRows: {
        '100': '100px',
        '85': '85px',
        '65': '65px',
        '60': '60px',
        '55': '55px',
        '45': '45px',
        '40': '40px',
      },
      spacing: {
        small1: '4px',
        small2: '8px',
        small3: '12px',
        default: '16px',
        medium1: '20px',
        medium2: '24px',
        medium3: '32px',
        large1: '40px',
        large2: '48px',
        large3: '56px'
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color, opacity',
      },
      transitionDuration: {
        '300': '300ms',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    screens: {
      'tablet': {'max': '1023px'},
      'phone': {'max': '767px'},
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

