const fs = require('fs');

// 回调函数形式
fs.readFile('./resource/content.txt',(err,data)=>{
	// 如果出错，抛出错误
	if(err) throw err;
	// 输出文件内容
	console.log(data.toString());
})

// promise形式
// let p = new Promise((resolve,reject)=>{
// 	if.readFile('./resource/content.txt',(err,data)=>{
// 		// 如果出错
// 		if(err) reject(err);
// 		// 如果成功
// 		resolve(data)
// 	})
// })
// p.then(value=>{
// 	console.log(value.toString());
// },reason=>{
// 	console.log(reason);
// })