/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx"],//t=tailwinds
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

