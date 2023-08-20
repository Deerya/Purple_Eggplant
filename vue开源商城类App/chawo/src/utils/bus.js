// 导入vue
import Vue from 'vue';
// 实例化vue
var  bus = new Vue();
// 导出
export default bus;

// vue实例三个方法
// $on(eventname,callback) 监听事件
// $emit(eventname,data); 发送事件
// $off(eventname) 移除事件