/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#253062",
        "primary-text": "#000C24",
        "card-title": "#7C0792"
      }
    },
  },
  plugins: [],
}

