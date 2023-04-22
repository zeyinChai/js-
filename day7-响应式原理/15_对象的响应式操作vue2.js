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

function Observe(obj){
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj,key,{
            get(){
                const depend = getDepend(obj,key)
                depend.addDepend(activeReactiveFn)
                return value
            },
            set(newValue){
                value = newValue
                const depend = getDepend(obj,key)
                depend.notify()
            }
        })
    })
    return obj
}

const obj = {
    name: 'why',
    age: 18
}
const objProxy = Observe(obj)

const info = {
    address:'广州市',
    height:1.88
}
const infoProxy  = Observe(info)

watchFn(()=>{
    console.log(infoProxy.address);
    console.log(infoProxy.height);
})
infoProxy.height = 2.88


























