/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [],
}
