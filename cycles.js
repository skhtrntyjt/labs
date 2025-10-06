function sum (...args) {

    var x = 0;
    for (let i = 0; i < args.length; i++)
        x += args[i];
    return x;

  
};
console.log(sum(1, 2, 3,));
function sumof (...args) {
    var x = 0;
    for (const i of args)
        x += i;
    return x;
}
console.log(sumof(-1, -2, -3));

function sumwhile (...args) {
    var x = 0;
    var i = 0;
    while (i < args.length) {
    x += args[i];
        i++;
    }
    return x;
} 
console.log(sumwhile(-1, -1, -1));
function sumdo (...args) {
    var x = 0;
    var i = 0;
    do { 
        x += args[i];
        i++;
    }
    while (i < args.length);
    return x;
}
console.log(sumdo(1, 1, 1));

// Метод Array.prototype.reduce()
function sumreduce (...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumreduce(10, 20, 30));

// Найдите максимальный элемент в двумерном массиве
// const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// console.log(m); // 9
function max(arr) {
    let maxvalue = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
    }
}