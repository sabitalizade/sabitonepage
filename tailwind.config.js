/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondarylight: "#6c757d",
        secondarydark: "#171727",
        primarylight: "#1F1F2B",
        primarydark: "#0F0F1B",
      },
    },
  },
  plugins: [],
};
