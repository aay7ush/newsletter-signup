/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'clr-tomato': 'hsl(4, 100%, 67%)',
        'clr-slate-grey': 'hsl(234, 29%, 20%)',
        'clr-charcoal-grey': 'hsl(235, 18%, 26%)',
        'clr-grey': 'hsl(231, 7%, 60%)',
        'clr-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
