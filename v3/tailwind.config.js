/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#00B5CC', // Vibrant Turquoise/Cyan from the shirt
        'brand-coral': '#F8B1A5', // Soft Rose Poudré/Coral from skin
        'brand-gray': '#333333', // Dark Anthracite for text
        'brand-bg-light': '#FFF9F8', // Very light coral/white background
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
