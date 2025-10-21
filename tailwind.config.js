/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["M PlUS 1p", "serif"],
      },
      boxShadow: {
        custom: "7px 7px 10px rgba(255, 255, 255, 0.6)",
      },
      colors: {
        "tron-yellow": "#f7c530ff",
        "tron-blue": "#6ee2ffff",
        "tron-grey": "#d0dfe6ff",
      },
    },
  },
  plugins: [],
};
