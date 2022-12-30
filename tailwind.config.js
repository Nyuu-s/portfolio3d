const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        raleway: ["RALEWAY", "sans-serif"]
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',


      },
      textColor:{
        'status-on' : '#04C9C0',
        'status-off' : '#C23D0B',
        'status-hiatus' : '#C3C904',
        'status-done' : '#31DE45'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'flow-left-slow': 'flowleft 5s linear infinite',
        'flow-right-slow': 'flowright 5s linear infinite',
        
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flowleft:{
          'from': {left: '100%'},
          'to': {left: '-200%'},
        },
        flowright:{
          'from': {right: '100%'},
          'to': {right: '-100%'},
        },
      }


 
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
