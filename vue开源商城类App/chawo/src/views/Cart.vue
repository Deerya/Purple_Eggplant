<template>
	<div id="Cart">
		<div class="cart" ref="cart">
			<van-nav-bar
			  title="购物车"
			  left-text=""
			  right-text=""
			  left-arrow
			  @click-left="$router.back()"		  
			/>
			<!-- 购物车列表 -->
		</div>
		<ul>
			<li v-for="(cart,i) in todos" :key="i" >
				<table>
					<input type="checkbox"/>
				</table>
				<img :src="cart.img">
				<div>
					<p>{{cart.name}}</p>
					<p>{{cart.price}}</p>
					<p>{{cart.marketprice}}</p>
					<p>销量：{{cart.salenum}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'cart',
		data(){
			return{
				cart:{},
				// 获取浏览器本地储存中的数据
				todos:JSON.parse(localStorage.getItem('goods_p')) || [],
			}
		},
		mounted() {
			this.cart = this.$store.state.goods
			// console.log(this.todos,'打印浏览器本地储存中的数据')
			// console.log(this.$store.state.goods,'获取vuex状态管理中的数据')
		}
	}
</script>
 
<style scoped="scoped">
	#Cart{
		overflow-y: auto;
		background-color: #F3F4F6;
	}
	.cart{
		width: 100%;
		position: fixed;
		top: 0;
		overflow: auto;
		scroll-behavior: smooth;
		z-index: 2;
	}
	.foot .price{
		line-height: .3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: .24rem;
	}
	.foot{
		display: flex;
		width: 100%;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		position: fixed;
		left:0;
		bottom: 0;
	}
	.foot .col{ flex: 1}
	.sel{ display: flex; align-items: center; justify-content: center;}
	.del{ display: flex; align-items: flex-end; justify-content: center; padding-bottom: .5rem;}
	.item{ display: flex;}
	.col-10{ width: 10%;}
	.col-30{ width: 30%;}
	.col-50{ width: 50%;}
	ul{
		margin-top: 55px;
	}
	ul>li{
		display: flex;
		align-items: center;
		border-radius: 6px;
		padding: 8px;
		margin: 10px;
		background-color: #FFFFFF;
	}
	li img{
		width: 110px;
		border-radius: 6px;
		margin: 0 20px;
	}
	table{
		cursor: pointer;
		position: relative;
	}
	input{
		/* display: none; */
	}
	label::before{
		display: inline-block;
		content: "";
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 2px solid rgba(193, 200, 211, 1);
		margin-right: 6px;
		vertical-align: middle;
	}
	label::after{
	    display: inline-block;
	    content: "";
	    width: 12px;
	    height: 12px;
	    border-radius: 50%;
	    position: absolute;
	    left: 4px;
	    bottom: 4px;
	    background-color: rgba(56, 85, 127, 1);
	}
</style>
