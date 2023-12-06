const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        special: "#FFD369",
        background: "#EEEEEE",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Roboto"],
        body: ["Roboto"],
      },
    },
  },
  plugins: [],
};
