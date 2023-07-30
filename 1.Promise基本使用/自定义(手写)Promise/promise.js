// 声明构造函数
function Promise(executor) {
    // 添加属性
    this.PromiseSate = 'pending'
    this.PromiseResult = null
    // 声明属性
    this.callback = [];
    // 保存实例对象的this的值
    const self = this;

    // resolve 函数
    function resolve(data) {
        // 判断
        if (self.PromiseSate !== 'pending') return;
        // 1.修改对象的状态 (promiseState)
        self.PromiseSate = 'fulfilled'; //resolve
        // 2.设置对象的结果值 (promiseResult)
        self.PromiseResult = data; //reject
        // 调用成功的回调函数
        self.callback.forEach(item=>{
            item.onResolved(data)
        });
    }

    // reject 函数
    function reject(data) {
        // 判断
        if (self.PromiseSate !== 'pending') return;
        // 1.修改对象的状态 (promiseState)
        self.PromiseSate = 'rejected'; //resolve
        // 1.设置对象的结果值 (promiseResult)
        self.PromiseResult = data; //reject
        // 调用成功的回调函数
        self.callback.forEach(item=>{
            item.onRejected(data)
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

// 添加 then 方法
Promise.prototype.then = function (onResolved,onRejected) {
    // 调用回调函数
    if (this.PromiseSate === 'fulfilled') {
        onResolved(this.PromiseResult);
    } if(this.PromiseSate === 'rejected') {
        onRejected(this.PromiseResult);
    } if(this.PromiseSate === 'pending') {
        // 保存回调函数
        this.callback.push({
            onResolved : onResolved,
            onRejected : onRejected
        }) 
    }
}