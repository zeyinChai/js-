var name = 'window'
var person1 = {
    name:'person1',
    foo1:function() {
        console.log(this.name);
    },
    foo2:() => console.log(this.name),
    foo3:function() {
        return function() {
            console.log(this.name);
        }
    },
    foo4:function () {
        return () => {
            console.log(this.name);
        }
    }
}

var person2 = {name:'person2'}

// person1.foo1()  // person1 隐式绑定
// person1.foo1.call(person2)  // person2 显示绑定 > 隐式绑定

// person1.foo2()  // window 箭头函数没有this 所以去父级作用域找 就是window 注意：对象{}不产生作用域
// person1.foo2.call(person2)  // window 箭头函数没用this 所以改变this指向也没用 还是window

// person1.foo3()()    // window person1.foo3()拿到return过来的函数 然后才() 相当于独立函数调用 
// person1.foo3.call(person2)()   // window 跟上面一个意思 
// person1.foo3().call(person2)   // person2   先调用函数拿到return过来的函数 然后改变this指向到person2

person1.foo4()()    // person1 去父级作用域查找 是person1
person1.foo4.call(person2)()    // person2  先改变了this指向为person2 然后箭头函数的父级的this就是person2
person1.foo4().call(person2)    // person1  