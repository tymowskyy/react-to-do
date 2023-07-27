/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0f1724',
        'background': '#f4f6fb',
        'background-light': '#fcfcfd',
        'background-dark': '#eef1f9',
        'primary': '#b1ceff',
        'secondary': '#bac9e3',
        'accent': '#3c5d96',
      }
    },
  },
  plugins: [],
}

