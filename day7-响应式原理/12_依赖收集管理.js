class Depend {
    constructor(){
        this.reativeFns = []
    }
    addDepend(reativeFns) {
        this.reativeFns.push(reativeFns)
    }
    notify(){
        this.reativeFns.forEach((fn)=>{
            fn()
        })
    }
}

// 封装响应式函数
let activeReactiveFn = null
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}
// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend(target,key){
    let map = targetMap.get(target)     // 从weakmap结构里找存储的map值
    if(!map) {
        map = new Map()
        targetMap.set(target,map)
    }

    let depend = map.get(key)           // 从map对象中找存储的key的值
    if(!depend){
        depend = new Depend()
        map.set(key,depend)
    }
    return depend
}

const obj = {
    name: 'why',
    age: 18
}
const info = {
    address:'北京市'
}

// 监听对象的变化
const objProxy = new Proxy(obj,{
    get(target,key,receiver) {
        // 根据target和key获取对应的depend
        const depend = getDepend(target,key)
        // 给depend对象中添加响应函数
        depend.addDepend(activeReactiveFn)
        return Reflect.get(target,key,receiver)
    },
    set(target,key,newValue,receiver){
        Reflect.set(target,key,newValue,receiver)
        const depend = getDepend(target,key)
        depend.notify()     // 相当于通知更新视图
    }
})


watchFn(function foo() {
    console.log('你好啊');
    console.log('helloworld');
    console.log(objProxy.name);
})
watchFn(function(){
    console.log(objProxy.age,'监听age变化============');
})
watchFn(function(){
    console.log(objProxy.address,'监听info的address变化=========');
})

function bar() {
    console.log('不需要响应式的函数');
}

// objProxy.name = 'kobe'
// objProxy.name = 'james'
// objProxy.age = 20

// obj对象
// name:depend
// age:depend
// const objMap = new Map()
// objMap.set('name','nameDepend')
// objMap.set('age','ageDepend')

// // info对象
// // address:depend
// const infoMap = new Map()
// infoMap.set('address','addressDepend')

// const targetMap = new WeakMap()
// targetMap.set(obj,objMap)
// targetMap.set(info,infoMap)



