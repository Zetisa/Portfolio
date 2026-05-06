export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  compatibilityDate: '2024-11-01',

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, 
          searchDepth: 3
        }
      }
    }
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  typescript: {
    strict: true
  }
})