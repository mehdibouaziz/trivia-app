/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        'spinner': '#3C8FE7'
      },
      animation: {
        'spin-inner': 'spin 3s linear infinite',
        'spin-outer': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}
