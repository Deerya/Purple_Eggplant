<template>
	<div>
		<div class="search_top">
			<p class="fh" @click="$router.go(-1)"></p>
			<input @keyup.enter="search_s(),$router.push('/home_s/'+{meta:{Cart_nofoot:false,d:true}})" v-model="keyWord" placeholder="搜索"/>
			<!-- <p @click="search_s(),$router.push('/home_s'+meta)">搜索</p> -->
			<p @click="search_s(),routerTo()">搜索</p>
		</div>
		<div>
			<ul>
				<li v-for="(item,i) in product" :key="i">
					<span>{{item}}</span>
					<img src="../../assets/image/arrows_img.png" >
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
// 	import Vue from 'vue'
// 	import {GetHome_g} from '../../api/home_g/home_s.js'
	export default {
		data(){
			return{
				product:[],
				searchList:{},
				keyWord:''
			}
		},
		created() {
			this.search()
		},
		methods:{
			routerTo() {
			  this.$router.push({
				name: 'Home_s',
				path:'/home_s/',
				meta:{
					Cart_nofoot:false,
				}
			  })
			},
			search_s(){
				this.$http.get("/mobile/index.php?"+
				`act=goods&op=goods_list&page=10&keyword=${encodeURI(this.keyWord)}&xxclient=new&curpage=1&ukey=b30995f0509ba175ac93b33708d1cfa5`,{
						hesders: {
							"content-type": "text/html; charset=UTF-8"
						}
					})
					.then(res => {
						this.searchList = res.data.datas.goods_list
						this.$bus.$emit('search_s_list',this.searchList)
						// console.log(res.data.datas.goods_list, "搜索")
					})
					.catch(err => console.error(err, "请求失败"))
			},
		},
		// 获取推荐搜索数据
		mounted(){
			this.$http.get("/mobile/index.php?"+ 
			`act=index&op=search_key_list&xxclient=new`,{
					hesders: {
						"content-type": "text/html; charset=UTF-8"
					}
				})
				.then(res => {
					this.product = res.data.datas.list
					// console.log(res.data.datas.list, "产品数据")
				})
				.catch(err => console.error(err, "请求失败"))
		}
	}
</script>

<style scoped="scoped">
	.search_top{
		padding: 8px 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.search_top input{
		width: 75%;
	}
	.fh{
		transform:rotate(-45deg);
		width: 15px;
		height: 15px;
		border-top: 2px solid #000000;
		border-left: 2px solid #000000;
	}
	li{
		
		border-top: 1px solid rgba(0,0,0,.2);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	ul>li:last-child{
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	ul>li>p,
	ul>li>span,
	ul>li>img{
		padding: 10px 6px;
	}
	img{
		width: 32px;
	}
</style>
