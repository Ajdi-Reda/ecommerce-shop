/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
   fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
  },
  colors: {
    darkBlue: '#0C134F',
    navy: '#1D267D',
    purp: '#5C469C',
    lightPurp: '#D4ADFC'
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif']
  },
  plugins: [
     require('flowbite/plugin')
  ],
}}}

