// 封装响应式函数
let array = []
function watchFn(fn) {
    array.push(fn)
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
array.forEach((fn)=>{
    fn()
})









