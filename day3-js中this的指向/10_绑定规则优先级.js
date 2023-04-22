// var obj = {
//     name:'obj',
//     foo:function(){
//         console.log(this);
//     }
// }

// obj.foo()

// 1. 显示绑定和隐式绑定比较
// call/apply/bind
// obj.foo.call('abc') // 打印的是abc而不是obj

// var bar = obj.foo.bind('cba')    // 打印的是cba 而不是obj
// bar()

// 所以 显示绑定高于隐式绑定

// 2. new和隐式绑定比较
// var obj2 = {
//     name:'obj2',
//     foo:function(){
//         console.log(this);
//     }
// }

// var f = new obj2.foo()  // 打印的是foo创建的对象 而不是obj2 所以new的优先级高于隐式绑定

// 3. new和显示绑定比较
// new关键字和apply/call不能一起来使用
function foo() {
    console.log(this);
}

var bar = foo.bind('aaa')
var obj3 = new bar()
// 打印的是foo创建的对象 所以new的优先级大于显示绑定

