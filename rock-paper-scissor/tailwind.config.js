/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        "rock": "#eb9e10",
        "scissors": "#de3b5a",
        "paper": "#4564f3"
      }
    },
    fontFamily: {
      metalmania: ['Metalmania', 'sans-serif'],
    },
  },
  plugins: [],
}

