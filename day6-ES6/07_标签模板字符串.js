// 第一个参数依然是模板字符串中整个字符串,只是被切成多块,放到了一个数组
// 第二个参数是模板字符串,第一个${}
function foo(m,n) {
    console.log(m,n,'----------------------');
}
// foo('hello','world')

// 另外调用函数的方式   标签模板字符串
const name = 'why'
const age = 18
// ['Hello','wo','rld']
foo`Hello${name}Wo${age}rld`










