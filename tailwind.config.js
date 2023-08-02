/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html", "./client/**/*.js"],
  theme: {
    screens: {
      s: { min: "320px", max: "767px" },

      m: { min: "768px", max: "1279px" },

      l: { min: "1280px" },
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(35px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.2s ease-out",
      },
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        black2: "#030303",
        red_landing: "#E93945",
        red_login: "#FF153C",
        red_hover: "#CC1030",
        red: "#C73E4E",
        gray1: "#E1E1E1",
        gray2: "#C4C4C4",
        gray3: "#A6A6A6",
        gray4: "#898989",
        gray5: "#6B6B6B",
        gray6: "#565656",
        gray7: "#404040",
        gray8: "#2B2B2B",
        gray9: "#151515",
        darkbg1: "#191919",
        darkbg2: "#212121",
        darkbrown: "#38302e",
        brown: "#988574",
        lightbrown: "#c7b39a",
        green: "#abd375",
        lightyellow: "#ffc",
        yellow: "#e8ca58",
        khaki: "#f0e68c",
        orange: "#eea60a",
        blue: "#6aaee6",
        silver: "#999",
      },
      backgroundImage: {
        xFilledMark: "url('./../image/search/Device=Desktop, Type=Filled.png')",
        xNofilledMark:
          "url('./../image/search/Device=Desktop, Type=No_Filled.png')",
      },
    },
  },
  plugins: [],
};
