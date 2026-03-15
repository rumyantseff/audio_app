export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  app: {
    head: {
      titleTemplate: '%s | Catch a vibe, find yours',
      title: 'Mbrosia',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/musix_logo.svg' }],
      script: [
        {
          innerHTML: `(function(){var m=localStorage.getItem('color-mode');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          type: 'text/javascript',
        }
      ],
    },
  },

  components: [
    { path: '~/components/app', pathPrefix: false },
    { path: '~/components/section', pathPrefix: false },
    { path: '~/components/app/ui', pathPrefix: false },
    { path: '~/components/section/songs', pathPrefix: false },
    { path: '~/components/section/player', pathPrefix: false },
  ],

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
})
