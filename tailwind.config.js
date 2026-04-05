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
        primary:          '#0D4A56',
        secondary:        '#467b88',
        tertiary:         '#c0faff',
        quanterary:       '#fb9039',
        pentanary:        '#F9F9F4',
        'font-primary':   '#2e384d',
        'font-secondary': '#8d9db1',
        'font-tertiary':  '#f8fafa',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        app: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(150deg, #467b88 0%, #F9F9F4 100%)',
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
