/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepReddishBrown: "#8d2729",
        deepRed: "#a12c2f",
        gray:"#777777"
      },
    },
  },
  plugins: [],
};
