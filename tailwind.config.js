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
        black: '#070707',
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3054BA',
          secondary: '#FFFFFF',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#11151A',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
