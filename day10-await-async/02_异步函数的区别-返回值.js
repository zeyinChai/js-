async function foo1(){
    console.log('foo function start~');

    console.log('执行');
    console.log('执行');
    console.log('执行');

    console.log('foo function end~');
    return 123
}
// 异步函数的返回值是一个promise
const promise = foo1()    
console.log(promise);
promise.then(res =>{
    console.log('promise then function exec',res);
})












