// 基本数据类型是   在栈中申请内存空间 存放数据
// 引用数据类型是   在栈中申请内存空间 存放在堆中申请的内存地址 然后在堆中存放数据


// 垃圾回收机制

// 1.引用计数         
var obj = {name:'why'}
var info = {name:'Kobe',friend:obj}
var p = {name:'james',friend:obj}
// 当一个对象有一个引用执行它时,那么这个对象的引用就 +1
// {name:'why'} 当前计数为 +3

info.friend = null
p.friend = null
obj = null
// 当引用计数变成0 就是没有人指向它 对象{name:'why'}则会被垃圾回收

var obj1 = {friend:obj2}
var obj2 = {friend:obj1}
// 引用计数存在一个很大的问题：循环引用 造成内存泄漏


// 2.标记清除
    // 这个算法是设置一个根对象,垃圾回收器会定期从这个根开始,找所有从根开始有引用的对象,
    //     对于哪些没有引用到的对象,就认为是不可用的对象

// JS引擎比较广泛采用就是标记清除法