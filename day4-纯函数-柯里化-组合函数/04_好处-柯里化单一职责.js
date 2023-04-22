function add(x,y,z){
    x = x + 2
    y = y * 2
    z = z * z
    return x + y +z
}
console.log(add(1,2,3));



// =============>   柯里化后
// 
function sum(x,y,z){
    x = x + 2
    return function(y) {
        y = y * 2
        return function(z){
            z = z * z
            return x + y + z
        }
    }
}
console.log(sum(1)(2)(3));

