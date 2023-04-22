var foo  = () => {
    console.log(arguments);
}

function bar() {
    console.log(arguments);
}

foo()

// 浏览器全局是没有arguments的
// node环境中有