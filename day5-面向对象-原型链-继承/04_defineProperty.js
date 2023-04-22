var obj = {
    name:'why',
    age:18,
    _address:'北京市'
}

// 存取属性描述符
// 1.隐藏某个私有属性 不希望被外界使用和赋值
// 2.如果希望截获某个属性的访问和设置值的过程时,也会使用存储属性描述符
// vue2响应式原理
Object.defineProperty(obj,'address',{
    enumerable:true,
    configurable:true,
    get:function() {
        foo()
        return this._address
    },
    set:function(value){
        this._address = value
    }
})
console.log(obj.address);
obj.address = '上海市'
console.log(obj.address);

function foo() {
    console.log('截获了一次');
}
