/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        Moderate_violet: "hsl(263, 55%, 52%)",
        Very_dark_grayish_blue: "hsl(217, 19%, 35%)",
        Very_dark_blackish_blue: "hsl(219, 29%, 14%)",
        White: "hsl(0, 0%, 100%)",
        Light_gray: "hsl(0, 0%, 81%)",
        Light_grayish_blue: "hsl(210, 46%, 95%)"
      }, 
      fontFamily: {
        barlow_semi_condensed: ['Barlow Semi Condensed']
      },
      backgroundPosition: {
        x_80_y_0: "80% 0%"
      },
      padding: {
        main: "8% 12%"
      }
    },
  },
  plugins: [],
}
