// 每个对象都拥有一个__proto__属性 这个称之为对象的原型    隐式原型
var obj = {
    name:'why'
}
console.log(obj.__proto__);
// console.log(Object.getPrototypeOf(obj));

// 当我们从某个对象获取属性时   它会触发[[get]]操作
// 1.在当前对象中查找这个属性   如果找到就直接使用
// 2.如果没有就会沿着它的原型链查找 prototype
console.log(obj.age);







