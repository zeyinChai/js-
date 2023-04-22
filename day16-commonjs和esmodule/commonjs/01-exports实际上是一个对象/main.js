const bar = require('./01-exports实际上是一个对象/bar')


console.log(bar.name);

setTimeout(()=>{
    // exports实际上是一个对象 所以bar指向的也是这个对象
    // 在bar.js中 2s后 把exports对象里的name修改了 所以这里bar.name也被改了
    console.log(bar.name);
},3000)