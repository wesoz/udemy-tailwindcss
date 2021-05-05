
const { colors } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
