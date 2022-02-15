module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 900
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
