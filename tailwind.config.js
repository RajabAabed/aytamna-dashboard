/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      color: {
        primary: {
          100: "#BAC2CB",
          500: "#223B58",
          600: " #1F354F",
          700: "#1B2F46",
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
