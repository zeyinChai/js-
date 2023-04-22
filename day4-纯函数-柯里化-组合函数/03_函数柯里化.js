// 只传递给函数一部分参数来调用它,让他返回一个函数去处理剩余的参数
//          这个过程就称为柯里化
function add(x,y,z) {
    return x + y + z
}
var result = add(1,2,3)
console.log(result);

// 柯里化后
function sum(x){
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}
var result1 = sum(1)(2)(3)
console.log(result1);

// 简化柯里化代码
var sum2 = x => y => z => {
    return x + y + z
}
var result2 = sum(1)(2)(3)
console.log(result2);









