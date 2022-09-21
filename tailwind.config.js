/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '550px',
      md: '800px',
      lg: '1200px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    darkMode: 'class',
    extend: {
      colors: {
        primary: '#ff5733',
        secondary: '#fffc33',
      },
    },
  },
  
  plugins: [],
}
