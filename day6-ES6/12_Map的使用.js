const obj1 = {name:'why'}
const obj2 = {name:'kobe'}

// const info = {
//     [obj1]:'aaa',       // 当把对象转为字符串当做key 就是 [object Object]
//     [obj2]:'bbb'        //      所以后面的key把前面的覆盖了 所以只有一个
// }
// console.log(info);


// map是允许我们对对象类型作为key的
const map = new Map()
map.set(obj1,'aaa')
map.set(obj2,'bbb')
console.log(map);


// map方法创建
const map2 = new Map([[obj1,'aaa'],[obj2,'bbb'],[2,'ddd']])

// 常见方法
map2.set('why','eee')
console.log(map2);
console.log(map2.get('why'));


