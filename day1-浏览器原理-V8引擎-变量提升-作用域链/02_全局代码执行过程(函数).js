var name = 'why'

foo(123)
function foo(num) {
    console.log(m);
    var m = 10
    var n = 20
    // var name = 'foo'

    console.log(name);          //当查找一个变量时,真实查找路径是沿着 作用域链 来查找
                                    // 作用域链实际上: 自身作用域 + 父级作用域
                                    // 自身找不到就会去父级寻找
}


// V8引擎会帮助我们在执行之前做一些事情(编译阶段)

    // 1.刚开始创建一个globalObject = {}
    var globalObject = {
        String: '类',
        window: globalObject,
        name: undefined,
        foo:0xa00
        // 遇到function关键字 函数并不会像一般变量那样初始为undefined而是一个内存地址 
        // 0xa00代表是一个内存地址    指向一个存储空间里面放的是 1.函数的作用域  2.函数的执行体
    }

    // 2.开始执行代码后 才对globalObject进行相应赋值