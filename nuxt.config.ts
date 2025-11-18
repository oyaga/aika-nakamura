// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/scripts', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxtjs/device'],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
    }
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Michroma', provider: 'google' }
    ]
  },
  
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY
    }
  }
})