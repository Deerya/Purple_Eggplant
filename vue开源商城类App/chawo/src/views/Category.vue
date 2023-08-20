<template>
	<div>
		<!-- 头部 -->
		<div class="category_header">
			<div class="logo">
				<img src="../assets/image/logo-tea.png" width="45">
			</div>
			<input type="text" placeholder="搜索关键字">
			<div class="btn">
				<img src="../assets/image/user.png" width="24">
			</div>
		</div>
		<!-- 头部结束 -->

		<div class="content_left" ref="left">
			<div class="contents" 
			v-for="(contents,index) in categorys" 
			:key="index" 
			@click="titleClick(index)"
			:class="{'active':index==current}"
			>
				<p>{{contents.name}}</p>
			</div>
		</div> 
		
		<div class="content_right" ref="right">
			<div 
				v-for="(contents,index) in categorys" 
				:key="index"
				ref="categorys.index"
			>
				<div class="right_header">
					<div></div>
					<span>{{contents.name}}</span>
					<div></div>
				</div>
				<div class="right_img">
					<div v-for="(con_img,index) in contents.foods" :key="index">
					    <img :src="con_img.icon" >
						<p>{{con_img.name}}</p>
				    </div>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
import {_throttle} from '../utils/utils'
	export default{
		data(){
			return{
				categorys:{},
				
				//当前选择
				current:0,
			}
		},
		created() {
			this.GetCategory();
		},
		mounted() {
			let lf = this.$refs.right
			let ri = this.$refs.left
			function pdf() {
					
				lf.addEventListener('scroll',function () {
					// 移除类
					const old = document.querySelector('.content_left .active')
					if(old) old.classList.remove('active')

					// 把电梯箱 liftBox 中的所有子元素赋值给 dahezi
					let dahezi = lf.childNodes
					// 遍历 dahezi
					dahezi.forEach(function(data , index) {
						// 判断是否在可视窗口
						// liftBox.scrollTop+72 是因为盒子头部有高度
						if(lf.scrollTop+15 >= data.offsetTop){
							// 移除所有 active 类名
							const old = document.querySelector('.content_left .active')
							if(old) old.classList.remove('active')
							// liftBox 滚动到相应位置后，liftButton 中的相应按钮触发
							ri.childNodes[index].classList.add('active');
						}
					})
				})
			}
			pdf()
		},
		methods:{
			// 电梯按钮
			titleClick(index){
				// 移除所有 active 类名
				const old = document.querySelector('.content_left .active')
				if(old) old.classList.remove('active')
				//当前选择=传过来的下标参数
				this.current=index
				//点中产品总名称 例如：（普洱茶）后，获取右方content_right滚动条高度
				var right=document.querySelector(".content_right");
				//获取右方头部标题
				var title=document.querySelectorAll(".right_header span")[index];
				title.classList.add('active')
				right.scrollTop=title.offsetTop-20
				
				// console.log(right,title.scrollTop,title)
				// console.log(title)
			},
			GetCategory(){
				this.$http.get("/mobile/index.php?"+
				    `act=index&op=getCategoryPageData&key=0293191f262729017df3720f63cddda8&xxclient=new`,{
					hesders: {"content-type": "text/html; charset=UTF-8"}
				})
				.then(res=>{
					// console.log(res.data.datas,'实验数据！！')
					this.categorys=res.data.datas
				})
				.catch(err=>console.log(err))
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/category.css");
	@import url("../assets/css/reset.css");
	.content_left{
		scroll-behavior: smooth;
	}
</style>
