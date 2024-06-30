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
        focuslightGreen: "hsl(148, 38%, 99%)",
        mdGreen: "hsl(169, 82%, 27%)",
        darkGreen: "hsl(169, 82%, 20%)",
        mdGray: "hsl(186, 15%, 59%)",
        darkGray: " hsl(187, 24%, 22%)"
      }
    },
  },
  plugins: [],
}