// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  modules: ['@nuxtjs/i18n',],
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'locales/en.json'
      },
      {
        name: 'French',
        code: 'fr',
        file: 'locales/fr.json'
      },
      {
        name: 'Spanish',
        code: 'es',
        file: 'locales/es.json'
      }
    ],
    defaultLocale: 'en',
  },
  build: {

transpile: ['vuetify'],

  },
  devtools: { enabled: false }
})
