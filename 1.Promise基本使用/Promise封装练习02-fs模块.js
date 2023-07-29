// const { resolve } = require("path");

function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
};

mineReadFile('./resource/content.txt')
.then(value=>{
// 输出本地文件内容
console.log(value.toString());
},reason=>{
// 
console.log(reason);
})