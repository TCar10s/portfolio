module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
    "./src/app/**/*.{html,ts,css,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "primary-dark": "#5EEAD4",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-light-1": "#C4C4C4",
        "gray-light-2": "#E0E0E0",
        "card-primary": "#1E1E1E",
        "body-dark": "#121212",
        "body-light": "#F2F2F2",
      },
      gridTemplateColumns: {
        blog: "repeat(3, 1fr)",
      },
      gridTemplateAreas: {
        wide: [
          "details details details",
          "sidebar main main",
          "sidebar main main",
          "projects projects projects",
        ],
        slim: ["details", "sidebar", "main", "projects"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
