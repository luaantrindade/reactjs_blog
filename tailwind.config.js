// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Add some pastel colors for the glass background
        glassBlue: "rgba(173, 216, 230, 0.15)",
        glassPurple: "rgba(147, 112, 219, 0.15)",
      },
      backdropBlur: {
        // Adding custom blur sizes for more depth control
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      opacity: {
        // Customize opacity values for glass effects
        15: "0.15",
        85: "0.85",
      },
      boxShadow: {
        glass: "0 4px 10px rgba(255, 255, 255, 0.2)", // Soft shadow for depth
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // Use any font you prefer
      },
    },
  },
  plugins: [],
};
