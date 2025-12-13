/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          light: '#EBF5FB', // Morning Sky/Ice Blue (Backgrounds)
          DEFAULT: '#6BA5D6', // Soft Blue (Text accents, Icons)
          dark: '#1e3a8a', // Deep Blue for strong text
        },
        'brand-pink': {
          DEFAULT: '#F2849E', // Soft Peony (Elegant & Fresh)
          light: '#ffc1d3',
        },
        background: '#FFFAF8', // Very light warm off-white
        text: '#2c2c2c', // Soft black/Dark Grey
        'text-light': '#585858', // Ligher grey for subtext
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      boxShadow: {
        'glow-pink': '0 0 20px -5px rgba(242, 132, 158, 0.7)', // Glow for pink
        'glow-blue': '0 0 20px -5px rgba(235, 245, 251, 0.8)', // Glow for blue
      },
    },
  },
  plugins: [],
}
