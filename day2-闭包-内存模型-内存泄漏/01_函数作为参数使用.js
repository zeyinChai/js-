// function foo(arg) {
//     console.log('foo',arg);
// }
// foo(123)

// 将函数作为另外一个函数的参数
// function foo(aaa) {
//     aaa()
// }

// function bar() {
//     console.log('bar');
// }

// foo(bar)

// 案例
function calc(num1,num2,calcFn) {
    console.log(calcFn(num1,num2));
}

function add(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1 - num2
}
var m = 30
var n = 20
calc(m,n,add)