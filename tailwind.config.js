/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3E6F5', // Light Lavender Blue
        secondary: '#D4AFB9', // Bourgeois Pink (Dusty Rose)
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
    },
  },
  plugins: [],
}
