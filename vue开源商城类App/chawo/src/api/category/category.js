// 存放分类模块，ajax所有方法
// 导入request 封装好的
import request from '@/utils/request.js'
import qs from 'qs'

// 定义一个获取分类的方法
function GetCategory(data,config){
	// 返回一个promise
	return new Promise((resolve,reject)=>{
		request.post("/v1/home/category_v2",qs.stringify(data),config)
		.then(res=>{resolve(res)})
		.catch(err=>{reject(err)})
	})
	
}

// 为什么要返回promise，当我们调用方法=时候
/* GetCategory(参数)
.then(res=>{})
.catch(err=>err) */

// 导出分类
export {GetCategory};