function foo(num1,num2) {
    // 1.自己遍历
    // var newArr = []
    // for(var i = 0; i< arguments.length;i++) {
    //     newArr.push(arguments[i] * 10)
    // }
    // console.log(newArr);

    // 2.
    // var newArr2 = Array.prototype.slice.call(arguments)
    // console.log(newArr2);

    // var newArr3 = [].slice.call(arguments)
    // console.log(newArr3);

    // 3. es6
    // var newArr4 = Array.from(arguments)
    // console.log(newArr4);

    // 4.展开运算符
    var newArr5 = [...arguments]
    console.log(newArr5);
}
foo(10,20,30,40,50)



