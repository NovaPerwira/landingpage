/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '425px'}, // Breakpoint untuk ≤400px
      },
      colors: {
        calm: {
          background: '#F5F7FA',
          foreground: '#2D3748',
          primary: '#FFFFFF',
          accent: '#4F46E5',
        },
      },
    },
  },
  plugins: [],
} 