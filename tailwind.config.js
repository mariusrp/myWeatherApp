/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#006edb',
        'border-blue': '#cce2f8',
        'lightblue-custom': '#eaf5fb',
        'bg-color': '#f6fbfe',
      },
    },
  },
  plugins: [],
};
