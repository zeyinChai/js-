const obj = {
    name:'why',
    age:18,
    friends:{
        name:'kobe'
    },
    hobbies:['篮球','足球']
}

// 将obj转成JSON格式的字符串
const objString = JSON.stringify(obj)

// 将对象数据存储localStorage
localStorage.setItem('obj',objString)    // 存储要一个字符串 但是放的是对象就会把对象变成字符串类型[object Object]

const jsonString = localStorage.getItem('obj')

// 将JSON格式的字符串转化为对象
const info = JSON.parse(jsonString)
console.log(info);



