// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f8fa', // Soft light gray for background
        primaryText: '#333333', // Dark charcoal for primary text
        accent: '#5A8DEE', // Soft blue for primary accents
        secondaryAccent: '#F59E42', // Warm apricot for highlights
        cardBg: '#ffffff', // Plain white for card backgrounds
        gradientStart: '#BEE3F8', // Light blue for gradients
        gradientEnd: '#C3DAFE', // Soft lavender for gradients
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        heading: ['Playfair Display', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #BEE3F8, #C3DAFE)', // Light gradient for hero sections
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
