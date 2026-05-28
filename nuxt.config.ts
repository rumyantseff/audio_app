export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxtjs/i18n'],

  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: ['/*'],
    },
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', language: 'en-US' },
      { code: 'sk', file: 'sk.json', language: 'sk-SK' },
    ],
    defaultLocale: 'en',
    langDir: '../i18n/locales/',
    strategy: 'prefix_except_default',
  },

  css: [
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/nav-active.css',
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
    { path: '~/components', pathPrefix: true },
  ],

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
})
