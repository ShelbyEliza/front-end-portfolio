/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "creamy-peach": "#f8a68b",
        "english-walnut": "#402d27",
        "hatoba-pigeon": "#9c88a0ff",
        "painters-canvas": "#f8f2dfff",
        summit: "#8cb2b4ff",
        biscuit: "#feebc8",
        "we-peep": "#fdd8d8",
        "chewing-gum": "#ebadad",
      },
      gradientColorStops: {
        "creamy-peach": "#f8a68b",
        "english-walnut": "#402d27",
        "hatoba-pigeon": "#9c88a0ff",
        "painters-canvas": "#f8f2dfff",
        summit: "#8cb2b4ff",
      },
    },
  },
  plugins: [],
};
