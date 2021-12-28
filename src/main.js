import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebase.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  firebase,
  vuetify,
  render: h => h(App)
}).$mount('#app')
