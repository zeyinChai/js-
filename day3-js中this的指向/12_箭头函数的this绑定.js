// 1.测试箭头函数中的this
// var name = 'why'

// var foo = () => {
//     console.log(this);
// }
// foo()
// var obj = {foo:foo}
// obj.foo()

// 2.应用场景
var obj = {
    data:[],
    getData:function () {
        // 发送网络请求,将结果放到上面的data属性中

        // 1.没有箭头函数的情况
        // var _this = this
        // setTimeout(function() {
        //     var result = ['abc','cba','nba']
        //     // this.data = result   这样写是错误的 因为定时器的this指向的是window
        //     _this.data = result
        // },2000)

        // 2.有箭头函数的情况
        setTimeout(()=>{
            var result = ['abc','cba','nba']
            this.data = result      // 箭头函数没有this 所以去父级作用域找this 所以就是getData的this为obj
        },2000)
        
    }
}
obj.getData()