/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#09101A',
        'primary2': '#02050A',
        'secondary': '#55E6A5',
        'ternary': '#141C27'
      },
    },

  },
  plugins: [],
}

