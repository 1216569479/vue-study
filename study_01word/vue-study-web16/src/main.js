import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'
import {
  Onemit
} from './onemit/onemit'
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$onemit = new Onemit()
Vue.prototype.$create = create

new Vue({
  render: h => h(App),
}).$mount('#app')