// 创建一个对象 对某一个人进行抽象
// 1.创建方式一 new
var obj = new Object()
obj.name = 'why'
obj.age  = 18
obj.running = function() {
    console.log('在跑步');
}
// 2.创建方式二 字面量
var obj2 = {
    name:'why2',
    age:18,
    running2:function() {
        console.log('在跑步');
    }
}


