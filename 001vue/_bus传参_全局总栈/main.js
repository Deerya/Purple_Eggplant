import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // bus全局传参
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  },
}).$mount('#app')
