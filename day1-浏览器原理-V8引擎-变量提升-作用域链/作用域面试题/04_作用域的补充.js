function foo() {
    m = 100         // 错误语法 未定义就赋值
                    // 但是 JS引擎 当成了全局 m 赋值为 100
}

foo()

console.log(m);