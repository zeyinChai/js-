var obj = {
    name:'why',
    age:18
}

var info = Object.create(obj,{
    address:{
        value:'北京市',
        enumerable:true
    }
})
console.log(info);

// hasOwnProperty方法判断
console.log(info.hasOwnProperty('address'));    // 判断自己身上有没有某个属性

// in 操作符    只要自己身上或者__proto__里面有 就为true
console.log('address' in info);
console.log('name' in info);

// instanceof
// 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上


