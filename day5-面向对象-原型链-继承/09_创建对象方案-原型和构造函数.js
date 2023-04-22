function Person(name,age,height,address){
    this.name  = name
    this.age   = age
    this.height  = height
    this.address = address
}
Person.prototype.eating = function() {
    console.log(this.name + '吃东西');
}

var p1 = new Person('why',18,1.88,'北京市')
var p2 = new Person('kobe',20,1.88,'洛杉矶市')

console.log(p1);
p1.eating()
console.log(p2);
p2.eating()






