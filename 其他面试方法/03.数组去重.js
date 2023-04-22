// 1.方法一
let arr = [1,2,1,4,6,2,5,4,1,2,3,4,3,4]

function a(array) {
    let newArr = []

    for(let item of array) {
        if(newArr.indexOf(item) === -1) {
            newArr.push(item)
        }
    }


    return newArr
}
console.log(a(arr));


// 2.方法二
let arr2 = new Set(arr)
console.log(arr2);
console.log(Array.from(arr2));










