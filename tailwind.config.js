/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '.5rem',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '9': 'repeat(9, minmax(0, 1fr))',
      },
      transitionDuration: {
        '2000': '2000ms',
        '5000': '5000ms',
        '4000': '4000ms',
        '3500': '3500ms',
        '10000': '10000ms',
        '9000': '9000ms'
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        'darkback': '#151A1D',
        'lightback': '#F8F3F4'
      },
      fontFamily: {
        'neue': ['Neue Haas Grotesk Display Pro 55 Roman', 'sans-serif'],
        'gara': ['Garamond ', 'serif']
      },
    },
  },
  plugins: [],


}
