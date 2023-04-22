// 类的声明
class Person {
    // 一个类只能有一个构造函数
    constructor(name,age,address){
        this.name = name
        this.age = age
        this._address = address
    }
    eating() {
        console.log(this.name + '在吃东西');
    }
    get address() {
        console.log('拦截访问操作');
        return this._address
    }
    set address(newAddress) {
        console.log('拦截设置操作');
        this._address = newAddress
    }
    // 静态方法                 静态方法定义在本身
    static  createPerson() {
        console.log('创建Person');
    }
}

console.log(Person.prototype);

var p  = new Person('zs',18,'北京市')
// console.log(p.__proto__ === Person.prototype);
console.log(p);
p.eating()
// console.log(p.address);
// p.address = '北京市'
// console.log(p.address);









