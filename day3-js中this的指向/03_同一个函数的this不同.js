// this指向什么跟函数所处的位置无关
// 跟函数被调用的方式有关系的
function foo() {
    console.log(this);
}

// 1.直接调用
foo()

// 2.创建一个对象，对象中的函数指向foo
var obj = {
    name:'why',
    foo:foo
}

obj.foo()

// 3.apply调用
foo.apply('abc')

// 总结
//  1. 函数在调用时,JS会默认给this绑定一个值
//  2. this的绑定和定义位置(编写的位置)没有关系
//  3. this的绑定和调用方式以及调用的位置有关系
//  4. this是在运行的时候被绑定的