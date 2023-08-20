<template>
	<div class="details" v-if="view.goods_info">
		<div class="header">
			<div class="back" @click="$router.back()">
				<van-icon name="arrow-left" />
			</div>
			<div class="share"><van-icon name="share-o" /></div>
		</div>
		<!-- 轮播开始 -->
		<van-swipe @change="onChange">
			<van-swipe-item v-for="(swipe,index) in view.goods_info[current].gallery_v3" :key="index">
				<img :src="swipe.img_url" alt="" width="100%">
			</van-swipe-item>
			 
			<template #indicator>
				<div class="custom-indicator">{{ cur + 1 }}/{{view.goods_info[current].gallery_v3.length}}</div>
			</template>
		</van-swipe>
		<!-- 轮播结束 -->
		<div class="price" style="color: #f70;">￥
			<span style="font-size: 48px; font-weight: 700;">{{view.goods_info[current].market_price}}</span>
		</div>
		<!--  -->
		<div class="title">
			{{view.product_info.name}}
		</div>
		<!-- 商品导航开始 -->
		<van-goods-action>
			<van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" :badge="$store.getters.totalNum" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		<!-- 商品导航结束 -->
	</div>
	<div v-else>
		<van-empty description="数据加载中..." />
	</div>
</template>
<style>
	.details .header .van-icon{
		color: #fff !important;
	} 	
</style>
<style scoped="scoped">
	 .custom-indicator {
	    position: absolute;
	    right: 5px;
	    bottom: 5px;
	    padding: 2px 5px;
	    font-size: 12px;
	    background: rgba(0, 0, 0, 0.1);
	  }
	.header{
		position: absolute;
		line-height: .88rem;
		height: .88rem;
		display: flex;
		justify-content: space-between;
		left:0;
		top:0;
		width: 100%;
		align-items:center;
		z-index: 1000;
	}
	.header>div{
		background-color: rgba(0,0,0,.3);
		padding: .15rem;
		border-radius: .88rem;
		height: .6rem;
		width: .6rem;
		text-align: center;
		display: flex;
		align-items: center;
		margin-left: .3rem;
		margin-right: .3rem;
	}
</style>
<script>
	// 导入bus
	import bus from '../utils/bus.js'
	import {GetView} from '../api/details/details.js'
	export default{
		data(){
			return {
				view:{},
				current:0,//当前是第几个产品
				cur:0,//当前是第n张幻灯片
			}
		},
		created(){
			// 把他爹的showTabs 设置为false
			// this.$parent.showTabs = false;
			// bus.$emit("tabschange",false);
			this.getView({
				client_id: 180100031051,
				channel_id: '',
				webp: 1,
				commodity_id: this.$route.params.id,
				pid: this.$route.params.id,
				saleMode:'',
			});
		},
		beforeDestroy(){
				// bus.$emit("tabschange",true);
			// 把他爹的showTabs 设置为true
			// this.$parent.showTabs = true;
		},
		methods:{
			onChange(index) {
			      this.cur = index;
			   },
			// 获取详情信息
			getView(data){
				// 根据导入的api方法获取，
				GetView(data,{loading:{message:'主人马上就好...'}})
				.then(res=>{
					console.log(res.data)
					this.view = res.data.data;
				})
				.catch(err=>console.error(err))
			}
		}
	}
</script>

<style>
</style>
