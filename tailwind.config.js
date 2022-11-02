/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    fontFamily: {
      default: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      displayName: ['HelveticaNow', 'Helvetica', 'sans-serif'],
      headerName: ['Tiempos', 'Times New Roman', 'serif'],
      button: ['Inter', 'sans-serif'],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
