function foo(num1,num2,num3){
    // 类数组对象中(长得像一个数组，本质上是个对象):arguments
    console.log(arguments);

    // 常见对arguments操作
    // 1.获取参数长度
    console.log(arguments.length);
    // 2.根据索引值获取某个长度
    console.log(arguments[2]);
    // 3.callee获取当前arguments所在的函数
    console.log(arguments.callee);
}

foo(10,20,30,40,50)

