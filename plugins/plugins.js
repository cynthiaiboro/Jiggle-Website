import axios from 'axios'
import Vue from 'vue'

const BASE_URL = 'https://api.jiggle.ng/'

const http = axios.create({
  baseURL: BASE_URL
})

if (process.browser) {
  http.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

    return config
  })
}

Vue.prototype.$axios = http
