module.exports={
	devServer:{
		open:true,
		proxy:{
			"/v1":{
				target:"https://m.mi.com/",
				changeOrigin:true,
				// 当请求的时候，添加请求头，欺骗别人服务器
				onProxyReq(proxyReq, req, res) {
					proxyReq.setHeader('Referer', 'https://m.mi.com/'); 
					 
				}
			},
			"/member":{
				target:"http://www.520mg.com",
				changeOrigin:true,
			},
			"/mobile":{
				target:"https://www.chawo.com/",
				changeOrigin:true,
				onProxyReq(proxyReq,req,res){
					proxyReq.setHeader('referer','https://www.chawo.com/wap/')
				}
			}
		}
	}
}