// 1.
function sum(m,n) {
    return m + n
}
console.log(sum(5,10));
console.log(sum(5,11));
console.log(sum(5,12));
console.log(sum(5,13));


// ============>    柯里化后
function makeAdder(count) {
    return function(num) {
        return count + num
    }
}
// var result = makeAdder(5)(10)
// console.log(result);
var adder5 = makeAdder(5)
adder5(10)
adder5(11)
adder5(12)

// 2.
// function log(data,type,message) {
//     console.log(`[${data.getHours()}:${data.getMinutes()}][${type}]:[${message}]`);
// }
// log(new Date(),'DEBUG','查询轮播图的bug')
// log(new Date(),'DEBUG','查询菜单的bug')
// log(new Date(),'DEBUG','查询数据的bug')

var log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}
// 如果我现在打印的都是当前时间
var nowLog = log(new Date())
nowLog('DEBUG')('查找轮播图BUG')
nowLog('DEBUG')('查询数据的bug')


