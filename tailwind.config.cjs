/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.jsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto','sans-serif']
    },
    screens: {
      mobile: '300px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
