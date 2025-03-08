/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      grey:'#696969',
      red: '#C31E24',
      purple:'#1A2FAD',
      blue:'#1A2FAD',
      green: '#01472B',
      darkred:'#950606'

    },
    extend: {
      fontFamily: {
        graffiti: ['Graffiti font', 'sans-serif'],
        ten: ['Tengah Wengi','sans-serif'],
        robinez: ['Robienz', 'sans-serif'],
        basramele: ['Basramle', 'sans-serif']
     }
    },
  },
  plugins: [],
}

