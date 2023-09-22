/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#99e07b",

          secondary: "#1edbbb",

          accent: "#adafea",

          neutral: "#281d35",

          "base-100": "white",

          info: "#769fd5",

          success: "#55dda7",

          warning: "#f1ca09",

          error: "#fb2d6e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
