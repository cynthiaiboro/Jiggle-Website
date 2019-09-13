/* eslint-disable no-dupe-keys */
// eslint-disable-next-line nuxt/no-cjs-in-config
const pkg = require('./package')
require('dotenv').config()
// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Jiggle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css',
        integrity:
          'sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw',
        crossorigin: 'anonymous'
      },
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
        crossorigin: 'anonymous'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      // {
      //   src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      //   type: 'text/javascript'
      // },
      {
        src: 'https://wchat.freshchat.com/js/widget.js',
        type: 'text/javascript'
      },
      {
        src: '@/assets/css/main.js'
      }
      // {
      //   src:
      //     "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      //   type: "text/javascript"
      // },
      // {
      //   src:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      //   type: "text/javascript"
      // }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: 'plugins/aos',
      ssr: false
    },
    {
      src: 'plugins/plugins',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      'nuxt-validate',
      {
        lang: 'en',
          classes:true,
          classNames: {
              valid: '',
              invalid: 'is-invalid'
          }
        // regular vee-validate options
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  server: {
    port: 8000, // default: 3000
    host: process.env.HOST // default: localhost
  }
}
