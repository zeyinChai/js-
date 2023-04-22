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
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}

const obj = {
    name: 'why',
    age: 18
}

// 监听对象的变化
const objProxy = new Proxy(obj,{
    get(target,key,receiver) {
        return Reflect.get(target,key,receiver)
    },
    set(target,key,newValue,receiver){
        Reflect.set(target,key,newValue,receiver)
        depend.notify()
    }
})


watchFn(function foo() {
    const newName = obj.name
    console.log('你好啊');
    console.log('helloworld');
    console.log(obj.name);
})

function bar() {
    console.log('不需要响应式的函数');
}

objProxy.name = 'kobe'
objProxy.name = 'james'









