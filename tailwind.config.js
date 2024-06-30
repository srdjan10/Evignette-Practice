/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontserratLight: ["Montserrat-Light", "sans-serif"],
        MontserratVariableFont: ["Montserrat-VariableFont", "sans"],
        MontserratBold: ["Montserrat-Bold", "sans"],
        MontserratExtraLight: ["Montserrat-ExtraLight", "sans"],
      },
    },
  },
  plugins: [],
};
