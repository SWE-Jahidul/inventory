/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "p-purple" :"#081A51"
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

