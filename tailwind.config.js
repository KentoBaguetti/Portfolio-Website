/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        jp: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        void: "#0A0A0A",
        offwhite: "#F5F5F7",
        accent: "#5B7FE8",
        pitch: "#2FB67C",
        surface: "#161616",
        hairline: "#2A2A2C",
      },
    },
  },
  plugins: [],
};
