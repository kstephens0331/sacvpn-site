/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D2B53',       // Navy Blue
        secondary: '#D72638',     // Victory Red
        accent: '#4F97A3',        // Sky Blue Tint
        background: '#F9F9F9',    // White Smoke
        dark: '#1C1C1E',          // Charcoal Gray
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}