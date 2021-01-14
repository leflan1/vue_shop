import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './plugins/element.js'
import axios from 'axios'

Vue.config.productionTip = false
// 接口请求根路径
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
