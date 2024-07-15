/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jh': ['Jomolhari', 'sans-serif'],
      },
      colors:{
        'light':"rgba(89, 151, 203, 0.18)",
      }
    },
  },
  plugins: [],
}

