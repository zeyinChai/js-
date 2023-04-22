// 组合式继承： new父类函数 + call 改变this指向
//              能解决上一个问题

// 父类：公共属性和方法
function Person(name,age) {
    this.name = name
    this.age = age
    this.friends = []
}
Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}

// 子类：特有的属性和方法
function Student(name,age) {
    Person.call(this,name,age)                   //  new之后 this变成stu 
                                                //  实际上  就是获得父类的全部属性
                                                 //  执行一次
    this.sno = 111
}
Student.prototype = new Person()                 //  执行二次Person

Student.prototype.studying = function() {
    console.log(this.name + '在学习');
}

var stu = new Student('ls',18)
console.log(stu.name,stu.age);
stu.eating()

// 弊端：   Person 至少执行了两次 浪费性能  
//          父亲的多余属性会给孩子
var stu1 = new Student('zs',20)
var stu2 = new Student('ww',30)

// 修改引用的值
stu1.friends.push('zs') 

console.log(stu1.friends);
console.log(stu2.friends);


