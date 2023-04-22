let str = 'asfasfsaffasasxvgj'

function STR(str){
    let obj = {}

    for(let i = 0;i < str.length; i++) {
        let key = str[i]
        if(obj[key]){
            obj[key]++
        } else {
            obj[key] = 1
        }
    }

    return obj
}
let newStr = STR(str)
console.log(newStr);

let arr = Object.keys(newStr)
console.log(arr);
for(let n = 0;n<arr.length;n++) {
    console.log(arr[n]+'出现的次数为：'+newStr[arr[n]]);
}



