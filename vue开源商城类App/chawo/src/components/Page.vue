<template>
	<div>
		<h1>我是内容</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				// 页面每一节的数据
				sections:[],
			}
		},
		props:{
			// 获取父组件Home传递给Page组件的参数 item Object类型 默认值是{}
			"item":{type:Object,default:function(){return {}}
			}
		},
		created(){
			this.getSections();
		},
		methods:{
			// 获取当前频道需要的数据
			getSections(){
				this.$http.post(
				"/v1/home/page",
				`client_id=180100031051&channel_id=&webp=1&page_type=${this.item.page_type}&page_id=${this.item.page_id}`,
				// {headers:{"content-type":"application/x-www-form-urlencoded"}} //请求配置
				)
				.then(res=>{
					// 更新sections
					this.sections = res.data.data.data.sections;
					// console.log(res.data.data.data.sections,"sections")
				})
				.catch(err=>console.error(err))
			}
		}
	}
</script>

<style>
</style>
