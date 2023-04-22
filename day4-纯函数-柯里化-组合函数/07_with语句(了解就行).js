var message = 'Hello World'
// console.log(message);

// with语句有自己的作用域       了解就行    开发中不要使用with
obj = {name:'why',age:18,message:'obj message'}
function foo() {
   function bar() {
        with(obj){
            console.log(message);
        }
   }
   bar()
}
foo()


