/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          DEFAULT: '#CE9D41',
          '50': '#F4E8D3',
          '100': '#EFE0C3',
          '200': '#E7CFA2',
          '300': '#DFBE82',
          '400': '#D6AE61',
          '500': '#CE9D41',
          '600': '#AB7F2C',
          '700': '#7E5E21',
          '800': '#523D15',
          '900': '#251B0A'
        },
        'acc': {
          DEFAULT: '#39435F',
          '50': '#ACB4CD',
          '100': '#9FA9C5',
          '200': '#8592B6',
          '300': '#6C7BA7',
          '400': '#586792',
          '500': '#485579',
          '600': '#39435F',
          '700': '#242A3C',
          '800': '#0F1219',
          '900': '#000000'
        },
        bg: "#FAFDF6",
        txt: "#171B26"
      }
    },
  },
  plugins: [],
}
