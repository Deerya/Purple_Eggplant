import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入Home页面
import Home from '../views/Home.vue'
// 引入分类Category组件
import Category from '../views/Category.vue'
// 引入首页搜索框跳转Home_searchList组件页面
import Home_searchList from '../views/home/Home_searchList.vue'

Vue.use(VueRouter)

const routes = [
	//首页
  {
    path: '/',
    name: 'Home',
    component: Home,
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
  },
  //首页搜索框跳转
  {
    path: '/home_searchList',
    name: 'Home_searchList',
    component: Home_searchList,
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
  },
  //首页顶部（推荐）点击后跳转页面
  {
    path: '/home_s',
    name: 'Home_s',
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
	//路由懒加载
    component: ()=>import('@/views/home/Home_s.vue')
  },
  //分类
  {
    path: '/category',
    name: 'Category',
    component: Category,
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
  },
  //个人中心
  {
    path: '/user',
    name: 'User',
	//路由懒加载
    component: ()=>import('@/views/user/User.vue'),
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
  },
  //购物车
  {
    path: '/cart',
    name: 'Cart',
	
	// beforeEnter(to,from,next){
	// 	console.log(to,from,"路由独享守卫");
	// 	next(true)
	// },
  	// 路由懒加载  购物车页面
    component: ()=>import('../views/Cart.vue'),
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
		// 判断是否有权限进入购物车
		// requireAuth:true
	},
  },
  //首页顶部（推荐）点击后跳转页面
  {
    path: '/home_g/:id',
    name: 'Home_g',
	// 定义路由的元信息
	meta:{
		keep:true,
		// 显示初始底部栏
		nofoot:false,
		// 隐藏加入购物车底部栏
		Cart_nofoot:true,
	},
	//路由懒加载
    component: ()=>import('@/views/home/Home_g.vue')
  },
  //产品详情页
  {
    path: '/home_product/:id',
    name: 'Home_product',
	// 跳转后隐藏底部栏。
	meta:{
		nofoot:true,
		Cart_nofoot:false,
	},
	//路由懒加载
    component: ()=>import('@/views/home/Home_product.vue'),
  },
  //登录页
  {
    path: '/login',
    name: 'Login',
    meta:{
		nofoot:true,
		Cart_nofoot:true,
	},
	//路由懒加载
    component: ()=>import('@/views/user/Login.vue')
  },
  //注册页
  {
    path: '/register',
    name: 'Register',
    meta:{
		nofoot:true,
		Cart_nofoot:true,
	},
	//路由懒加载
    component: ()=>import('@/views/user/Register.vue')
  },
  //关于页
  {
    path: '/about',
    name: 'About',
	meta:{requireAuth:true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 每个路由进入前执行
router.beforeEach((to,from,next)=>{
	// 如果这个路由定义了，需要权限
	if(to.meta.requireAuth){
		// 如果有权限 放行
		if(window.localStorage.getItem("isLog")){
			next(true);
		}else{
			// 跳转登录页面，携带查询参数
			next("/login?redirect="+to.path);
		}
	}else{
		next(true);
	}
})
export default router
