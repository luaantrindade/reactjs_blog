const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f8fa", // Light green for background
        primaryText: "#2C3E50", // Dark blue for primary text
        accent: "#6A5ACD", // Soft purple for primary accents
        secondaryAccent: "#32CD32", // Vibrant green for highlights
        cardBg: "#ffffff", // Plain white for card backgrounds
        gradientStart: "#6A5ACD", // Soft purple for gradients
        gradientEnd: "#00CED1", // Aqua blue for gradients
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        heading: ["Poppins", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(135deg, #6A5ACD, #32CD32)", // Purple-to-green gradient
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};