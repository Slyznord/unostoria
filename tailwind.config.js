/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './*.{html,pug}',
    './src/**/*.{html,pug}',
    './styles/**/*.{scss}'
  ],
  theme: {
    extend: {
      colors: {
        'gray/light': '#EDEDED',
        'gray/base': '#C9C9C9',
        'gray/80': '#C0C0C0',
        'green/100': '#47575C',
        'green/80': '#6B777B',
        'text/default': '#181818',
        'neutral/default': '#303030',
        'white/dark': '#F7F7F6'
      }
    }
  },
  plugins: []
}
