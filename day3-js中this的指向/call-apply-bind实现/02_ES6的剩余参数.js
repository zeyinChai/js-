// rest parameters
function sum(...args) {
    console.log(args);
}

sum(1)
sum(1,2)
sum(1,2,3,4,5)

// 展开运算符
var names = ['abc','cba','nba']

// var newNames = [...names]
function foo(n1,n2,n3) {

}
foo(...names)



