/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor:theme=>({
      "mainblack":"#090C11",
      "white":"#ffffff",
      'share':'#4E1C3D',
      'email':'#3C1414',
      "travel":'#56A631',
      "true":"#8731A6"
    }),
    borderColor:theme=>({
      "head-b":"#0F1621",
      'new':'#EF4444',
      'email':'#E64A4A'
    }),
    textColor:{
      'color': "#C1BABA",
      'white':"#fff",
      'timecolor':'#c1baba'
    },
    gradientColorStops: theme => ({
      'navfrom': '#e64a4a',
      'navto': '#981616',
      'btnfrom': 'rgba(230,74,74)',
      'btnto': 'rgba(152,22,22)',
    }),
    boxShadow:{
      'card':'-3px 7px 12px rgba(243, 86, 86, 0.23)'
    }
  },
  plugins: [],
}

