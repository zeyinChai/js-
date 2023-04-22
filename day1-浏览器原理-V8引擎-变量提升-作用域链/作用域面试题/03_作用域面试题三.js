var a = 100

function foo() {
    console.log(a); // undefined

    return          // 编译阶段不管return  return是执行阶段才起作用

    var a = 100
}

foo()