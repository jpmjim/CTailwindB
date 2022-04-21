module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://jpmjim.github.io/CTailwindB/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('https://jpmjim.github.io/CTailwindB/public/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('https://jpmjim.github.io/CTailwindB/public/img/yosemite.jpg')",
        'LA': "url('https://jpmjim.github.io/CTailwindB/public/img/LA.jpg')",
        'seattle': "url('https://jpmjim.github.io/CTailwindB/public/img/seattle.jpg')",
        'new_york': "url('https://jpmjim.github.io/CTailwindB/public/img/new_york.jpg')",
        'norway': "url('https://jpmjim.github.io/CTailwindB/public/img/norway.jpg')",
        'sydney': "url('https://jpmjim.github.io/CTailwindB/public/img/sydney.jpg')",
        'miami': "url('https://jpmjim.github.io/CTailwindB/public/img/miami.jpg')",
        'switzerland': "url('https://jpmjim.github.io/CTailwindB/public/img/switzerland.jpg')",
        'bali': "url('https://jpmjim.github.io/CTailwindB/public/img/bali.jpg')",
        'chicago': "url('https://jpmjim.github.io/CTailwindB/public/img/chicago.jpg')",
        'europe': "url('https://jpmjim.github.io/CTailwindB/public/img/europe.jpg')",
        'iceland': "url('https://jpmjim.github.io/CTailwindB/public/img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
