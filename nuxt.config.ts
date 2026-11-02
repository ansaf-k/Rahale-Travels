// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    // Server-only keys (set via NUXT_GOOGLE_PLACES_API_KEY, NUXT_GOOGLE_PLACE_ID)
    googlePlacesApiKey: '',
    googlePlaceId: ''
  }
})