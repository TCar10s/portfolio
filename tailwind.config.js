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
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-light-1": "#C4C4C4",
        "gray-light-2": "#E0E0E0",
        "card-primary": "#1e293b",
        "body-dark": "#0f172a",
        "body-light": "#F2F2F2",
      },
      gridTemplateColumns: {
        blog: "30% 70%",
      },
    },
  },
  plugins: [],
};
