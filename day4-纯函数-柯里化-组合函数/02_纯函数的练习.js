// foo是个纯函数
// 1.相同的输入产生相同的输出
// 2.在执行的过程中不会产生任何副作用
// function foo(num1,num2) {
//     return num1 * 2 + num2 * num2
// }

// bar不是一个纯函数
// 修改了外界变量 产生了副作用
// var name = 'abc'
// function bar() {
//     console.log('bar代码执行');
//     name = 'cba'
// }
// bar()
// console.log(name);


// baz不是纯函数
// 修改了obj里的数据 产生了副作用
// function baz(info) {
//     info.age = 100
// }
// var obj = {name:'why',age:18}
// baz(obj)
// console.log(obj);

// test是纯函数     返回的都是同一个值
// function test(info) {
//     return{
//         ...info,
//         age:100
//     }
// }
// test(obj)
// console.log(test(obj));


