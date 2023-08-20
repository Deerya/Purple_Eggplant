<template>
	<div id="hone_module">
		<div class="content_html" v-html="sections"></div>
		
		<div class="content_bottom">
			<div class="b_c">
				<div></div>
				<p>猜你喜欢</p>
				<div></div>
			</div>
			
			<waterfall  :data=[1,2] :col="2">
				<div 
					class="products" 
					v-for="(cbm,goods_id) in home_productx" 
					:key="goods_id"
				>
					<img :src="cbm.goods_image_url" alt="" width="100%">
					<div>
						<p>{{cbm.goods_name}}</p>
					    <div class="products_s">
					    	<span>￥{{cbm.goods_price}}</span>
					    	<span>销量:{{cbm.goods_salenum}}</span>
					    </div>
					</div>
				</div>
			</waterfall>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 页面每一节的数据
				sections: '',
				home_productx:{},
			}
		},
		props: {
			// 获取父组件Home传递给Page组件的参数 item Object类型 默认值是{}
			"item": {
			    type:Object,
				default:function(){return {}}
			}
		},
		created() {
			this.GetSections();
			this.GetHome_productx();
		},
		methods: {
			// 获取底部固定数据
			GetHome_productx() {
				// console.log(item,"item");
				this.$http.get("/mobile/index.php?"+
				`act=index&op=getHomeMoreProduct&curpage=1&limit=12&key=0293191f262729017df3720f63cddda8&xxclient=new`)
					.then(res => {
						// 更新sections
						this.home_productx = res.data.datas.goods_list;
						// console.log(res.data.datas.goods_list)
					})
					.catch(err => console.error(err))
			},
			// 获取当前频道中间图片的数据
			GetSections() {
				// console.log(item,"item");
				this.$http.get("/mobile/index.php?"+
				`act=goods&op=goods_body&goods_id=${this.item.goods_id}`)
					.then(res => {
						// 更新sections
						this.sections = res.data;
						// console.log(res.data)
					})
					.catch(err => console.error(err))
			},
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/home_T/home_module.css");
</style>
<style>
	.content_html img{
		max-width: 100%;
		height: auto;
	}
</style>
