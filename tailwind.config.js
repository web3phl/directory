/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-heart": {
          DEFAULT: "#7B3FE4",
          50: "#EAE0FB",
          100: "#DDCEF8",
          200: "#C5AAF3",
          300: "#AC87EE",
          400: "#9463E9",
          500: "#7B3FE4",
          600: "#5D1DCE",
          700: "#47169D",
          800: "#310F6C",
          900: "#1A083A",
        },
        "blue-ribbon": {
          DEFAULT: "#016EEA",
          50: "#A4CEFF",
          100: "#90C4FF",
          200: "#67AEFE",
          300: "#3E98FE",
          400: "#1682FE",
          500: "#016EEA",
          600: "#0154B2",
          700: "#01397A",
          800: "#001F42",
          900: "#00050B",
        },
        "mine-shaft": {
          DEFAULT: "#242424",
          50: "#808080",
          100: "#767676",
          200: "#616161",
          300: "#4D4D4D",
          400: "#383838",
          500: "#242424",
          600: "#080808",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
