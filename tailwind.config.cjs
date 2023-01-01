/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "daisyui-"
  }
}
