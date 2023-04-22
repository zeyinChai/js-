// 对数组解构[]
var names = ['abc','bac','acb']
const [name1,name2,name3] = names
console.log(name1,name2,name3);

// 解构后面的元素
var [,itema,itemb] = names
console.log(itema,itemb);

// 解构出一个元素,后面的元素放到一个新数组中
var [itema,...newNames] = names
console.log(newNames);







