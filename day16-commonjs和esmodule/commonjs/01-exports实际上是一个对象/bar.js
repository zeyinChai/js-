const name = '张三'

exports.name = name



setTimeout(()=>{
    // 修改exports这个对象里的name为李四
    exports.name = '李四'
},2000)