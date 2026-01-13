/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0b2f2e',      //
          tealDark: '#082524',  //
          gold: '#c9b07a',      //
          goldLight: '#f0e1b3', //
          cream: '#f4ecd8',     //
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], //
      }
    },
  },
  plugins: [],
}