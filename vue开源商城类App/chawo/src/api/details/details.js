import request from '@/utils/request.js'
import qs from 'qs'
 
// 获取详情页面的信息
function GetView(data,config){
	// 返回一个promise
	return new Promise((resolve,reject)=>{
		request.post("/v1/miproduct/view",qs.stringify(data),config)
		.then(res=>{resolve(res)})
		.catch(err=>{reject(err)})
	})
	
}
 

export {GetView};