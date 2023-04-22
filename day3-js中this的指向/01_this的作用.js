// var obj = {
//     name:'why',
//     eating:function(){
//         console.log(obj.name + '在吃东西');
//     },
//     running:function(){
//         console.log(obj.name + '在跑步');
//     },
//     studying:function(){
//         console.log(obj.name + '在学习');
//     }
// }

// obj.eating()
// obj.running()
// obj.studying()

// 没有this 会让我们开发中变得非常不方便
var obj = {
    name:'why',
    eating:function(){
        console.log(this.name + '在吃东西');
    },
    running:function(){
        console.log(this.name + '在跑步');
    },
    studying:function(){
        console.log(this.name + '在学习');
    }
}

obj.eating()
obj.running()
obj.studying()