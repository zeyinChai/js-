var obj = {
    name:'why',
    age:18,
    height:1.88
}

// 对象解构
// var {name,age,height} = obj
// console.log(name,age,height);

// var {age,height,name} = obj
// console.log(age,height,name);

var { name:newName } = obj
console.log(newName);





