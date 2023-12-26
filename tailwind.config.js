/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary': '#3c3679',
      'secondary': '#fae0e1',
      'white': '#fff',
      'black': '#000'
    },
    extend: {},
  },
  plugins: [],
}

