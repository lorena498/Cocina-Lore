/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F97316', // orange-600
        'brand-primary-hover': '#FB923C', // orange-500
        'brand-secondary': '#4B5563', // gray-600
        'brand-surface': '#374151', // gray-700
        'brand-background': '#1F2937', // gray-800
        'brand-text': '#F3F4F6', // gray-100
        'brand-cream': '#FFF7ED', // orange-50
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}