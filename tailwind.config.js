/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.5rem',
      sm: '0.7rem',
      base: '0.85rem',
      lg: '1.25rem',
      xl: '1.50rem',
      '2xl': '2.0rem',
      '3xl': '2.5rem',
    },
    extend: {
      colors: {
        dark: '#191E24',
        white: '#FFFFFF',
        'light-gray': '#bbbbbb',
        black: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
