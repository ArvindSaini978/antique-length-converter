/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xsm':'440px',
      xsm:'540px',
      sm: '640px',
      md: '768px',
      xmd:'868px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      boxShadow:{
        custom: '0px 0px 15px -2px black'
      },
      fontFamily: {
        segoe:'Segoe UI'
      },
      fontSize: {
        '8.5xl': ['6.2rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'gradient-custom':'linear-gradient(45deg, #ccd9cc, #eb9595)',
        'gradient-custom1':'linear-gradient(-10deg, #9202ffc4, #00ff4e)'
      }
    },
  },
  plugins: [],
}
