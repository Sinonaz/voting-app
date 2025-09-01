// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      titleTemplate: '%s | VoteApp',
    }
  },
  imports: {
    dirs: ['interfaces']
  },
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ]
})
