/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "950px" },
        mobile: { max: "600px" },
      },

      colors: {
        lightBlue: "#e2eafe",
        darkBlue: "#000b40",
        midOrange: "#ff1f01",
        darkGray: "#22292C",
        lightGray: "#8B8B8B",
        lighterGray: "#ADADAD",
      },

      backgroundImage: {
        hero: "url('./images/PHOTO-2024-08-02-21-11-32 - Copy.jpg')",
        heroMobile: "url('./src/assets/bg-hero-mobile.svg')",
      },

      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};

