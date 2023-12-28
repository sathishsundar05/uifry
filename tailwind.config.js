/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary': {
        100: '#F6F6F9',
        DEFAULT: '#3c3679',
        900: '#201C44'
      },
      'secondary': '#fae0e1',
      'white': '#fff',
      'black': '#000',
      'gray': {
        100: '#D0D0D0',
        DEFAULT: '#F6F6F9',
      },
      'blue': {
        100: '#F5F9FF',
        DEFAULT: '#007AFF',
      },
      'pink': '#DD2590',
      'green': '#2FB67E',
      'yellow': '#ECB22D'
    },
    extend: {},
  },
  plugins: [],
}

