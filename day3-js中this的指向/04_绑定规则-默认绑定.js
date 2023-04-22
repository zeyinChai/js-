// 默认绑定 独立函数调用    指向window
// 1.案例一
// function foo() {
//     console.log(this);
// }

// foo()

//  2.案例二
// function foo1() {
//     console.log(this);  // window
// }

// function foo2() {
//     console.log(this);  // window
//     foo1()
// }

// function foo3() {
//     console.log(this);  // window
//     foo2()  
// }

// foo3()


// 3.案例三
// var obj = {
//     name:'why',
//     foo:function() {
//         console.log(this);
//     }
// }

// var bar = obj.foo
// bar()   // window

// 4.案例四
// function foo(){
//     console.log(this);
// }
// var obj = {
//     name:'why',
//     foo:foo
// }

// var bar = obj.foo
// bar()   // window

// 5.案例五
function foo() {
    return function bar() {
        console.log(this);
    }
}

var fn = foo()
fn()    // window