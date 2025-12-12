/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EBF5FB', // Morning Sky/Ice Blue (from v2)
        secondary: '#F2849E', // Soft Peony (Elegant & Fresh)
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
        'glow-secondary': '0 0 20px -5px rgba(242, 132, 158, 0.7)', // Glow for secondary color
        'glow-primary': '0 0 20px -5px rgba(235, 245, 251, 0.8)', // Glow for primary color (subtle)
      },
    },
  },
  plugins: [],
}
