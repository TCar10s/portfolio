module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
    "./src/app/**/*.{html,ts,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F80ED',
        'gray-1':'#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-light-1': '#C4C4C4',
        'gray-light-2': '#E0E0E0',
      }
    },
  },
  plugins: [],
};
