// 应用VueRouter
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建一个路由器，并且全局暴露
const router = new VueRouter({
    // mode不写默认值为hash,hash兼容性好,history如果要打包，需要后端配置
    mode:'hash',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            // 一级路由
            component:About,
            meta:{
                title:'关于',
                isAuth:true,
            },
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{
                title:'首页',
            },
            // 二级路由
            children:[
                {
                    name:'xiaoxi',
                    path:'news',
                    component:News,
                    meta:{
                        title:'消息',
                        isAuth:true,
                    },
                    // 独享路由守卫
                    // beforeEnter:(to,from,next)=>{
                    //     if(to.meta.isAuth){
                    //         if(localStorage.getItem('dda')==='7'){
                    //             // 判断正确放行
                    //             next()
                    //         }else{
                    //             alert('无权限！')
                    //         }
                    //     }else{
                    //         // 判断正确放行
                    //         next()
                    //     }
                    // },
                },
                {
                    name:'xinwen',
                    path:'message',
                    component:Message,
                    meta:{
                        title:'新闻',
                        isAuth:true,
                    },
                    // 三级路由
                    children:[
                        {
                             name:'xiangqing',
                             path:'detail/id/title',
                            component:Detail,

                            // 路由的props方法接收外部传递的参数，对象写法，该对象中的所有值都会以props的形式传递给所在组件
                            // props:{a:'1'},

                            // 路由的props方法接收外部传递的参数，布尔值写法，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给所在组件
                            // props:true,

                            // 路由的props方法接收外部传递的参数，函数写法
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            },

                        }
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守卫（初始化之前、每一次路由切换之前被调用）
// router.beforeEach((to,from,next)=>{
//     // console.log(to,from,'前置路由守卫');
//     // 判断是否需要路由守卫，isAuth为true需要、否则直接通行
//     if(to.meta.isAuth){
//         if(localStorage.getItem('dda')==='t'){
//             // 判断正确放行
//             next()
//         }else{
//             alert('无权限！')
//         }
//     }else{
//         // 判断正确放行
//         next()
//     }
// })

// 全局后置路由守卫（初始化之前、每一次路由切换之后被调用）、（可以与独享守卫一起使用）
router.afterEach((to,from,)=>{
    console.log(to,from,'后置路由守卫');
    document.title = to.meta.title || '模板系统'
})

export default router