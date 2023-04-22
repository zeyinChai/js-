// 我们一般将作用域分成：

// 全局作用域

// 函数作用域

// 块级作用域

const btns = document.getElementsByTagName('button')

// for(var i = 0;i < btns.length; i++) {
//     btns[i].onclick = function() {
//         console.log('第' + i + '个按钮被点击');   // 这个函数没有i 去上一层作用域找 就是去全局找 这时候i = 4
//     }
// }

// 解决方法一      创建出一个函数作用域 传入i就行
// for(var i = 0; i < btns.length;i++) {
//     (function(n) {
//             btns[i].onclick = function() {
//                 console.log('第' + n + '个按钮被点击'); // 这个函数没有i 去上一层作用域找 就是去上个函数找 这时候有i
//             }
//         })(i)   // 传入i
// }

// 解决方法二   let存在块级作用域
for(let i = 0;i < btns.length; i++) {
    btns[i].onclick = function() {
        console.log('第' + i + '个按钮被点击');   // 这个函数没有i 去上一层作用域找 因为let有块级作用域 所以找到i
    }
}


