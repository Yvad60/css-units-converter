/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-public-sans)", ...fontFamily.sans],
      },
      colors: {
        primary_chocolate: "#4F4050",
        primary_light: "#FFFBFF",
        primary_gray: "#8F858F",
      },
    },
  },
  plugins: [],
};
