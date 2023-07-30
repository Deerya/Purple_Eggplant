import Vue from 'vue'
import App from './App.vue'

// 引入store文件
import store from './vuex/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 引用状态管理vuex
  store,
  
  // 创建之前钩子函数
  beforeCreate(){
  // bus全局传参
    Vue.prototype.$bus = this //安装全局事件总线
  },
  
}).$mount('#app')
