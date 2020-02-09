import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'

axios.defaults.baseURL = 'http://localhost:1235'

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  console.log('errorHandler', err, vm, info)
}

Vue.config.warnHandler = (err, vm, info) => {
  console.log('warnHandler', err, vm, info)
}

Vue.config.renderError = (err, vm, info) => {
  console.log('renderError', err, vm, info)
}

Vue.config.errorCaptured = (err, vm, info) => {
  console.log('errorCaptured', err, vm, info)
}

store.dispatch('auth/auth', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
