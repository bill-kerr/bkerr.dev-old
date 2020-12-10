const production = process.env.HUGO_ENVIRONMENT === 'production';
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./layouts/**/*.html'],
    enabled: production,
  },
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue,
      lblue: colors.lightBlue,
    },
    extend: {
      boxShadow: {
        'blue-200':
          'rgb(255, 255, 255) 0px -0.125em 0px 0px inset, rgb(191, 219, 254) 0px -0.5em 0px 0px inset',
        'blue-100':
          'rgb(255, 255, 255) 0px -0.125em 0px 0px inset, rgb(219, 234, 254) 0px -0.5em 0px 0px inset',
      },
      backgroundImage: {
        wave: 'url(/img/wave.svg)',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['group-hover'],
      transitionProperty: ['group-hover'],
      transitionDuration: ['group-hover'],
    },
  },
  plugins: [],
};
