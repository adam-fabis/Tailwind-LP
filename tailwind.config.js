/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "#26baa4",
        lightBlue: "#6173ff",
        darkGrayishBlue: "#4c545d",
        grayishBlue: "#9fabb2",
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [],
};
