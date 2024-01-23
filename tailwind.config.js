/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#EEEEEE',
        gray: '#393E46',
        blue: 'rgba(0, 173, 181, 0.6)',
        black: '#222831'
      },
      transitionDelay: {
        75: '75ms'
      },
      fontFamily: {
        primary: ['Playfair Display'],
        secondary: ['Vollkorn']
      }
    }
  },
  plugins: [],
};
