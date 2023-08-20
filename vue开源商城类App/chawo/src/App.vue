<template>
  <div id="app">
		<!-- 谁定义元信息 meta:{keep:true} 谁级被缓存 -->
		<keep-alive v-if="$route.meta.keep">
			<router-view class="page " :class="{'has-tabs':!$route.meta.nofoot}" />
		</keep-alive>
		<!-- keep-alive 可以在浏览器本地缓存组件
			 include 包含哪些组件要被缓存
			 exclude 排除哪些组件被缓存
		 -->
    <router-view v-if="!$route.meta.keep" class="page " :class="{'has-tabs':showTabs}"/>
    <div id="nav" v-if="!$route.meta.nofoot">
		<router-link class="link ihome" to="/">首页</router-link>
		<router-link class="link icate" to="/category">分类</router-link>
		<router-link class="link iball" to="/find">发现</router-link>
		<!-- 根据vuex状态管理中的数据显示数据量 -->
		<!-- <router-link class="link icart" to="/cart">购物车<p class="cart_length">{{this.$store.state.goods.length}}</p></router-link> -->
		<!-- 根据浏览器本地缓存中的数据显示数据量 -->
		<router-link class="link icart" to="/cart">购物车<p class="cart_length">{{todos.length}}</p></router-link>
		<router-link class="link iuser" to="/user">我的</router-link>
    </div>
    <div id="nav" v-if="!$route.meta.Cart_nofoot">
		<div>
			<router-link class="link ihome" to="/">首页</router-link>
			<router-link class="link iball" to="/find">收藏</router-link>
		<!-- 根据vuex状态管理中的数据显示数据量 -->
		<!-- <router-link class="link icart" to="/cart">购物车<p class="cart_length">{{this.$store.state.goods.length}}</p></router-link> -->
		<!-- 根据浏览器本地缓存中的数据显示数据量 -->
		<router-link class="link icart" to="/cart">购物车<p class="cart_length">{{todos.length}}</p></router-link>
		</div>
		<div>
			<div class="Add_to_Cart ">加入购物车</div>
			<div class="acquisition">立即购买</div>
		</div>
    </div>
  </div>
</template>

<script>
	// 导入bus js（传递数据的）
	import bus from './utils/bus.js'
	export default{
		created () {
			bus.$on("tabschange",$event=>this.showTabs = $event);
			// 进入根组件就获取购物车的数据
			this.$store.dispatch("getCart");
			this.$store.dispatch("user/getUserInfo");
		},
		data(){
			return{
				showTabs:true,
				todos:JSON.parse(localStorage.getItem('goods_p')) || [],
			}
		},
		mounted() {
			// console.log(this.todos)
		}
	}
</script>
<style>
	#app {
		height: 100vh;
		width: 100vw;
		position: relative;
	}
	
	.page{
		position: absolute;
		left: 0;top: 0;
		right: 0;bottom: 0;
	}
	.has-tabs{
		bottom: 1rem;
	}
/* 底部栏导航 */
	#nav {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		font-size: .18rem;
	}

	#nav>div{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	#nav .link {
		flex: 1;
		text-align: center;
		position: relative;
	}

	#nav .link::before {
		content: "";
		display: block;
		width: .45rem;
		height: .45rem;
		background-image: url(./assets/image/homeb.png);
		background-size: cover;
		margin:.1rem auto;
	}

	#nav .link.router-link-exact-active {
		color: #C9141C;
	}
	
	#nav .ihome.router-link-exact-active::before {background-image: url(./assets/image/homea.png);}
	#nav .icate.router-link-exact-active::before {background-image: url(./assets/image/categorya.png);}
	#nav .iball.router-link-exact-active::before {background-image: url(./assets/image/finda.png);}
	#nav .icart.router-link-exact-active::before {background-image: url(./assets/image/carta.png);}
	#nav .iuser.router-link-exact-active::before {background-image: url(./assets/image/mya.png);}
	
	#nav .icate::before{background-image: url(./assets/image/categoryb.png);}
	#nav .iball::before{background-image: url(./assets/image/findb.png);}
	#nav .icart::before{background-image: url(./assets/image/cartb.png);}
	#nav .iuser::before{background-image: url(./assets/image/myb.png);}
	
	.Add_to_Cart{
		background-color: #ff7900;
	}
	.acquisition{
		background-color: #ed3f14;
	}
	.acquisition,.Add_to_Cart{
		font-size: 16px;
		margin: 6px 5px;
		line-height: 41px;
		border-radius: 19px;
		color: #fff;
		text-align: center;
		width: 29vw;
	}
	.cart_length{
		position: absolute;
		top: 0;
		left: 54%;
		background-color: #c9141d;
		color: #ffffff;
		width: 15px;
		height: 15px;
		border-radius: 15px;
	}
</style>
