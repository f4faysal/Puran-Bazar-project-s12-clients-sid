/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        doctorPotal: {
          primary: "#60cae4",

          secondary: "#325eac",

          accent: "#4F772D",

          neutral: "#e8edf2",

          "base-100": "#FFFFFF",

          // info: "#3ABFF8",

          // success: "#36D399",

          // warning: "#FBBD23",

          // error: "#F87272",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
