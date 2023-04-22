// request.js
function requestData(url,successCb,failedCb) {
    // 模拟请求
    setTimeout(()=>{
        // url传入是coderwhy请求成功
        if(url === 'coderwhy') {
            // 成功
            let name = ['abc','bca']
            successCb(name)
        } else {
            // 失败
            let errMessage = '请求失败'
            failedCb(errMessage)
        }
        // 否则失败
    },3000)
}

// main.js
requestData('coderwhy',(res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})

// 这种回调的弊端：
//      如果用第三方库 必须看源码 才知道该怎么用



