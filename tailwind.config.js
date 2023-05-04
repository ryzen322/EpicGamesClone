/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      height: {
        "35rem": "35rem",
      },
      colors: {
        primary: "#121212",
        secondary: "#2A2A2A",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
