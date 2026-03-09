// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700, 800],
      'Rajdhani': [400, 500, 600, 700],
      'Space Mono': [400, 700],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Rasas - Portfolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio website of Rasas - Software Developer & Creative Professional' },
        { name: 'author', content: 'Rasas' },
        { property: 'og:title', content: 'Rasas - Portfolio' },
        { property: 'og:description', content: 'Explore the work, projects, and publications of Rasas' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],

      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-NRY9TMF0V4",
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRY9TMF0V4');
          `
        }
      ]
    },
  },
})