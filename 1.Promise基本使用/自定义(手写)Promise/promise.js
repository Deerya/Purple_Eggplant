class Promise{
    // 构造方法
    constructor(executor){
        // 添加属性
        this.PromiseSate = 'pending'
        this.PromiseResult = null
        // 声明属性
        this.callback = [];
        // 保存实例对象的this的值
        const self = this;

        // 成功的 resolve 函数
        function resolve(data) {
            // 判断
            if (self.PromiseSate !== 'pending') return;
            // 1.修改对象的状态 (promiseState)
            self.PromiseSate = 'fulfilled'; //resolve
            // 2.设置对象的结果值 (promiseResult)
            self.PromiseResult = data; //reject
            // 调用成功的回调函数
            setTimeout(() => {
                self.callback.forEach(item=>{
                    item.onResolved(data)
                });
            });
        }

        // 失败的 reject 函数
        function reject(data) {
            // 判断
            if (self.PromiseSate !== 'pending') return;
            // 1.修改对象的状态 (promiseState)
            self.PromiseSate = 'rejected'; //resolve
            // 1.设置对象的结果值 (promiseResult)
            self.PromiseResult = data; //reject
            // 调用成功的回调函数
            setTimeout(() => {
                self.callback.forEach(item=>{
                    item.onRejected(data)
                });
            });
        }

        try {
            // 同步调用【执行器函数】
            executor(resolve,reject);
        } catch (e) {
            // 修改 Promise对象状态为 [失败]
            reject(e);
        }
    }

    // 封装 then 方法
    then(onResolved,onRejected){
        const self = this;
        // 判断回调函数参数
        if(typeof onRejected !== 'function'){
            onRejected = reason=>{
                throw reason
            }
        }if (typeof onResolved !== 'function') {
            onResolved = value => value;
        }
        return new Promise((resolve, reject)=>{
            // 封装 callback 函数 type 为接受的参数
            function callback(type) {
                try {
                    // 获取回调函数的执行结果
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        // 如果是Promise类型的对象
                        result.then(v=>{
                            resolve(v);
                        },r=>{
                            reject(r);
                        })
                    } else {
                        // 结果的对象为【成功】
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }
            // 调用回调函数 PromiseSate
            if (this.PromiseSate === 'fulfilled') {
                // 调用 callback 并传递参数 onResolved
                // 下方 callback 函数全是代码相同参数不同
                setTimeout(() => {
                    // 成功
                    callback(onResolved);
                });
            } if(this.PromiseSate === 'rejected') {
                setTimeout(() => {
                    // 失败
                    callback(onRejected)
                });
            } if(this.PromiseSate === 'pending') {
                // 保存回调函数
                this.callback.push({
                    onResolved : function () {
                        callback(onResolved)
                    },
                    onRejected : function () {
                        callback(onRejected)
                    }
                }) 
            }
        })
    }

    // 封装 catch 方法
    catch(onRejected) {
        return this.then(undefined,onRejected);
    }

    // 封装 resolve 方法
    static resolve(value) {
        // 返回一个 Promise 对象
        return new Promise((resolve,reject)=>{
            if (value instanceof Promise) {
                value.then(v=>{
                    resolve(v);
                },r=>{
                    reject(r);
                })
            } else {
                // 状态设置为成功
                resolve(value)
            }
        })
    }

    // 封装 reject 方法
    static reject(value) {
        // 返回一个 Promise 对象
        return new Promise((resolve,reject)=>{
            reject(value)
        });
    }

    // 封装 all 方法
    static all(promises) {
        // 返回一个 Promise 对象
        return new Promise((resolve,reject)=>{
            // 声明变量
            let count = 0;
            let arr = [];
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v=>{
                    // 得知对象的状态是成功
                    // 每个Promise对象都成功
                    count++;
                    // 将当前promise对象成功的结果存入到数组中
                    arr[i]=v;
                    if(count === promises.length){
                        // 修改状态
                        resolve(arr);
                    }
                },r=>{
                    reject(r);
                });
            }
        });
    }

    // 封装 race 方法
    static race(promises) {
        // 返回一个 Promise 对象
        return new Promise((resolve,reject)=>{
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v=>{
                    // 修改返回对象的状态为 [成功]
                    resolve(v);
                },r=>{
                    // 修改返回对象的状态为 [失败]
                    reject(r)
                });
            }
        });
    }
}
