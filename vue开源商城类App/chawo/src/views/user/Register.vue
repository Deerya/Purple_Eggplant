<template>
	<div class="register">
		<div>
			<van-nav-bar left-arrow @click-left="$router.back()">
			  <template #right>
				<router-link to="/login">账号密码登录</router-link> 
			  </template>
			</van-nav-bar>
		</div>
		

		<div id="" style="text-align: center; margin: 60px 0;">
			<img src="../../assets/image/logo-font.png" alt="" width="100">
		</div>

		<van-form @submit="login()">
			<van-field v-model="user.userid" name="手机号" placeholder="请输入手机号"
				:rules="[{ required: true, message: '请输入手机号' },{pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:'4-16位用户名'}]" />
				
				
				<div class="hint">未注册的手机号验证后自动创建茶窝网账号</div>
			<div class="register" style="margin: 16px;">
				<van-button round block color="#C9141C" native-type="submit">登录</van-button>
			</div>
			
		</van-form>
		<div class="consent"><label><input type="checkbox" checked ><span>同意</span></label></div>
	</div>
</template>
<style scoped="scoped">
	.register .hint{
		margin-left: 5%;
		color: #ABA2A2;
		margin-top: 15px;
		font-size: 15px;
	}
	.register .consent{
		margin-left: 15%;
	}
	.register .consent input{
		margin-right: 5px;
	}
</style>
<script>
	import {
		Login
	} from '../../api/user/user.js'
	export default {
		data() {
			return {
				user: {
					fmdo: "login",
					dopost: "login",
					userid: '',
					pwd: '',
					checked: true,
				}
			}
		},
		methods: {
			login() {
				Login(this.user)
					.then(res => {
						alert(res.data.msg);
						if (res.data.status == 1) {
							this.$router.replace("/user")
						}
					})
			},
		}
	}
</script>
<style type="text/css">
	.register .van-nav-bar .van-icon {
		color: #999 !important;
	}
	.register .van-form .register{
		padding-left: 35px;
		padding-right: 35px;
	}

	.register .van-nav-bar__text {
		color: #999;
	}
</style>
