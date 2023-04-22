// function hySetTimeout(fn,duration) {
//     fn() 独立函数调用
// }

// hySetTimeout(function(){
//     console.log(this); // window
// },3000)

// 1.setTimeout
// setTimeout(function() {
//     console.log(this); // window    内部相当于独立函数调用
// },2000)

// 2.监听点击
// const boxDiv = document.querySelector('.box')
// boxDiv.onclick = function() {
//     console.log(this);  // boxDiv这个属性
// }
// 相当于 boxDiv.onclick()  所以打印的是boxDiv

// 3.数组.forEach/map/filter/find
var names = ['abc','cba','nba']
// 默认打印this是window 但是可以传入第二个参数当做this的指向
names.forEach(function(item){
    console.log(item,this);
},'abc')
names.map(function(item){
    console.log(item,this);
},'cba')

