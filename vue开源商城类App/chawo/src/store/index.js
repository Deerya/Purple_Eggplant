import Vue from 'vue'
import Vuex from 'vuex'
import { Dialog,Toast } from 'vant';
import {GetCart} from '../api/cart.js'
// 导入用户模块
import user from './user/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
	// 存储数据
	state: {
		// 存了一个数据goods商品列表，在多个页面中都会使用到
		good_s: [{
			"buy_limit": 5,
			"img_url": "\/\/i8.mifile.cn\/v1\/a1\/ef617fac-7489-436d-b74e-c43582f09633.jpg",
			"num": 1,
			"price": 899,
			"name": "\u5c0f\u7c73\u7535\u89c64A 32\u82f1\u5bf8",
			"goods_id": 2172700021,
			"select": true
		}, {
			"buy_limit": 1,
			"img_url": "\/\/i8.mifile.cn\/v1\/a1\/65be1bac-6d3f-3766-3bac-c11b3aa13b8e.webp",
			"num": 1,
			"price": 1199,
			"name": "Redmi Note 7 4GB+64GB \u68a6\u5e7b\u84dd",
			"goods_id": 2185200032,
			"select": true
		}, {
			"buy_limit": 5,
			"img_url": "\/\/i8.mifile.cn\/a1\/pms_1514387870.88251945.jpg",
			"num": 1,
			"price": 3599,
			"name": "\u5c0f\u7c73\u7b14\u8bb0\u672cAir 12.5  4G 128G \u94f6\u8272",
			"goods_id": 2175200001,
			"select": true
		}],
		goods: [],
		score:60,
	},
	// 从新现有数据计算新的数据
	getters: {
		//  计算选中的 商品num总和
		"totalNum": function(state) {
			var n = 0;
			// 遍历goods数据
			state.goods.forEach(item => {
				// 如果选中的
				if (item.select) {
					// n等于item.num
					n += item.num;
				}
			})
			return n;
		},
		// 计算出总价
		"totalPrice": function(state) {
			var n = 0;
			// 遍历goods数据
			state.goods.forEach(item => {
				// 如果选中的
				if (item.select) {
					// n等于item.num
					n += item.num*item.price;
				}
			})
			return n;
		}
	},
	// 计算属性
	// watch:{
	// 	goods:{
	// 		deep:true,
	// 		handler(value){
	// 			// 使用浏览器储存，把数据放入浏览器中
	// 			console.log(value)
	// 			// 定时器 
	// 			// setTimeout(function(){
	// 			//   console.log('111')
	// 			// },3000)
	// 		}
	// 	}
	// },
	// 修改数据的方法
	mutations: {
		// state 是上方存储数据的根目录，value 是组件调用下面方法传递过来的数据
        ADD_PERSON(state,value){
            // console.log('mutations 中的 ADD_PERSON 被调用了',state.goods)
			console.log(value)
			state.goods.unshift(value)
			const ppop = state.goods
			localStorage.setItem('goods_p',JSON.stringify(ppop))
			console.log(ppop);
        },
		addScore(state,step=1){
			state.score+=step;
		},
		// 添加到购物车
		addCart(state,item){
			var canAdd = true;
			state.goods.forEach(value=>{
				if(value.goods_id === item.goods_id){
					canAdd  = false;
					value.num+=item.num*1;
					// 如果超过了最大购买量，等于最大购买量
					if(value.num>value.buy_limit){
						value.num = value.buy_limit;
						// 显示提示
						Toast('最多能购买'+value.buy_limit+"件");
					}
				}
			})
			// 如果可以添加，再添加到购物
			if(canAdd){
				state.goods.unshift(item);
			}
			
			// 如果购物车没有当前商品，添加，否则就加num值
			
		},
		// 初始化购物车
		initCart(state,goods){
			state.goods = goods;
		},
		delCart(state,item){
			Dialog.confirm({
				title: '确认',
				message: '确认删除',
			})
			 .then(() => {			  
				//  查找item 在goods中的下标
				var ind = state.goods.findIndex(value=>value.name==item.name);
				// 删除
				state.goods.splice(ind,1);
			})
			.catch(() => {
			    // on cancel
			 });
			 
			
		}
	},
	// 异步方法
	actions: {
		// 定义action方法，默认context上下文
		getCart(context){
			// 调用获取购物车api
			GetCart()
			.then(res=>{
				// 调用mutations中的initCart方法，把数据res.data传递
				// context.commit("initCart",res.data);
			})
		}
	},
	// 模块
	modules: {
		user,
	}
})
