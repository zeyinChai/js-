// 1.   利用Math.max
var a = [1,2,3,4,5,6]
console.log(Math.max(...a));

// 2.   sort ==> b - a 降序     a - b 升序
var b = a.sort((a,b) => {
    return b - a
})
console.log(b[0]);


