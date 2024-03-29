/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        secondarylight: "#fff",
        secondarydark: "#171727",
        primarylight: "#F5F5F5",
        primarydark: "#0F0F1B",
      },
    },
  },
  plugins: [],
};
