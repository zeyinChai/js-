// JS语法允许函数内部再定义一个函数
// function foo() {
//     return function bar() {
//         console.log('bar');
//     }
// }

// var fn = foo()
// fn()


function makeAdder(count) {
    return function add(num){
        return count + num
    }
}

var add5 = makeAdder(5)
console.log(add5(6));

// 高阶函数：一个函数如果接收另外一个函数作为参数 或者 该函数会返回一个函数作为返回值的函数,
                // 那么这个函数就称为一个高阶函数