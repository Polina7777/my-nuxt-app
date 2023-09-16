// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
// })

export default {
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n','@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  router: {
    // middleware: 'i18n',
    routes: [
      {
        path: '/',
        component: 'pages/index.vue'
      },
      {
        path: '/basket',
        component: 'pages/basket.vue'
      },
      {
        path: '/favorites',
        component: 'pages/favorites.vue'
      },
      {
        path: '/paymethods',
        component: 'pages/paymethods.vue'
      },
      {
        path: '/contacts',
        component: 'pages/contacts.vue'
      },
      {
        path: '/new',
        component: 'pages/new.vue'
      },
      {
        path: '/sale',
        component: 'pages/sale.vue'
      },
      {
        path: '/profile',
        component: 'pages/user.vue'
      },
      {
        path: '/questions',
        component: 'pages/questions.vue'
      },
      {
        path: '/giftcard',
        component: 'pages/giftcard.vue'
      },
      { 
        path: '/ordering',
        component: 'pages/ordering.vue'
      },
      { 
        path: '/pay',
        component: 'pages/pay.vue'
      },
      { 
        path: '/grid',
        component: 'pages/grid.vue'
      },
      {
        // name:'/product',
        path: '/:cartId',
        component: 'pages/product.vue'
      },
  
    ]
  }
};