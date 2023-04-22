// 1.await跟上表达式
function requestData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(222)
            reject(333)
        },2000)
    })
}

// async function foo() {
//    const res = await requestData()     // await后面一般跟表达式 一般返回一个promise
//    console.log('-------------------');  // await后面的表达式执行后 才会执行下面的代码
//    console.log(res);
// }
// foo()

// 2.跟上其他的值
// async function foo() {
//     const res1 = await 123      // 跟其他情况一样
//     console.log('res1:',res1);      
// }
// foo()

// 3.reject值
async function foo() {
    const res1 = await requestData()
    console.log('res1:',res1);
}
foo().catch(err => {
    console.log('err',err);
})

