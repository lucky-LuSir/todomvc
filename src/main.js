import './assets/base.css'
import './assets/index.css'

import Vue from 'vue'
import App from './App'

// 导入store对象
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
