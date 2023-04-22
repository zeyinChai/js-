// Symbol生成一个唯一的值
// 即使多次创建也是一个独一无二的值
const s1 = Symbol()
const s2 = Symbol()

console.log(s1,s2);
console.log(s1 === s2);


const s3 = Symbol('aaaaa')
console.log(s3);


// Symbol作为对象key
const obj = {
    [s1]:'abc',
    [s2]:'bca'
}
// 当Symbol作为属性名很多时候是取不到的
console.log(Object.keys(obj));




