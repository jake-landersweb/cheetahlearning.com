/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "100a": "100% auto",
        "a100": "auto 100%",
      },
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
          '50': '#929DBE',
          '100': '#8592B6',
          '200': '#6C7BA7',
          '300': '#586792',
          '400': '#485579',
          '500': '#39435F',
          '600': '#2F384F',
          '700': '#262D3F',
          '800': '#1C212F',
          '900': '#13161F'
        },
        bg: "#FAFDF6",
        txt: "#171B26"
      }
    },
  },
  plugins: [],
}
