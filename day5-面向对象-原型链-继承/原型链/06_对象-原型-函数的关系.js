var  obj = {
    name:'why'
}
console.log(obj.__proto__ === Object.prototype);
// 函数本身也是一个对象     既有foo.__proto__又有foo.prototype
// foo.prototype来自哪里?
// 创建一个函数, foo.prototype = {constructor:foo}
// foo.__proto__来自哪里?
// new Fuction()  foo.__proto__ = Function.prototype
function foo() {

}
console.log(foo.prototype === foo.__proto__);
console.log(foo.prototype.constructor);
console.log(foo.__proto__.constructor);









