/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './*.html',
    './src/**/*.html',
    './styles/**/*.scss'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#47575C',
          80: '#6B777B',
          60: '#919A9D',
          40: '#B0B6B8',
          20: '#DADDDE'
        },
        gray: {
          100: '#AEAEAE',
          80: '#BEBEBE',
          60: '#D0D0D0',
          40: '#D8D8D8',
          20: '#E7E7E7'
        },
        marble: {
          100: '#D0D0CC',
          80: '#DEDEDA',
          60: '#E5E5E1',
          40: '#E7E7E5',
          20: '#F5F5F4',
        },
        text: {
          primary: '#303030',
          secondary: '#5A5A5A',
          tertiary: '#767676'
        },
        'white/dark': '#F7F7F6'
      }
    }
  },
  plugins: []
}
