import {GetUserInfo,Login} from '@/api/user/user.js'
var user = {
	namespaced: true, //命名空间 （mutations，和actions的）
	state:{
		userInfo:{
			// "M_LoginID":"zeng8",
			// "M_Scores":1200,
		}
	},
	mutations:{
		// 把模块的分数加1
		addScore(state,step=1){
			state.userInfo.M_Scores+=step;
		},
		initUser(state,userInfo){
			// 初始化更新state中的UserInfo
			state.userInfo = userInfo;
		}
	},
	actions:{
		// 获取用户信息
		getUserInfo(context){
			// 执行获取用户信息API
			GetUserInfo().then(res=>{
				if(res.data){
					// 重新赋值个userInfo
					// this.userInfo = res.data;
					// 如果有数据则调用Mutations initUser
					context.commit("initUser",res.data)
				}
			},err=>{
				console.log(err.message)
			})
		},
		logout(context){
			// 退出和登录是一个接口传入的参数不一致
			Login({dopost:"exit"})
			.then(res=>{
				alert(res.data.msg);
				// 如果状态为1代表退出成功
				if(res.data.status==1){
					context.commit("initUser",{M_LoginID:"游客"}) 
					// 注销清除token
					window.localStorage.removeItem("token");
					// 注销的时候要移除登录状态
					window.localStorage.removeItem("isLog");
				}
			})
		}
		
	}
}
// 导出用户模块
export default user;