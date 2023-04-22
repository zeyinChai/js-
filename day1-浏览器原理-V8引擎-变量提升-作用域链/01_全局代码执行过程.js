var name = 'why'
console.log(num1);
var num1 = 20
var num2 = 30
var result = num1 + num2
console.log(result);

// V8引擎会帮助我们在执行之前做一些事情(编译阶段)

    // 1.刚开始创建一个globalObject = {}
        //  遇到var定义一些属性是undefined 打印时不报错而是undefined  叫产生变量提升
var globalObject = {
    String: '类',
    Date: '类',
    setTimeout: '函数',
    window: globalObject,
    name: undefined,
    num1: undefined,
    num2: undefined,
    result: undefined
}
    // 2.开始执行代码后 才对globalObject进行相应赋值