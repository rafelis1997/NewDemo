/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.jsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto','sans-serif']
    },
    screens: {
      'mobile': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
