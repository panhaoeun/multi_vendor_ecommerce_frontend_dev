// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n'
  ],
  components: true,
  app: {
    head: {
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1'
        },
      ]
    }
  }
})
