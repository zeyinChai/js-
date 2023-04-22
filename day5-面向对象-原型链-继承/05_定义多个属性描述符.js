var  obj = {
    _age:18
}


Object.defineProperties(obj,{
    name:{
        configurable:true,
        enumerable:true,
        writable:true,
        value:'why'
    },
    age:{
        configurable:false,
        enumerable:false,
        get() {
            return this._age
        },
        set(value) {
            this._age = value
        }
    }
})
console.log(obj);
console.log(obj.age);
obj.age = 100
console.log(obj.age);



