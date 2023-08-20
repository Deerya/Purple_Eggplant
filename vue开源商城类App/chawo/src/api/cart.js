import request from '@/utils/request.js'
import qs from 'qs'
 
function GetCart(data){
	// 返回一个promise
	return new Promise((resolve,reject)=>{
		request.get("/mi/cart.php")
		.then(res=>{resolve(res)})
		.catch(err=>{reject(err)})
	})
	
}
 
 

export {GetCart};