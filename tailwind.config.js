/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f42c37",
        secondary:"#f42c37",
        brandyellow:"#fdc62e",
        brandGreen:"#2dcc6f",
        brandwhite:"#eeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }


      }
    },
  },
  plugins: [],
}