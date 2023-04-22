function foo() {

}

// 函数也是一个对象
// console.log(foo.__proto__); //  也有proto属性

// 函数它因为是一个函数 所以会多出来一个 显示原型的属性 prototype
console.log(foo.prototype);

// var f1 = new foo()
// var f2 = new foo()

// console.log(f1.__proto__===foo.prototype);
// console.log(f2.__proto__===foo.prototype);

// foo.prototype身上有constructor属性   指向构造函数本身

// 直接修改整个prototype对象
foo.prototype = {
    name:'why',
    age:18
}
console.log(foo.prototype);



