/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': "#0D6EFD",
        "primary2": "#435F89",
        "secondery": "#707070",
        "black": "#A7A7A7",
        "blacker": "#000101",
        "wither": "#F2F1F6",
        "brown": "#0A0A0A",
        "textdark": "#E5E6E8",
      }
    },
  },
  plugins: [],
};