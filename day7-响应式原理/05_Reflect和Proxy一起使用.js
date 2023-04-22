const obj = {
    name:'why',
    age:18
}

// Reflect 是对象的方法
const objProxy = new Proxy(obj,{
    get(target,key,receiver){
        console.log('get------------------');
        return Reflect.get(target,key)      // 用Reflect来映射到之前的对象而不是直接操作之前的对象
    },
    set(target,key,newValue,receiver) {
        console.log('set-------------------');
        Reflect.set(target,key,newValue)
    }
})

objProxy.name = 'kobe'
console.log(objProxy.name);




