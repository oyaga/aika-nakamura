// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/scripts', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxtjs/device'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Aika',
      titleTemplate: '%s | Aika',
      meta: [
        { name: 'description', content: 'Aika - Agência de Criação de Sites, Aplicativos e Sistemas com IA.' },
        // Open Graph
        { property: 'og:title', content: 'Aika - Agência de Criação de Sites, Aplicativos e Sistemas com IA' },
        { property: 'og:description', content: 'Potencialize seu negócio com a Aika. Somos especialistas na criação de sites, aplicativos e sistemas personalizados, integrando inteligência artificial para resultados incríveis.' },
        { property: 'og:image', content: '/imagens/aika-ophen-graph.png' },
        { property: 'og:type', content: 'website' }
      ]
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