/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "400px":"400px"
      },
      maxWidth: {
        '14': '100%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'solidHeading': '#42446E',
        'darkContent': '#666666',
        'SolidHeadingDarkMode': '#cccccc',
        'lightContent': '#A7A7A7',
        'buttonText': '#018C0F',
        'buttonSuccess': '#D7FFE0',
        "darkMode": '#191919',
        "textLight": '#d9d9d9',
        "cardDark":"#363636",
        "darkModeSecondary":"#141414",
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

