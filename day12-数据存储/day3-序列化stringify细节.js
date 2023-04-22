const obj = {
    name:'why',
    age:18,
    friends:{
        name:'kobe'
    },
    hobbies:['篮球','足球'],
    // toJSON:function(){
    //     return "123"
    // }
}


// 将上面直接转化为JSON字符串
// 1.直接转化
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1);

// 2.stringify第二个参数replace      可以进行筛选需要转化的数据
const jsonString2 = JSON.stringify(obj,['name','friends'])
console.log(jsonString2);

// 2.2传入回调函数
const jsonString3 = JSON.stringify(obj,(key,value)=>{
    if(key === 'age') {
        return value + 1
    }
    return value
})
console.log(jsonString3);

// 3.stringify第三个参数space
const jsonString4 = JSON.stringify(obj,null,4)
console.log(jsonString4);

// 4.如果obj中有toJSON方法则直接放回里面的参数




