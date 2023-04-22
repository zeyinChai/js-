// function foo() {
//     return new Promise()
// }


// 传入一个回调函数 会立即执行  里面有resolve和reject两个回调函数
// 成功：回调resolve函数
// 失败：回调reject函数
const chengnuo = new Promise((resolve,reject)=>{  
    // console.log('被立即执行了');
    resolve('成功')
    reject('失败')
})

// then方法传入回调函数,会在promise执行resolve函数时,被回调
chengnuo.then((res)=>{

})
// catch方法传入回调函数,会在promise执行reject函数时,被回调
chengnuo.catch((err)=>{

})
