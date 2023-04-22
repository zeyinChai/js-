const obj = {
    name:'why',
    age:18
}

const objProxy = new Proxy(obj,{
    // 访问值时的捕获器
    get(target,key) {
        console.log(`监听到${target}属性${key}被访问了`,target);
        return target[key]
    },
    // 设置值时的捕获器
    set(target,key,newValue){
        console.log(`监听到${target}属性${key}被设置了`,target);
        target[key] = newValue
    },
    // 监听in的捕获器
    has(target,key) {
        console.log(`监听到${key}属性in操作`,target);
        return key in target
    },
    // 监听delete捕获器
    deleteProperty(target,key){
        console.log(`监听到${key}属性delete操作`,target);
        delete target[key]
    }
})

// in 操作符
// console.log('name' in objProxy);

// delete操作符
delete objProxy.name

