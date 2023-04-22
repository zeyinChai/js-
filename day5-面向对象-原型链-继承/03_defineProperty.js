var obj = {
    name:'why',
    age:14
}

// 属性描述符是一个对象
// 数据属性描述符
Object.defineProperty(obj,'height',{
    // 很多配置
    value:1.88,
    // 该属性不可配置   =>  不可删除不可修改
    configurable:false,
    // 不可枚举
    enumerable:false,
    // 不可赋值(修改属性)
    writable:false
})
// 测试configurable
delete obj.height
// console.log(obj.height);    // 删除后还可以拿到
// obj.height = 10
// console.log(obj.height);    // 修改后无效

// 测试enumerable
for(var key in obj) {
    console.log(key);       // 不可枚举 拿不到
}

// 测试writable
// obj.height = 99999
// console.log(obj.height);    // 不可用修改






