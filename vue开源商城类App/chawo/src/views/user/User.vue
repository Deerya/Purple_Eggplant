<template>
	<div class="user">
		<div class="header">个人中心</div>
		<div class="have_logged_on" v-if="userInfo.M_LoginID">
			<div class="top">
				<div>
					<div class="message_g">
						<img src="../../assets/image/Icon_man.png" width="30%">
						<div>
							<p>昵称: {{userInfo.M_LoginID}}</p>
							<span>会员等级:普通会员</span>
							<p>积分：{{userInfo.M_Scores}}</p> 
						</div>
					</div>
					<div>
						<img src="../../assets/image/arrows_img.png" width="24">
					</div>
				</div> 
					<div class="quit"><span @click="logout()">退出登录</span></div>
			</div>

			<van-cell title="我的订单" value="查看更多" is-link to="index" />
			<div class="state">
				<div>
					<van-icon name="cash-back-record" />
					<p>待付款</p>
				</div>
				<div>
					<van-icon name="logistics" />
					<p>待收货</p>
				</div>
				<div>
					<van-icon name="chat-o" />
					<p>待评价</p>
				</div>
				<div>
					<van-icon name="replay" />
					<p>退款/退货</p>
				</div>
			</div>  


			<van-cell title="联系客服" is-link to="index" icon="chat-o"></van-cell>            
			<van-cell title="积分中心" is-link to="index" icon="gold-coin-o"></van-cell>            
			<van-cell title="积分订单" is-link to="index" icon="label-o"></van-cell>            
			<van-cell title="我的收藏" is-link to="index" icon="star-o"></van-cell>            
			<van-cell title="代金券" is-link to="index" icon="coupon-o"></van-cell>            
			<van-cell title="收货地址" is-link to="index" icon="wap-nav"></van-cell>           
			<van-cell title="设置" is-link to="index" icon="setting-o"></van-cell>
			<div class="relation">客服电话:0871-6666 6665&emsp;工作时间:09：00-23：00</div>
		</div>

		<div v-else class="have_logged_on not_log_in">
			<div class="top">
				<div>
					<div class="message_g">
						<img src="../../assets/image/Icon_man.png" width="30%">
				        <div class="but" style="display: flex; justify-content: space-evenly;">
			                <div><router-link to="/login">账号密码登录</router-link> </div>
			                <div><router-link to="/register">手机号登录</router-link></div>
				        </div> 
					</div>
					<div>
						<img src="../../assets/image/arrows_img.png" width="24">
					</div>
				</div> 
				<!-- <div>个人中心</div> -->
			</div>

			<van-cell title="我的订单" value="查看更多" is-link to="index" />
			<div class="state">
				<div>
					<van-icon name="cash-back-record" />
					<p>待付款</p>
				</div>
				<div>
					<van-icon name="logistics" />
					<p>待收货</p>
				</div>
				<div>
					<van-icon name="chat-o" />
					<p>待评价</p>
				</div>
				<div>
					<van-icon name="replay" />
					<p>退款/退货</p>
				</div>
			</div>  


			<van-cell title="联系客服" is-link to="index" icon="chat-o"></van-cell>            
			<van-cell title="积分中心" is-link to="index" icon="gold-coin-o"></van-cell>            
			<van-cell title="积分订单" is-link to="index" icon="label-o"></van-cell>            
			<van-cell title="我的收藏" is-link to="index" icon="star-o"></van-cell>            
			<van-cell title="代金券" is-link to="index" icon="coupon-o"></van-cell>            
			<van-cell title="收货地址" is-link to="index" icon="wap-nav"></van-cell>           
			<van-cell title="设置" is-link to="index" icon="setting-o"></van-cell>
			<div class="relation">客服电话:0871-6666 6665&emsp;工作时间:09：00-23：00</div>
		</div>

	</div>
</template>
<script>
	import {
		GetUserInfo,
		Login
	} from '../../api/user/user.js'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		methods: {
			logout() {
				Login({
						dopost: "exit"
					})
					.then(res => {
						alert(res.data.msg);
						if (res.data.status == 1) {
							this.userInfo = {};
						}
					})
			}
		},
		created() {
			GetUserInfo()
				.then(res => {
					if (res.data) {
						this.userInfo = res.data;
					}
				})
		}
	}
</script>
<style scoped="scoped">
	@import url("../../assets/css/user.css");
</style>
