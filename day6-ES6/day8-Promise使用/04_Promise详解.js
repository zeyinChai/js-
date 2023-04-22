new Promise((resolve,reject)=>{
    console.log('----------------');    // pending阶段  待定
    resolve()                           // fulfiled阶段
    reject()                            // rejected阶段
    // 状态一旦确定就不可更改
}).then(res=>{
    console.log('res',res);             // fulfiled阶段 已敲定
},err => {
    console.log('err',err);             // rejected阶段 已拒绝
})

// promise.all([a,b,c]) 等所有的promise执行完后 成功的结果是res数据组成的一个数组
// 等待所有的res结束后才返回一个promise 但是如果有一个rej 那么all函数就会返回一个状态为第一个rej

// promise.race([a,b]) 等最快的promise完成后返回 一旦数组中有一个promise被res或rej就会立刻返回

// 在异步编程里面 许多操作都会放在回调函数中，有时候需要拿到上一个异步操作的返回值再做第二次请求
//      每增加一个异步请求，就会多添加一层回调函数 陷入回调地域
//          Promise应运而生
//  Promise本身不是异步的,往往内部都封装了一个异步任务、