// 为什么要封装axios
// 01 统一请求默认配置
// 02 扩展axios方法（jsonp）
// 03 拦截请求与相应（加载提示，添加请求头 token权限）
// 04 请求的集中管理
// 00 导入
import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
// 导入Toast
import { Toast } from 'vant';
// 01 创建实例
var request = axios.create({
	baseURL: "/",
	timeout: 5000,
	headers: {
		post: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
})
// 02 拦截
request.interceptors.request.use(

	function(config) {
		// console.log("开始加载：",config.url)
		if(localStorage.getItem("token")){
			// 如果本地存储有token 那么请求的时候添token请求头
			config.headers.Token = localStorage.getItem("token")
		}
		if(config.loading){
			// 如果传入loading属性，显示loading提示
			Toast.loading(config.loading);
		}
		return config;
	},
	function(err) {
		Toast.clear();
		Promise.reject(err)
	},
)
// 请求完毕拦截
request.interceptors.response.use(
	function(res) {
		Toast.clear();
			
		// console.log("结束加载提示",res.data);
		return res;
	},
	function(err) {
		Toast.clear();
		Promise.reject(err)
	}
)
// 03 扩展方法(axios不支持jsonp，手动写一个jsonp)
/**
 * 扩展axios的jsonp方法
 * @param {String}  url  要获取的网址
 * @param {Object}  opts  可选参数选项
 * @param {Number}  opts.param  用于指定回调的查询字符串参数的名称（默认为callback）
 * @param {String}  opts.timeout  发出超时错误后多长时间。0禁用（默认为60000）
 * @param {String}  opts.prefix  处理 jsonp 响应的全局回调函数的前缀（默认为__jp）
 * @param {String}  opts.name  处理 jsonp 响应的全局回调函数的名称（默认为prefix+ 递增计数器）
 * @return {Promise} 返回的是一个promsie对象
 * @description 扩展axios的jsonp方法 
 */
request.jsonp = function(url, opts) {
	// resolve成功解决，reject失败拒绝
	return new Promise((resolve, reject) => {
		jsonp(url, opts, function(err, data) {
			if (err) {
				reject(err)
			}
			if (data) {
				resolve(data)
			}
		})
	})
}

// 04 导出
export default request;
