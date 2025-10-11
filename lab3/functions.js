/*Реализуйте функцию random(min, max), возвращающую псевдо-случайное значение от min до max. Используйте Math.random() и Math.floor(). При вызове random(max) нужно считать, что min = 0.
Реализуйте функцию generateKey(length, characters), возвращающую строку случайных символов из набора characters длиной length. Например: */
// function random(min, max) {
//     return
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generateKey(length, characters) {
    var result = "";
    for (let i = 0; i < length; i++) {
        let index = random(0, characters.length - 1);
        result += characters [index];
    }
    return result;
}
console.log(generateKey(10, 'abcde')); // например, 'badcbeabec'
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(20, characters));
 
const ipToNumber = (ip = '127.0.0.1') => 
  ip
    .split('.')                       
    .map(x => parseInt(x))             
    .reduce((acc, byte, i) => acc + (byte << (8 * (3 - i))), 0);
console.log(ipToNumber("10.1.1.0"))
