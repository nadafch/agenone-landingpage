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
        xl: "1282px",
        "3xl": "1920px",
      },
      keyframes: {
        "infinite-scroll-y-tb": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "infinite-scroll-y-t": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        "infinite-scroll-x-tl": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-30%)",
          },
        },
        "infinite-scroll-x-tr": {
          "0%": {
            transform: "translateX(-30%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "marquee-tb": "infinite-scroll-y-tb 15s linear infinite",
        "marquee-t": "infinite-scroll-y-t 15s linear infinite",
        "marquee-x-tr": "infinite-scroll-x-tr 30s linear infinite",
        "marquee-x-tl": "infinite-scroll-x-tl 30s linear infinite",
      },
    },
  },
  plugins: [],
};
