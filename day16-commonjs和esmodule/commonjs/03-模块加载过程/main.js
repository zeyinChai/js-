const  foo = require('./foo')

console.log('-----------');
console.log('+++++++++++');

const foo2 = require('./foo')




// 结论一：模块在被第一次引入时，模块中的js代码会被运行一次
// 结论二：模块被多次引入时，最终只加载一次
// 结论三；如果有循环引用，深度优先执行