/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'hp-yellow': '#efbc2f',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      gridTemplateColumns: {
        // 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
