function foo() {
    var name = 'foo'
    return function bar() {         // bar函数形成闭包
        console.log('bar',name);
    }
}

var fn = foo()      // 这一行执行完 foo函数应该被销毁 但是没有被销毁 依然可以访问foo里的name
fn()

function outer(n){
    debugger
    return function inner(){
        console.log(n);
    }
}
outer(1)() // 有闭包

// function outer(n){
//     debugger
//     return function inner(n){
//         console.log(n);
//     }
// }
// outer(1)() // 无闭包


// 为什么foo()执行完 没有被销毁 ?
// 因为垃圾回收机制中的标记清除的  根元素是 GO 
        //   预解析开始后   GO中的  fn从 undefined 变成了return回来bar()的地址   
        //        又因为bar()中有数据 指向 它父级作用域foo()的name
        //        所以未被销毁


// 闭包是两部分组成：函数 + 可以访问的自由变量
// 闭包：JS中的一个函数 如果访问了外层作用域的变量 那么它就是一个闭包

// 面试先提一下 闭包 和 作用域 与 垃圾回收机制 有关