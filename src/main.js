
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './rem.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
