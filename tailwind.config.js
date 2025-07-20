/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira", "sans-serif"],
      },
      boxShadow: {
        custom: "7px 7px 10px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
