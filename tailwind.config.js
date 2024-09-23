/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#BAC2CB",
          500: "#223B58",
          600: " #1F354F",
          700: "#1B2F46",
        },
        danger: {
          100: "#FBE6E6",
          200: "#F9DADA",
          300: "#F2B2B2",
          500: "#D40808",
          600: "#BF0707",
          700: "#AA0606",
          800: "#7F0505",
        },
        success: {
          100: "#ECF4E6",
          200: "#E3EED9",
          300: "#C4DDB0",
          500: "#419000",
          600: "#3B8200",
          700: "#347300",
          800: "#275600",
        },
        grey: {
          100: "#FEFEFE",
          200: "#FDFDFD",
          300: "#fefefe",
          400: "#F3F2F2",
          500: "#DBDADA",
          900: "#6D6D6D",
        },
      },
      fontSize: {
        h1: "42px",
        h2: "38px",
        h3: "32px",
        h4: "26px",
        title: "22px",
        subTitle: "18px",
        body: "16px",
        description: "14px",
        badges: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
