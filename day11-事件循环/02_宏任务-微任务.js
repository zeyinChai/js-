setTimeout(()=>{
    console.log('time');
},1000)

queueMicrotask(()=>{
    console.log('q');
})

Promise.resolve().then(()=>{
    console.log('Promise then');
})

function foo() {
    console.log('bar');
}
foo()
console.log('其他代码');

// 宏任务 定时器 AJAX DOM

// 微任务   queueMicrotask Promise.then

// 规范：在执行任何的宏任务之前都需要保证微任务清空了


