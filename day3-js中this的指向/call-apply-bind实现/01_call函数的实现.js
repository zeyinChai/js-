// 给所有的函数添加一个hycall方法
Function.prototype.hycall = function(thisArg, ...args) {
    // 在这里可以去执行调用的那个函数(foo)
    // 问题:    得可以获取到是哪个函数执行了
    // 1.需要被执行的函数
    var fn = this

    // 2.对this转化为对象类型 防止传入的非对象类型 导致不能隐式绑定
    thisArg = (thisArg !== null && thisArg !==undefined) ? Object(thisArg) : window

    // 调用需要被执行的函数 
    thisArg.fn = fn                     // 给对象绑定方法    当传入参数时 用对象的方法来隐式绑定
    var result = thisArg.fn(...args)    // 隐式转换改变this执行     仿call的改变this执行
    delete thisArg.fn

    // 返回结果
    return result
}

// function foo() {
//     console.log('foo函数被执行',this);
// }

function sum(num1,num2) {
    console.log('sum函数被执行了',this,num1,num2);
    return num1 + num2
}

// 系统自己的call方法
// foo.call()
// var result = sum.call({},20,30)
// console.log('系统调用的结果',result);

// 自己实现的hycall方法
// foo.hycall(123)          // 默认进行了隐式绑定   所以上面的 hycall 里面的 this 变成了foo
var result = sum.hycall('abc',123,456)
console.log('自己的方法',result);










