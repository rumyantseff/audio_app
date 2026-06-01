/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange scale (generated from #FFC89E)
        orange: {
          50:  '#FFF1E5',
          100: '#FFE2CC',
          200: '#FFC89E',
          300: '#FFC599',
          400: '#FFA866',
          500: '#FF8B33',
          600: '#CC5800',
          700: '#994200',
          800: '#662C00',
          900: '#331600',
          950: '#1A0B00',
        },
        // Warm neutral scale — replaces Tailwind's default cool gray so every
        // `gray-*` usage (esp. dark-mode backgrounds/text) reads warm.
        gray: {
          50:  '#FBF6F1',
          100: '#F3EBE3',
          200: '#E4D6C9',
          300: '#CDB9A7',
          400: '#A88D78',
          500: '#7E6552',
          600: '#5C4636',
          700: '#412F22',
          800: '#2A1C12',
          900: '#1C1109',
          950: '#120A04',
        },
        // Semantic tokens mapped onto the orange scale
        primary:          '#FF8B33', // orange-500 — button bg (white text), light accent
        secondary:        '#FF8B33', // orange-500 — links / hover (light)
        tertiary:         '#FFC599', // orange-300 — dark-mode accent (glows on dark)
        quanterary:       '#FF8B33', // orange-500 — secondary accent (fire/like/sun)
        pentanary:        '#FFF1E5', // orange-50  — page background (light)
        'font-primary':   '#331600', // orange-900 — primary text (light)
        'font-secondary': '#B5784D', // muted warm — secondary text
        'font-tertiary':  '#FFF1E5', // orange-50  — text on dark / accent bg
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        app: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(150deg, #FF8B33 0%, #FFE2CC 100%)',
      },
      width: {
        sidebar:        '240px',
        'sidebar-mini': '72px',
      },
      padding: {
        'sidebar-mini': '72px',
        'sidebar':      '240px',
      },
      minWidth: { player: '360px' },
      maxWidth: { player: '600px' },
    },
  },
  plugins: [],
}
