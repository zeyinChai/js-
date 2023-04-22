setTimeout(function(){          // 宏任务
    console.log('setTimeout1');

    new Promise(function (resolve){ 
        resolve()
    }).then(function(){                     
        new Promise(function (resolve){
            resolve()
        }).then(function(){
            console.log('then4');
        })
        console.log('then2');
    })
})

new Promise(function (resolve){
    console.log('promise1');        // promise的函数是立即执行的
    resolve()
}).then(function (){                // 微任务
    console.log('then1');
})

setTimeout(function (){         // 宏任务
    console.log('setTimeout2');
})

console.log(2);

queueMicrotask(()=>{            // 微任务
    console.log('q');
})
new Promise(function(resolve){
    resolve()
}).then(function (){            // 微任务
    console.log('then3');
})

// promise1 2   then1  q    then3   settimeout1  then2   then4   settimeout2





