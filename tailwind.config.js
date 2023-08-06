/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "991px",
      // => @media (min-width: 991px) { ... }

      lg: "1281px",
      // => @media (min-width: 1281px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#cccccc",
        ftrborder: "#a7a7a7",
        darkblue: "rgb(20, 24, 35)",
        sndbtn: "rgb(30, 132, 253)",
        blk: "rgb(15, 19, 31, 0.77);",
      },

      height: {
        "70v": "70vh",
      },
    },
  },
  plugins: [],
};
