<template>
	<div id="id">
		<!-- 头部 -->
		<div class="Home_g_header">
			<div class="logo" @click="$router.back()">
				<img src="../../assets/image/arrows_img.png" width="24">
			</div>
			<input @click="$router.push('/home_searchList')" type="text" placeholder="搜索关键字">
			<!-- <input type="text" placeholder="搜索关键字"> -->
			<div class="btn">
				<img src="../../assets/image/user.png" width="24">
			</div>
		</div>
		
		<!-- 头部结束 -->
		<div class="Home_g_classify">
			<div>
				<p>综合排序</p>
				<van-icon name="arrow-down" />
			</div>
			<div>
				<p>新上架</p>
				<van-icon name="back-top" />
			</div>
			<div>
				<p>销量</p>
				<van-icon name="bar-chart-o" />
			</div>
			<div>
				<p>筛选</p>
				<van-icon name="filter-o" />
			</div>
		</div>
		
		
		
		
		<div class="Home_g_content" >
		    <waterfall :data=[1,2,3,4,5,6,7,8,9,10,11] :col="2">
		    	<div class="dda" v-for="(gethome_g,goods_id) in search_list" :key="goods_id">
		    			<img :src="gethome_g.goods_image_url" width="100%">
		    			<p>{{gethome_g.goods_name}}</p>
		    			<div class="label" v-for="(tags,id) in gethome_g.tags" :key="id">
		    				<p>{{tags.title}}</p>
		    			</div>
		    			<div class="price">
		    				<p>￥{{gethome_g.goods_price}}</p>
		    				<p>销量:{{gethome_g.goods_salenum}}</p>
		    			</div>
		    	</div>
		    </waterfall>
		</div>
		
		
		<h1>页面跳转{{$route.params.id}}</h1>

	</div>
</template>

<script>
	import Vue from 'vue'
	// import bus from'../../utils/bus.js'
	import {GetHome_s} from '../../api/home_g/home_s.js'
	export default {
		data(){
			return{
				data:[],
				search_list:{},
			}
		},
		computed:{
			itemWidth(){
				return(138*0.5*(document.documentElement.clientWidth/375))
			},
			gutterWidth(){
				return(9*0.5*(document.documentElement.clientWidth/375))
			},
		},
		created() {
			// bus.$emit("tabschange",false);
			
			this.GetHome_s({
				act: 'goods',
				op: 'goods_list',
				page: 20,
				gc_id: this.$route.params.id,
				xxclient: 'new',
				curpage: 1,
				ukey: 'b30995f0509ba175ac93b33708d1cfa5',
			});
		},
		mounted() {
			// bus.$emit("tabschange",true);
			this.$bus.$on("search_s_list",(data)=>{
				this.search_list = data
				console.log(this.search_list,'接收搜索来的数据')
				// console.log(this.$route,"搜索")
			});
		},
		methods: {
			GetHome_s(data) {
				console.log(data,"搜索")
				GetHome_s(data, {
						loading: {
							message: '正在加载...'
						}
					})
					.then(res => {
						console.log(res.data.datas.goods_list,"搜索的数据")
						this.search_list=res.data.datas.goods_list
					})
					.catch(err => console.error(err))
			},
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/home_g.css");
</style>
