/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('/src/modules/Share/assets/images/pexels-photo-887828.jpeg')"
      },
      fontFamily: {
        sans: ['Arial']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  }
}
