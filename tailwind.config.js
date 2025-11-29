/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f6ff',
          100: '#e6edff',
          200: '#c4d4ff',
          300: '#9fb8ff',
          400: '#6f92ff',
          500: '#3d66ff',
          600: '#2749db',
          700: '#1d37a8',
          800: '#172c84',
          900: '#14256c',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
