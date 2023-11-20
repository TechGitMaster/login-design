/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'darkPrimary': '#232027',
      'white': '#FFFFFF',
      'gray': '#E8E8E8',
      'gray-light': '#494949',
      'pink': '#FFB7D5',
      'red': '#7C1415',
      'red2': '#EE2E24',
    }
  },
  plugins: [],
}