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
      title: 'Main',
      titleTemplate: '%s | Voting app',
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
