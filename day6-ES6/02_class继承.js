class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    running() {                                //   定义在 Person.prototype
        console.log(this.name + '在跑步');
    }
}

class Student extends Person {
    constructor(name,age,sno) {
        super(name,age)
        this.sno = sno
    }
    studing() {                                //   定义在 Student.prototype
        console.log(this.name + '在学习');
    }
    // 静态方法                                     静态方法定义在本身  而不是Student.prototype
    static  createPerson() {
        console.log('创建Person');
    }
}
var stu = new Student('zs',18,11111)
console.log(stu);
stu.studing()
stu.running()

