const obj = {
    name:'why',
    age:18
}

// Proxy是个类class 
const objProxy = new Proxy(obj,{
    // 获取值时的捕获器     target就是要被代理的对象obj key就是具体被设置的obj里的key
    get(target,key) {
        console.log(`监听到${target}属性${key}被访问了`,target);
        return target[key]
    },
    // 设置值时的捕获器
    set(target,key,newValue){
        console.log(`监听到${target}属性${key}被设置了`,target);
        target[key] = newValue
    }
})

// 设置之后 具体操作就不是操作obj了 而是操作代理对象objProxy 最后会将操作后的行为同步到obj身上
// objProxy.name = 'kobe'
// objProxy.age = 20

// console.log(objProxy.name);
// console.log(objProxy.age);

// console.log(obj.name);
// console.log(obj.age);

objProxy.height = 1.9
console.log(objProxy.height);
