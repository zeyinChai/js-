var obj = {
    name:'why',
    age:18
}

// obj.__proto__ = {
//     address:'北京市'
// }

console.log(obj.address);
// 原型链
// 1.在当前对象中查找属性
// 2.如果没有找到,就会去原型(__proto__)对象上查找        因为 obj.__proto__ === Object.prototype
// 3.如果没有找到,就会去构造函数的prototype.__proto__查找
// 这样依次查找就形成了原型链   原型链的顶端是 null

console.log(obj.__proto__.__proto__);       //  顶层对象的__proto__是null
// 实际上 obj.__proto__ 就是 Object.prototype       
//          所以就是 obj.__proto__.__proto__就是顶层对象的原型
//              ===>    Object.prototype.__proto__  顶层对象的原型是null
console.log(obj.__proto__.__proto__ === Object.prototype.__proto__);
console.log(Object.prototype);      // Object也是个方法 所以有prototype