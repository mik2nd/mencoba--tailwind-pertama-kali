/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#a855f7",
        dark1: "#475569",
        dark2: "#94a3b8",
      },

      backgroundImage: {
        background: "url('img/background.jpeg')",
      },

      plugins: [],
    },
  },
};
