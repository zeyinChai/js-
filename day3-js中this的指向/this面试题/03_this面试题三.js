var name = 'window'
function Person(name) {
    this.name = name
    this.foo1 = function() {
        console.log(this.name);
    },
    this.foo2 = () => console.log(this.name),
    this.foo3 = function() {
        return function() {
            console.log(this.name);
        }
    },
    this.foo4 = function() {
        return  () => {
            console.log(this.name);
        }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

// person1.foo1()  // person1
// person1.foo1.call(person2)   //person2

// person1.foo2()  // person1  注意：这时候不找全局 因为父级作用域是Person()构造出来的person1
// person1.foo2.call(person2)  // person1 箭头函数不受影响

// person1.foo3()()    // window 先取出函数 然后相当于独立函数调用
// person1.foo3.call(person2)()    // window
// person1.foo3().call(person2)    // person2

person1.foo4()()    // person1
person1.foo4.call(person2)()    // person2
person1.foo4().call(person2)    // person1

