function foo() {
    var a = b = 10
    //  => 下面的代码
    //  b = 10
    //  var a = 10
}

foo()

// console.log(a);      报错 a是找不到的
console.log(b);