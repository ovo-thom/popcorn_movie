/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Bebas Neue"', "cursive"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        blue: "#06B6D4",
        red: "#FF005C",
      },
    },
  },
  plugins: [],
};
