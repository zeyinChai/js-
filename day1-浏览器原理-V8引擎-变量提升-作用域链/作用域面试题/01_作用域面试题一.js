var n = 100

function foo() {
    n = 200 // 先在foo中寻找 n 发现未定义 则去父级作用域找到 n 然后重新赋值为200
}

foo()

console.log(n);