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
        "card-primary": "#1e293b",
        "body-dark": "#0f172a",
        "body-light": "#F2F2F2",
      },
      gridTemplateRows: {
        blog: "auto",
      },
      gridTemplateColumns: {
        blog: "repeat(3, 1fr)",
      },
      gridTemplateAreas: {
        wide: [
          "details details details",
          "sidebar blog blog",
          "sidebar hobbies hobbies",
          "filter filter filter",
          "project project project",
        ],
        slim: ["details", "sidebar", "blog", "hobbies", "filter", "project"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
