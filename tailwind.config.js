/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A2E24',   // Deep Forest Green (Ala Fore)
          light: '#F8F6F0',  // Warm Off-White / Cream
          accent: '#C49A6C', // Premium Gold / Coffee
          brown: '#3E2723',  // Espresso Brown
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}