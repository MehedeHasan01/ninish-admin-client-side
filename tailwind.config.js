/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],

  theme: {
    extend: {
        colors:{
            bgBlueGray:'#F4F7FD'
        }
    },
  },
  plugins: [require("daisyui")],

}
