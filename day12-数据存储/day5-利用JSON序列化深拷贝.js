const obj = {
    name:'why',
    age:18,
    friends:{
        name:'kobe'
    },
    hobbies:['篮球','足球'],
    foo() {

    }
}

// 将obj对象内容放到info
// 1.引用赋值
const info = obj

// 2.浅拷贝
const info2 = {...obj}

// 3.深拷贝 利用JSON
const info3 = JSON.parse(JSON.stringify(obj))
info3.friends.name = 'james'
console.log(info3,'-------------',obj);
console.log(obj.foo,'----------',info3.foo);        // JSON是不会对函数进行转化的


