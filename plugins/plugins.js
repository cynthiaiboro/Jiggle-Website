import axios from 'axios'
import Vue from 'vue'
import toast from 'toastr'
import VeeValidate from 'vee-validate'

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
Vue.prototype.$toast = toast

// const config = {
//
// }
//
// Vue.use(VeeValidate, config)
