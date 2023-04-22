var name = 'why'

foo(123)
function foo(num) {
    console.log(m);
    var m = 10
    var n = 20

    function bar() {
        console.log(name);
    }
    bar()
}


// V8引擎会帮助我们在执行之前做一些事情(编译阶段)

    // 1.刚开始创建一个globalObject = {}
        //  所以一些属性是undefined 打印时不报错而是undefined  叫产生变量提升
    var globalObject = {
        String: '类',
        window: globalObject,
        name: undefined,
        foo:0xa00
        // 函数并不会像一般变量那样初始为undefined而是一个内存地址 
        // 0xa00代表是一个内存地址    指向一个存储空间里面放的是 1.函数的作用域  2.函数的执行体
    }

    // 2.开始执行代码后 才对globalObject进行相应赋值