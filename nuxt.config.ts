// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
// })
export default {
  devtools: { enabled: true },
  router: {
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