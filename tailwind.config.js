/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        lora: ['var(--font-lora)'],
      }
     },
    plugins: [],
  },
};
