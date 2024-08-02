// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        minimal: {
          black: '#1D1D1D',
          white: '#FFFFFF',
          gray: '#F5F5F5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
