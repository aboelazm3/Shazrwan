/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./pages/**/*.html", 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  darkMode: 'class',
}

