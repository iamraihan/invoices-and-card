/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5A45AA",
      secondary: "#705CF6",
      white: "#ffffff",
      dark: "#171B1E",
      transparent: "transparent",
      gray: {
        20: "#717579",
        50: "#D7D7D7",
      },
    },
    fontFamily: {
      Nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0px 4px 6px rgba(62, 73, 84, 0.04)",
      },
    },
  },
  plugins: [require("daisyui")],
};
