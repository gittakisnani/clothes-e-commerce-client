/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: 'rgb(var(--color-light-primary))' ,
        secondaryLight: 'rgb(var(--color-light-secondary))',
        purplePrimary: 'rgb(var(--purple-primary))',
        purpleSecondary: 'rgb(var(--purple-secondary))'
      }
    },
  },
  plugins: [],
}