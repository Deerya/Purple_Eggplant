<template>
	<div class="home" ref="main">
		<!-- 头部 -->
		<div class="header">
			<div class="logo">
				<img src="../assets/image/logo-tea.png" width="45">
			</div>
			<input @click="$router.push('/home_searchList')" type="text" placeholder="搜索关键字">
			<div class="btn">
				<img src="../assets/image/user.png" width="24">
			</div>
		</div>
		<!-- 头部结束 -->

		<!-- 导航 -->
		<div class="subheader">
			<div class="up">
				<div class="recommend">推荐</div>
				<div class="navigation" 
					v-for="(navigation,gc_id) in subheader" 
					@click="sx(),$router.push('/home_g/'+navigation.gc_id)"
					:key="gc_id"
				>
					<p>{{navigation.gc_name}}</p>
				</div>
			</div>
		</div>
		<!-- 导航结束 -->
		<!-- 内容 -->
		<div class="content">
			<van-swipe class="my-swipe" :autoplay="3000">
				<van-swipe-item class="slideshow" 
				v-for="(img, index) in slideshow" 
				@click="$router.push('/home_g/'+img.data)"
				:key="index">
					<img :src="img.image" width="100%">
				</van-swipe-item>
			</van-swipe>
			


			<div class="slideshow_s">
				<div>
					<img src="https://www.chawo.com/wap/static/base_img/bz01.png">
					<span>正品保障</span>
				</div>
				<div>
					<img src="https://www.chawo.com/wap/static/base_img/bz03.png">
					<span>售后保障</span>
				</div>
				<div>
					<img src="	https://www.chawo.com/wap/static/base_img/bz04.png">
					<span>货到付款</span>
				</div>
				<div>
					<img src="	https://www.chawo.com/wap/static/base_img/bz02.png">
					<span>满99包邮</span>
				</div>
			</div>


			<van-swipe class="swiper_two" :show-indicators="false" :autoplay="3000" indicator-color="white" :loop="false">
				<van-swipe-item class="slideshow_t sdt1">
					<div v-for="(dda,index) in swiper_new[0]" @click="$router.push('/home_g/'+dda.image)" :key="index">
						<img :src="dda.image" width="45">
						<p>{{dda.name}}</p>
					</div>
				</van-swipe-item>
				<van-swipe-item class="slideshow_t sdt2">
					<div v-for="(ddas,index) in swiper_new[1]" @click="$router.push('/home_g/'+ddas.name)" :key="index">
						<img :src="ddas.image" width="45">
						<p>{{ddas.name}}</p>
					</div>
				</van-swipe-item>
			</van-swipe>


			
			<van-notice-bar class="swiper_twos" left-icon="https://www.chawo.com/wap/static/base_img/toutiao.png"
				:scrollable="false">
				<van-swipe vertical class="notice-swipe " :autoplay="3000" :show-indicators="false">
					<van-swipe-item><p>{{swiper_two1}}</p></van-swipe-item>
					<van-swipe-item><p>{{swiper_two2}}</p></van-swipe-item>
					<van-swipe-item><p>{{swiper_two3}}</p></van-swipe-item>
					<van-swipe-item><p>{{swiper_two4}}</p></van-swipe-item>
				    <van-swipe-item><p>{{swiper_two5}}</p></van-swipe-item>
				</van-swipe>
			</van-notice-bar>



            <div class="brand">
				<div class="brand-top">
					<div>热销品牌</div>
					<div>
						<p>更多</p>
						<img src="../assets/image/arrows_img.png" height="15">
					</div>
				</div>
				<div class="brand-bottom">
					<div v-for="(brand,index) in popularBrand"  @click="$router.push('/home_g/'+brand.name)" :key="index">
					    <img :src="brand.image" width="65">
					    <p>{{brand.name}}</p>
				    </div>
				</div>
			</div>



            <div class="exclusive"> 
				<div class="exclusive-top ">
					<div>手机专享</div>
					<div>
						<p>更多</p>
						<img src="../assets/image/arrows_img.png" height="15">
					</div>
				</div>
				<div class="exclusive-bottom">
					<div v-for="(exclusive,areaid_1) in phoneExclusive" @click="$router.push('/home_g/'+exclusive.goods_marketprice)" :key="areaid_1">
					    <img :src="exclusive.goods_image_url" width="85">
					    
					    <p>￥{{exclusive.goods_marketprice}}</p>
						<p>专享价</p>
						<p>￥{{exclusive.sole_info.sole_price}}</p>
				    </div>
				</div>
			</div>



            <div class="exclusive snapUp"> 
				<div class="exclusive-top ">
					<div>限时秒杀</div>
					<div>
						<p>更多</p>
						<img src="../assets/image/arrows_img.png" height="15">
					</div>
				</div>
				<div class="exclusive-bottom ">
					<div v-for="(brand,goods_id) in snapUp" @click="$router.push('/home_g/'+brand.goods_price)" :key="goods_id">
					    <img :src="brand.image_url" width="65">
					    <p>￥{{brand.goods_price}}</p>
					    <p>￥{{brand.spike_price}}</p>
				    </div>
				</div>
			</div>


			<div class="newest">
				<span>最近上新</span>
				<span>●精选新品</span>
			</div>
			<div class="newest_content">
				<div v-for="(brand,goods_click) in newest" @click="$router.push('/home_g/'+brand.guest_price)" :key="goods_click">
					<p>{{brand.goods_name}}</p>
					<p>￥{{brand.guest_price}}</p>
					<img :src="brand.goods_image_url" alt="">
				</div>
			</div>


			<div class="exclusive recommend"> 
				<div class="exclusive-top ">
					<div>热销推荐</div>
					<div>
						<p>更多</p>
						<img src="../assets/image/arrows_img.png" height="15">
					</div>
				</div>
				<div class="exclusive-bottom">
					<div v-for="(brand,goods_id) in recommend" @click="$router.push('/home_g/'+brand.goods_salenum)" :key="goods_id">
					    <img :src="brand.goods_image_url" width="85">
					    <p style="text-decoration: none;color: #000000;">热销:{{brand.goods_salenum}}</p>
					    <p style="color: #C9141C;">￥{{brand.goods_price}}</p>
				    </div>
				</div>
			</div>
			
			
			
			<waterfall  :data=[1,2] :col="2">
				<div
					class="products" 
					v-for="(brand,goods_id) in product" 
					@click="$router.push('/home_product/'+brand.goods_id)" 
					:key="goods_id"
				>
					<img :src="brand.goods_image_url" alt="" width="100%">
					<div>
						<p>{{brand.goods_name}}</p>
					    <div class="products_s">
					    	<span>￥{{brand.goods_price}}</span>
					    	<span>销量:{{brand.goods_salenum}}</span>
					    </div>
					</div>
				</div>
			</waterfall>
			
		</div>
		<!-- 内容结束 -->
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		
		data() {
			return {
				data:[],
				subheader: {},
				content: {},
				slideshow: {},
				swiper_new: [],
				swiper_two1: "",
				swiper_two2: "",
				swiper_two3: "",
				swiper_two4: "",
				swiper_two5: "",
				popularBrand:{},
				phoneExclusive:{},
				snapUp:{},
				newest:{},
				recommend:{},
				product:{},
				len:1,
				flag:true,
				keyTea:'',
				ddd:{ddd:'444'}
			}
		},
		// computed:{
		// 	itemWidth(){
		// 		return(138*0.5*(document.documentElement.clientWidth/375))
		// 	},
		// 	gutterWidth(){
		// 		return(9*0.5*(document.documentElement.clientWidth/375))
		// 	},
		// },
		created() {
			this.getHotelList();
			this.getNavigation();
			this.getSlideshow();
			this.getSwiper();
			this.getSwiper_two1();
			this.getSwiper_two2();
			this.getSwiper_two3();
			this.getSwiper_two4();
			this.getSwiper_two5();
			this.getPopularBrand();
			this.getPhoneExclusive();
			this.getSnapUp();
			this.getNewest();
			this.getRecommend();
			this.getProduct();
		},
		
		// mounted() {
		// 			window.addEventListener("scroll", this.reachBottom)
		//             var last=[...document.querySelectorAll("#vueWaterfall")]
		// 			console.log(last);
		// },
		// 	beforeDestroy() {
		// 			this.$refs.main.removeEventListener("scroll", this.reachBottom)
				// },
	
		methods: {
			// 刷新
			sx(){
				setTimeout(()=>{
					// 跳转刷新页面
					location.reload();
				},100)
			},
			// scroll(scrollData){ 
			// 	console.log(scrollData)
			// },
			// switchCol(col){
			// 	this.col=col
			// 	console.log(this.col)
			// },
			// loadmore(index){
			// 	this.data=this.data.concat(this.data)
			// 	console.log(index)
			// },
			
			
			//获取 产品 内容
			getProduct(e) {
				this.$http.get("/mobile/index.php?"+ 
				`act=index&op=getHomeMoreProduct&curpage=${this.len}&key=0293191f262729017df3720f63cddda8&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.product = res.data.datas.goods_list
						// console.log(res.data.datas.goods_list, "产品数据")
					})
					.catch(err => console.error(err, "请求失败"))
			},
			// reachBottom(){
			// 	var last=[...document.querySelectorAll(".products")].pop();
			// 	var winH = window.innerHeight;
			// 	console.log("123123",last,winH);
			// 	console.log(last.getBoundingClientRect().top,winH)
				
			// 	if(last.getBoundingClientRect().top<winH&&this.flag){
			// 		this.flag=false
					
			// 		console.log(this.len)
					
			// 		setTimeout(()=>{
			// 			this.$nextTick(()=>{
			// 				this.len+=1
			// 				this.getProduct()
							
			// 				this.flag=true
			// 			})
			// 		},500)
			// 	}
			// },
			//获取 热销推荐（ 推荐 ）内容
			getRecommend() {
				this.$http.get("/mobile/index.php?"+
				`act=index&op=getHotGoods&key=&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.recommend = res.data.datas.goods_list
						// console.log(res.data, "请求的数据")
						// console.log(res.data.datas)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取 最近上新（最新）内容
			getNewest() {
				this.$http.get("/mobile/index.php?"+
				`act=goods&op=goods_list&page=5&curpage=1&order=2&key=4&ukey=&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.newest = res.data.datas.goods_list
						// console.log(res.data, "请求的数据")
						// console.log(res.data.datas)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取限时秒杀（抢购）内容
			getSnapUp() {
				this.$http.get("/mobile/index.php?"+
				`act=spike_new&op=index&curpage=1&page=5&key=&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.snapUp = res.data.datas.goods_list
						// console.log(res, "请求的数据")
						// console.log(res.data.datas)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取手机专享内容
			getPhoneExclusive() {
				this.$http.get("/mobile/index.php?"+
				`act=index&op=getSoleGoodsList&key=&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.phoneExclusive = res.data.datas.goods_list
						// console.log(res, "请求的数据")
						// console.log(res.data.datas)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取热销品牌内容
			getPopularBrand() {
				this.$http.get("/mobile/index.php?act=index&op=getBrandNav&xxclient=new", 
				`act=index&op=getBrandNav&xxclient=new`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.popularBrand = res.data.datas
						// console.log(res, "请求的数据")
						// console.log(res.data.datas)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			getSwiper_two1() {
				this.$http.get("/mobile/index.php?act=index&op=getArticleInfo&article_id=190&xxclient=new", {
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.swiper_two1 = res.data.datas.article_title
						// console.log(res, "请求的数据")
						// console.log(res.data.datas.article_title)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			getSwiper_two2() {
				this.$http.get("/mobile/index.php?act=index&op=getArticleInfo&article_id=191&xxclient=new", {
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.swiper_two2 = res.data.datas.article_title
						// console.log(res,"请求的数据")
						// console.log(res.data.datas.article_title)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			getSwiper_two3() {
				this.$http.get("/mobile/index.php?act=index&op=getArticleInfo&article_id=192&xxclient=new", {
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.swiper_two3 = res.data.datas.article_title
						// console.log(res,"请求的数据")
						// console.log(res.data.datas.article_title)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			getSwiper_two4() {
				this.$http.get("/mobile/index.php?act=index&op=getArticleInfo&article_id=193&xxclient=new", {
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.swiper_two4 = res.data.datas.article_title
						// console.log(res,"请求的数据")
						// console.log(res.data.datas.article_title)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			getSwiper_two5() {
				this.$http.get("/mobile/index.php?act=index&op=getArticleInfo&article_id=195&xxclient=new", {
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.swiper_two5 = res.data.datas.article_title
						// console.log(res,"请求的数据")
						// console.log(res.data.datas.article_title)
					})
					.catch(err => console.error(err, "请求失败"))
			},


			//获取轮播选项图片(最新上架)
			getSwiper() {
				this.$http.get("/mobile/index.php?"+
						`act=index&op=getGridNav&xxclient=new`, {
							hesders: {
								"content-type": "text/html; charset=UTF-8"
							}
						})
					.then(res => {
						this.swiper_new = res.data.datas
						// console.log(res.data.datas,"请求的数据")
						// console.log(res.data.datas[0].adv_list.item)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取轮播图片
			getSlideshow() {
				this.$http.get("/mobile/index.php?"+
						`act=index&op=getdeDefaultAdvList&xxclient=new`, {
							hesders: {
								"content-type": "text/html; charset=UTF-8"
							}
						})
					.then(res => {
						this.slideshow = res.data.datas[0].adv_list.item
						// console.log(res,"请求的数据")
						// console.log(res.data.datas[0].adv_list.item)
					})
					.catch(err => console.error(err, "请求失败"))
			},
			//获取导航内容
			getNavigation() {
				this.$http.get("/mobile/index.php?"+
						`act=goods_class&xxclient=new`, {
							hesders: {
								"content-type": "text/html; charset=UTF-8"
							}
						})
					.then(res => {
						this.subheader = res.data.datas.class_list
						// console.log(res,"请求的数据")
						// console.log(res.data.datas.class_list,'获取导航内容')
					})
					.catch(err => console.error(err, "请求失败"))
			},
			// routerTo() {
			//   this.$router.push({
			// 	name: 'Home_g',
			// 	path:'/home_g/'+this.subheader.gc_id,
			//     query: {
			// 		d:0,
			//     }
			//   })
			// },
			getHotelList() {
				this.$http.get("/mobile/index.php?"+
						`act=index&op=search_hot_info&xxclient=new`, {
							hesders: {
								"content-type": "text/html; charset=UTF-8"
							}
						})
					.then(res => {
						// console.log(res,"请求的数据")
					})
					.catch(err => console.error(err, "请求失败"))
			}
		},
	}
	
</script>


<style scoped="scoped">
	@import url("../assets/css/home.css");

	.notice-swipe {
		height: 40px;
		line-height: 40px;
	}
</style>
