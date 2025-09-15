/* Вложенные вызовы функций в цикле
Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.
Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
Вызовите функции square и cube в цикле от 0 до 9, вычисляя, соответственно квадрат и куб от переменной цикла. Передайте квадрат и куб на каждой итерации в функцию average. Результаты сложите в массив и возвратите из функции calculate. */
function average (a, b) {
    return (a + b) / 2;
}
function square (x) {
    return x **2;
}
function cube (x) {
    return x **3;
}
function calculate () {
    let array = [];
     for (let i = 0; i <= 9; i++) {
    array.push(average( square(i), cube(i)));
     }
    return array;
}  
console.log(calculate());