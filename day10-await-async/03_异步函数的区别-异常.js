// 普通函数         抛出异常之后 后面的代码就不会执行了
// function foo1(){
//     console.log('foo function start~');

//     console.log('执行');
//     console.log('执行');
//     throw new Error('error message')
//     console.log('执行');

//     console.log('foo function end~');

// }
// // 异步函数的返回值是一个promise
// foo1()  
// console.log('后续代码');             // 此时不会执行这里的代码


// 异步函数
async function foo1(){
    console.log('foo function start~');

    console.log('执行');
    console.log('执行');
    // 异步函数中的异常,会被作为异步函数返回Promise的reject值的
    throw new Error('error message')
    console.log('执行');

    console.log('foo function end~');

}
// 异步函数的返回值是一个promise
foo1().catch(err => {
    console.log(err);
})
console.log('后续代码');        // 此时可以执行







