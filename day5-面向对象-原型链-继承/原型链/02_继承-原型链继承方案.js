// JS中 比如 学生类 和 老师类 有大量重复的代码 比如 name age .....
// 每次都要写大量重复的代码 效率非常差

// 父类：公共属性和方法
function Person() {
    this.name = 'why'
    this.age = 18
    this.friends = []
}
Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}

// 子类：特有的属性和方法
function Student(name,age) {
    this.sno = 111
}
Student.prototype = new Person()        //  1. new创建了一个person对象{} 赋值给student.prototype   
                                        //  2. 这个对象里能访问到 Person()里的属性 name 
                                        //          并且这个对象的__proto__能访问到Person.prototype

Student.prototype.studying = function() {
    console.log(this.name + '在学习');
}

// var stu = new Student()
// console.log(stu.name);
// stu.eating()

// 弊端：   1.修改父类属性会被相互影响
var stu1 = new Student()
var stu2 = new Student()

// 修改引用的值
stu1.friends.push('zs') 

console.log(stu1.friends);
console.log(stu2.friends);

        // 2.无法添加属性 比如new的时候添加名字之类的


