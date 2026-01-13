/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0b2f2e',      // Main logo teal
          tealDark: '#082524',  // Dark header teal
          gold: '#c9b07a',      // Primary logo gold
          goldLight: '#f0e1b3', // Gradient gold highlight
          cream: '#f4ecd8',     // Soft text/background gold
          white: '#ffffff',     // Pure white for high-contrast sections
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Brand font
      }
    }
  }
}