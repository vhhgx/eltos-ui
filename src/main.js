import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import '/src/styles/main.css'
import '/src/styles/reset.css'
import '/src/styles/pattern.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
