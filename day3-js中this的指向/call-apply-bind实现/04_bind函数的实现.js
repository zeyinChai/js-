Function.prototype.hybind = function(thisArg,...argArray) {
    // 1.获取真实需要调用的函数
    var fn = this

    // 2.绑定this
    thisArg = (thisArg !== null && thisArg !==undefined) ? Object(thisArg) : window

    return function(...args) {
        thisArg.fn = fn
        var finalArg = [...argArray,...args]
        var result = thisArg.fn(...finalArg)
        delete thisArg.fn
        return result
    }
}

function foo() {
    console.log('foo被执行',this);
    return 20
}

function sum(num1,num2,num3,num4) {
    console.log(num1,num2,num3,num4);
    return 1111
}

// 系统调用
// var bar = foo.bind('abc')
// bar()

// var newSum = sum.bind('aaa',10,20,30,40)
// newSum()

// var newSum = sum.bind('AAA')
// newSum(10,20,30,40)

// var newSum = sum.bind('aaa',10)
// newSum(20,30,40)

// 自己调用
// var bar = foo.hybind('abc')
// console.log(bar());

var newSum = sum.hybind('abc',10,20)
var result = newSum(30,40)
console.log(result);