// 应用VueRouter
import VueRouter from "vue-router";
// 引入组件
import About from "../components/About";
import Home from "../components/Home";

// 创建一个路由器，并且全局暴露
export default new VueRouter({
    routes:[
        {
            component:About,
            path:'/about',
        },
        {
            component:Home,
            path:'/home',
        },
    ]
})