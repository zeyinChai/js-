class Depend {
    constructor(){
        this.reativeFns = new Set()    // 使用set来保存而不是数组 避免同一个函数里用到属性被重复添加 
    }
    addDepend(reativeFns) {
        this.reativeFns.add(reativeFns)
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
    // activeReactiveFn = null
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

// watch
watchFn(()=>{
    console.log(objProxy.name,'--------------');
    console.log(objProxy.name,'++++++++++++++');
})

objProxy.name = 'kobe'


