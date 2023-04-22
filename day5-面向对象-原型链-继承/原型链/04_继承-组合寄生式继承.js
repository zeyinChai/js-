function Person(name,age) {
    this.name = name
    this.age = age
    this.friends = []
}
Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}
Person.prototype.running = function() {
    console.log(this.name + '在跑步');
}


function Student(name,age,sno) {
    Person.call(this,name,age)                   
    this.sno = sno
}    

Student.prototype = Object.create(Person.prototype)     //  创建一个对象 ==> Student.prototype的__proto__指向Person.prototype
Student.prototype.construct = Student
console.log(Student.prototype.__proto__);

Student.prototype.studying = function() {
    console.log(this.name + '在学习');
}
var stu = new Student('why',18,1111)
// console.log(stu);
// stu.eating()
// stu.running()






