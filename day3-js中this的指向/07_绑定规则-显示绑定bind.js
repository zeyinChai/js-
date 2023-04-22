function foo() {
    console.log(this);
}

var newFoo = foo.bind('aaa')    // 显示绑定

// 默认绑定和显示绑定冲突   优先级(显示绑定)
newFoo()