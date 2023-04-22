// 我们通过一个new关键字调用一个函数 这个时候this是在调用这个构造器创建出来的
function Person(name,age) {
    this.name = name
    this.age = age
}

var p = new Person('why',18)
console.log(p.name,p.age);

