import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import vuetify from './plugins/vuetify'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')