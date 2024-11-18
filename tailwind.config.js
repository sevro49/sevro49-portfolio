/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'up': '0 -4px 6px rgba(35, 35, 35, 0.3)'
      },
      fontFamily: {
        regular: ["Gontserrat", "sans-serif"],
        bold: ["Gontserrat-Bold", "sans-serif"],
        light: ["Gontserrat-Light", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
