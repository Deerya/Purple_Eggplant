import request from '@/utils/request.js'
import qs from 'qs'
 
function GetHome_s(data,config){
	// 返回一个promise
	return new Promise((resolve,reject)=>{
		request.get("/mobile/index.php?"+qs.stringify(data),config)
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{reject(err)})
	})
	
}

export {GetHome_s};