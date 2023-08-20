import Vue from 'vue'
import App from './App.vue'
// 引入vueRouter插件
import router from './router'
// 引入vuex中的store插件
import store from './store'

import './assets/css/reset.css'//导入重置css
import './assets/js/flexible.min.js'//导入响应式js

//引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
// 应用Vant插件
Vue.use(Vant);

 


import axios from 'axios'

Vue.prototype.$http=axios

//引入瀑布流插件
import waterfall from 'vue-waterfall2'
// 使用瀑布流插件
Vue.use(waterfall)

import plugins from './plugins'
Vue.use(plugins)


// 引入共用功能（混入）--弹出框
import {aaa , bbb} from './mixin'
Vue.mixin(aaa)
Vue.mixin(bbb)
  


//导入封装好的请求工具
// import request from './utils/request.js'
// Vue.prototype.$http=request;

Vue.config.productionTip = false

new Vue({
  // 应用router插件
  router,
  // 应用vuex中的store插件
  store,
  render: h => h(App),
  
  // bus全局传参
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  },
}).$mount('#app')