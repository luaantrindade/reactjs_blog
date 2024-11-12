// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f8fa", // Soft light gray for background
        primaryText: "#333333", // Dark charcoal for primary text
        accent: "#5A8DEE", // Soft blue for primary accents
        secondaryAccent: "#F59E42", // Warm apricot for highlights
        cardBg: "#ffffff", // Plain white for card backgrounds
        gradientStart: "#BEE3F8", // Light blue for gradients
        gradientEnd: "#C3DAFE", // Soft lavender for gradients
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        heading: ["Playfair Display", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(135deg, #BEE3F8, #C3DAFE)", // Light gradient for hero sections
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
