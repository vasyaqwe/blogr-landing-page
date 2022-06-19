/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '500px',
      md: '800px',
      lg: '980px',
      xl: '1300px'
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'overpass': ['Overpass', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'pattern-intro-mobile': "url('../images/bg-pattern-intro-mobile.svg')",
        'pattern-intro-desktop': "url('../images/bg-pattern-intro-desktop.svg')",
        'pattern-circles': "url('../images/bg-pattern-circles.svg')"
      },
      colors: {
        myRed: 'hsl(356, 100%, 66%)',
        lightRed: 'hsl(355, 100%, 74%)',
        myBlue: 'hsl(208, 49%, 24%)',
        darkBlue: 'hsl(237, 17%, 21%)',
        desaturatedBlue: 'hsl(237, 23%, 32%)',
        lightGrey: 'hsl(240, 2%, 79%)',
        grey: 'hsl(207, 13%, 34%)',
        darkGrey: 'hsl(240, 10%, 16%)',
        gradientOrange: 'hsl(13, 100%, 72%)',
        gradientRed: 'hsl(353, 100%, 62%)',


      }
    },
  },
  plugins: [],
}
