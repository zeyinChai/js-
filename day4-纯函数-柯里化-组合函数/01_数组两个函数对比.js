var names = ['abc','cba','nba','dna']

// slice只要给它传入一个start和end 那么对于同一个数组来说 它会给我们返回一个确定值
// slice函数本身它是不会修改原来的数组
// slice函数本身就是一个纯函数
// var newNames = names.slice(0,3)
// console.log(newNames);
// console.log(names);



// splice在执行时有修改数组本身  修改的这种操作就是产生的副作用
// splice就是非纯函数
var newNames2 = names.splice(2)
console.log(newNames2);
console.log(names);


