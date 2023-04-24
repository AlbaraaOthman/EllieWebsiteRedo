/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'tiny' : '.5rem',
      },
      transitionDuration: {
        '2000':'2000ms',
        '5000':'5000ms'
      },
      colors: {
        'customblue': 'var(--blue-custom)',
        'custom-blue': '#7cdbf5',
        'custom-blue-hover': '#92e1f7',
        'custom-orange': '#ffb253',
        'like-button-orange': '#ff6624',

        'dback': '#23272b',
        'dblue': '#2d545e',
        'dblue-hover': '#94a7a87',
        'dorange': '#a87638',
        'lb': '#d95821',
        'dtext':'#354155',
        'dbord':'#75777A',
      }
    },
  },
  plugins: [],

  
}
