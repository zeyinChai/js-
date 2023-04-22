var message = 'hello Global'

function foo() {    // 定于在全局 所以foo的父级作用域就是全局GO    作用域只跟定义的位置有关 跟编译的位置无关
    console.log(message);   
}

function bar() {
    var message = 'hello Bar'
    foo()
}

bar()