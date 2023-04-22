const obj = {
    name:'why',
    age:18
}

// 把obj里每一项放到defineProperty里面
Object.keys(obj).forEach((key)=>{
    let value = obj[key]
    Object.defineProperty(obj,key,{
        get(){
            console.log(`监听到对象属性${key}被访问了`);
            return value
        },
        set(newValue){
            console.log(`监听到对象属性${key}被设置了`)
            value = newValue
        }
    })
})

// 缺点：   删除和新增监听不到
// obj.height = 1.88
// delete obj.name

obj.name = 'kobe'
obj.age = 20
console.log(obj.name);
console.log(obj.age);






