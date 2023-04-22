// request.js
function requestData(url) {
    return new Promise((resolve, reject) => {
        // 模拟请求
        setTimeout(() => {
            // url传入是coderwhy请求成功
            if (url === 'coderwhy') {
                // 成功
                let name = ['abc', 'bca']
                resolve(name)
            } else {
                // 失败
                let errMessage = '请求失败'
                reject(errMessage)
            }
            // 否则失败
        }, 3000)
    })
}

// main.js
const promise = requestData('coderwhy')
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

