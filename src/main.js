import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
