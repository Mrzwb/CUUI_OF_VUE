import Vue from 'vue'
import App from './App.vue'
import router from './router'
import curem from './libs/curem'
curem();



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
