/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/OrnamentBox.svg')",
        "card-banner": "url('./src/assets/CardBanner.svg')",
        "achievement-pattern": "url('./src/assets/Achievement.svg')",
        "ourwork-pattern": "url('./src/assets/OrnamentBox2.svg')",
      },
      colors: {
        primary: "#38C682",
        secondary: "#00796D",
        cultured: "#F8F8F8",
        chineseBlack: "##0C111F",
      },
      screens: {
        xlg: "1282px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
