// Найдите максимальный элемент в двумерном массиве
// const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// console.log(m); // 9
function max(arr) {
    let maxvalue = arr[0][0];
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = 0; j < arr[i].length; j++) {
            var tmp = arr[i][j];
            console.log(tmp);
            if (tmp > maxvalue)
                maxvalue = tmp;

             
        }
        
    }
    return maxvalue
}
const m = max([[1, 2, 3], [4, 5, 60], [7, 8, 9], [10, 11 ,12]]);
console.log(m); // 9
function f() {
    console.log("hello")
    return 1;
}
