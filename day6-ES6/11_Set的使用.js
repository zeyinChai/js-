// 1.创建set结构
const set = new Set()
set.add(10)
set.add(20)
set.add(40)
set.add(3333)

set.add(10)         // set里面是不能存放重复的数

set.add({})
set.add({})         // 两个对象不同 内存地址不同    所有不影响

console.log(set);


// Set方法
// set.add()
// set.delete(10)
// console.log(set.has(20));
// set.clear()
