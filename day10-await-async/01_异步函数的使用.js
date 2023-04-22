async function foo1() {
  console.log("foo function start~");

  console.log("执行");
  console.log("执行");
  console.log("执行");

  console.log("foo function end~");
}
console.log("script start");
foo1(); // 加async 但是里面没有特殊东西 则跟普通函数一样 执行顺序
console.log("script end");
