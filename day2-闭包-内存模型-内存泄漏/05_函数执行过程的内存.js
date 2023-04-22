function foo() {
    var name = 'foo'
    var age = 18

    return function bar() {
        console.log(name);
        console.log(age);
    }
}
var fn = foo()
fn()


// fn = null
// foo = null
// 如果后续不再使用函数的话 但是内存未被销毁则会造成内存泄漏