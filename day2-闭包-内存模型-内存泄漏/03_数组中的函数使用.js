var nums = [10,5,11,100,55]

// 数组方法

// 1.filter 过滤
// var newNums = nums.filter((item) => {
//     return item % 2 === 0
// })
// console.log(newNums);

// 2.map 映射
// var newNums2 = nums.map((item)=>{
//     return item * 10
// })
// console.log(newNums2);

// 3.forEach  迭代    
// nums.forEach((item)=>{
//     console.log(item); 
// })

// 4.find/findIndex     查找
// var item = nums.find((item) => {
//     return item === 11
// })
// console.log(item);

// var friend = [
//     {name:'why',age:18},
//     {name:'a',age:40},
//     {name:'b',age:35},
//     {name:'c',age:30}
// ]
// const findFriend = friend.find((item)=>{
//     return item.name === 'c'
// })
// console.log(findFriend);
// var friendIndex = friend.findIndex((item)=>{
//     return item.name === 'c'
// })
// console.log(friendIndex);

// 5.reduce   累加
// preValue 上一次的值

// preValue: 0 , item:10
// preValue: 10, item:5
// ...
nums.reduce((preValue,item)=>{
    return preValue + item
},0)