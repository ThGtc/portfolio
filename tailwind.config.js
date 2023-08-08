/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  // content: [
  //   "./app/**/*.{js,ts,jsx,tsx}",
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(15.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(15.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(12.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        wave: 'wave 3s infinite'
      },
    },
    // colors:{
    //   'header':'#1c1b22',
    //   'header-white': '#ffffff',
    // }
  },
  plugins: [],
}
