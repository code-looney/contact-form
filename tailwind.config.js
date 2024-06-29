/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "hsl(148, 38%, 91%)",
        mdGreen: "hsl(169, 82%, 27%)"
      }
    },
  },
  plugins: [],
}