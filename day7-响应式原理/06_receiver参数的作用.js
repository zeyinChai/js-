const obj = {
    _name:'why',
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }
}

const objProxy = new Proxy(obj,{
    get(target,key,receiver){
        // receiver是创建出来的代理对象
        // console.log(receiver);
        return Reflect.get(target,key,receiver) // 传入receiver 改变this为objProxy
    },
    set(target,key,newValue,receiver){
        Reflect.set(target,key,newValue,receiver)
    }
})


objProxy.name = 'kobe'
console.log(objProxy.name);

