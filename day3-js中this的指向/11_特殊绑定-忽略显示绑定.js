function foo() {
    console.log(this);
}

foo.apply('abc')
foo.apply({})

foo.apply(null)
foo.apply(undefined)
// 如果显示绑定 传入的是null或者undefined则执行的是window  