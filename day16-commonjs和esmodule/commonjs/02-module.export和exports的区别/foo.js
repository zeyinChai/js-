const name = 'foo'
const age = 18
function sayHello(){
    console.log('sayHello');
}

// Node导出的本质是在导出module.exports对象
module.exports = {
    name,
    age,
    sayHello
}
// 无效了 因为导出module.exports指向的是新对象{name,age,sayHello} 而修改exports这个对象 没有意义
exports.name = '哈哈哈'

// 这样写会生效 因为修改了module.exports对象里的name属性
// module.exports.name = '你好'