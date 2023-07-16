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
        blue: '#00ADB5',
        black: '#222831'
      }
    }
  },
  plugins: [],
};
