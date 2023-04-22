Function.prototype.hyapply = function(thisArg,argArray) {
    // 1.获取到要执行的函数
    var fn = this

    // 2.对this转化为对象类型 防止传入的非对象类型 导致不能隐式转换
    thisArg = (thisArg !== null && thisArg !==undefined) ? Object(thisArg) : window

    // 3.执行函数
    thisArg.fn = fn     // 给对象添加一个方法   为了之后可以用  对象.方法   的形式来隐式调用
    if(!argArray){  // 无参数
        result = thisArg.fn()
    } else {    // 有参数
        result = thisArg.fn(...argArray)
    }
    delete thisArg.fn
    return result
}

function sum(num1,num2){
    console.log('sum被调用',this,num1,num2);
    return num1 + num2
}

function foo(num) {
    return num
}

function bar() {
    console.log('bar函数被执行',this);
}

// 系统调用
// var result = sum.apply('abc',[20,30])
// console.log(result);


// 自己实现调用
// var  result = sum.hyapply(123,[20,30])
// console.log(result);

// var result2 = foo.hyapply('abc',[123])
// console.log(result2);

bar.hyapply('abc')

