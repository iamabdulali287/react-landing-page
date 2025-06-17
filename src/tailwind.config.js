// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ Required for class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust to match your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
