const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    letterspacing: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      rose: colors.rose,
      yellow: colors.amber,
      lightBlue: colors.lightBlue,
      dracula: {
        900: "#1E1F29",
        800: "#252633",
        700: "#282A36",
        600: "#37394a",
      },
      lightGreen: {
        400: "#42ff71",
        500: "#50FA7A",
        700: "#41d967",
        900: "#32b352",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
