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

watchFn(function foo() {
    const newName = obj.name
    console.log('你好啊');
    console.log('helloworld');
    console.log(obj.name);
})

function bar() {
    console.log('不需要响应式的函数');
}

obj.name = 'kobe'
depend.notify()








