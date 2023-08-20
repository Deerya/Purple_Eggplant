import request from '@/utils/request.js'
import qs from 'qs'
 
function Login(data){
	// 返回一个promise
	return new Promise((resolve,reject)=>{
		request.post("/member/index_login2.php",qs.stringify(data))
		.then(res=>{resolve(res)})
		.catch(err=>{reject(err)})
	})
	
}
function GetUserInfo(){
	// 获取用户信息的方法
	return new Promise((resolve,reject)=>{
		request.get("/member/ajax_login.php")
		.then(res=>{resolve(res)})
		.catch(err=>{reject(err)})
	})
	
}

export {Login,GetUserInfo};