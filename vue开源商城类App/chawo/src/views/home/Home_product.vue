<template>
	<div id="product">
		<!-- 头部开始 -->
		<div class="pdt_top">
			<div @click="$router.back()"><van-icon name="arrow-left" /></div>
			<div>
				<div></div>
			    <div></div>
			    <div></div>
			</div>
		</div>
		<!-- 头部结束 -->
		
		<div class="product_L">
			<van-swipe :autoplay="3000">
				<van-swipe-item class="slideshow" v-for="(details_sw,index) in getHome_product.image_list" :key="index">
				  <img :src="details_sw._mid" width="100%"/>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="product_contents">
			<div class="product_price" v-if="getHome_product.goods_info">
				<div class="product_p">
					<div>
						<span>￥{{getHome_product.goods_info.goods_promotion_price}}</span>
						<span>￥{{getHome_product.goods_info.goods_marketprice}}</span>
					</div>
					<div>销量:{{getHome_product.goods_info.goods_salenum}}{{getHome_product.goods_info.goods_unit}}</div>
				</div>
				<p>{{getHome_product.goods_info.goods_name}}</p>
				<div>{{getHome_product.goods_info.goods_jingle}}</div>
			</div>
			
			<div class="productp" v-if="productp">
				<van-notice-bar left-icon="volume-o" :scrollable="false">
				  <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
				    <van-swipe-item  class="remark" v-for="(remark,index) in productp" :key="index">
						<div><span>{{remark.add_time}}</span><span>{{remark.buyer_name}}</span><span>购买了</span></div>
					</van-swipe-item>
				  </van-swipe>
				</van-notice-bar>
				
			</div>
			
			<div>
				<div>
					<!-- <van-cell is-link @click="showPopup,$router.push('/cart')"> -->
					<van-cell is-link @click="showPopup">
						<div class="selected">
							<div>已选</div>
							<div>默认</div>
						</div>
					</van-cell>
				    <van-popup round :style="{ height: '60%' }" v-model="shows" position="bottom">
				    	<p>{{getHome_product.goods_info.goods_name}}</p>
				    </van-popup>
				</div>
				<div>
					<van-cell is-link @click="showPopupt">
						<div class="selected">
							<div>参数</div>
							<div>品牌、年份、工艺、形状</div>
						</div>
						
					</van-cell>
					<van-popup round :style="{ height: '60%' }" v-model="show" position="bottom">
					    
				    </van-popup>
				</div>
				<!-- 评论 -->
				<div class="pl">
					<div v-for="(pl,i) in get_pl" :key="i">
						<p>{{pl.geval_content}}</p>
					</div>
				</div>
			</div>
			
		</div>
		
		
		<div class="produc_buttom">
			<div class="b_t">
				<div></div>
				<p>商品详情</p>
				<div></div>
			</div>
			<div v-if="getHome_product.goods_info">
		    	<Home_Products  :item="getHome_product.goods_info"></Home_Products>
		    </div>
		</div>
		
	</div>
</template>
<style>
	#hone_module img{
		width: 100%;
	}
	.van-notice-bar{
	    height: 60px;
		color: #000000;
		background-color: #fff;
	}
  .notice-swipe {
  	height: 40px;
  	line-height: 40px;
  }
  .pl{
	  display: none;
  }
</style>

<script>
	// 导入组件
	import Home_Products from '@/components/Home_Products.vue'
	// import bus from'../../utils/bus.js'
	import {GetHome_product} from '../../api/home_g/home_product.js'
	
	
	export default {
	// 注册组件
		components:{Home_Products},
		
		
		data(){
			return{
				shows: false,
				show: false,
				getHome_product:{},
				productp:{},
				get_pl:{},
			}
		},
		created() {
			// bus.$emit("tabschange",false);
			
			this.GetHome_product({
				act: 'goods',
				op: 'goods_detail',
				goods_id: this.$route.params.id,
				key: '0293191f262729017df3720f63cddda8',
				xxclient: 'new',
			});
			this.GetHome_productp();
			
			this.Get_pj()
		},
		mounted() {
			// console.log(this.todos)
		},
		// beforeDestroy() {
			
		// 	bus.$emit("tabschange",true);
		// },价格销量
		methods: {
			showPopup() {
				const personObj={
					id:this.getHome_product.goods_info.goods_id,
					name:this.getHome_product.goods_info.goods_name,
					img:this.getHome_product.image_list[0]._mid,
					price:this.getHome_product.goods_info.goods_marketprice,
					marketprice:this.getHome_product.goods_info.goods_promotion_price,
					salenum:this.getHome_product.goods_info.goods_salenum,
					}
				this.$store.commit('ADD_PERSON',personObj)
			    // this.shows = true;
			},
			showPopupt() {
			    this.show = true;
			},
			GetHome_product(data) {
				GetHome_product(data, {loading: {message: '正在加载...'}})
					.then(res => {
						console.log("信息",res.data.datas)
						this.getHome_product=res.data.datas
					
					})
					.catch(err => console.error(err))
			},
			// 获取当前频道评论的数据
			GetHome_productp() {
				// console.log(item,"item");
				this.$http.get("/mobile/index.php?"+
				`act=goods&op=salelog&goods_id=${this.$route.params.id}&xxclient=new`)
					.then(res => {
						// 更新sections
						this.productp = res.data.datas;
						// console.log("评论",res.data.datas)
					})
					.catch(err => console.error(err))
			},
			// 获取总共评论
			Get_pj(){
				// console.log(item,"item");
				this.$http.get("/mobile/index.php?"+
				`act=goods&op=goods_evaluate&curpage=1&page=10&goods_id=106988&type=&xxclient=new`)
					.then(res => {
						// 更新sections
						this.get_pl = res.data.datas.goods_eval_list;
						// console.log("评论",res.data.datas)
					})
					.catch(err => console.error(err))
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/home_product.css");
</style>
