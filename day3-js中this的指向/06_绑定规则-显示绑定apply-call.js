// function foo() {
//     console.log('函数被调用了',this);
// }

// foo()直接调用与call和apply调用的不同在于this绑定的不同
// foo直接调用指向的是全局对象(window)
// foo()

// var obj = {
//     name:'obj'
// }

// 1. call/apply是可以绑定this的绑定对象
// foo.call(obj)
// foo.apply(obj)


// 2. call/apply有什么区别?
function sum(num1,num2){
    console.log(num1 + num2,this);
}

sum.call('call',20,30)
sum.apply('apply',[20,30])
// call是依次传入参数   apply是以数组传入参数

// 3.call和apply在执行函数时,是可以明确的绑定this,这个绑定规则称之为显示绑定

