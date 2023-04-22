var bar = () => {
    console.log(this,arguments);
}
console.log(bar.prototype);
// console.log(bar.__proto__);
// 箭头函数没有this 没有原型prototype 没有arguments












