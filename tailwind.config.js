const production = process.env.HUGO_ENVIRONMENT === 'production';

module.exports = {
  purge: {
    content: ['./layouts/**/*.html'],
    enabled: !production,
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
