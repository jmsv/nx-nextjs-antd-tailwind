const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      blue: colors.indigo,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
