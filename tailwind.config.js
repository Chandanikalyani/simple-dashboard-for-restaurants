/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      flexBasis:{
        20:'20%', //flexbasis for the sideMenu
        80:'80%' //flexbasis for the body
      },

      height:{
        '90': '90%'
      },
      colors:{
         SideMenuBg:'#181818',
         BodyBg:'#ffff',
         titleColor:'#2b2b2b',
         hoverColor:'#262626',
         textColor:'#e2e2e2',
         colorOne:'#f6eff4',
         colorTwo:'#fbf0ef',
         colorThree:'#f1fcf0',
         colorFour:'#fcf8ef',
         gradient:'linear-gradient (red(56,194,166),rgb(124,83,151) )'

      },

    },
  },
  plugins: [],
}

