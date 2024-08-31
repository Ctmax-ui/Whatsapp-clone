/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary': '#00a884',
        'secondary-gray': '#f0f2f5',
        'secondary-green': '#d9fdd3',
        'light-back':'#efeae2'
      }
    },
  },
  plugins: [],
}

