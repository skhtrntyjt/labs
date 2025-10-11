// реализуйте интроспекцию объекта:
// Проитерируйте все ключи объекта iface
// Возьмите ключи функционального типа
// Для каждой функции возьмите количество аргументов
// Сохраните результаты в двумерный массив
// Например, из:

// {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// }
// нужно получить:

// [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
var result = [];

 for (const key in iface) {
    console.log(key, typeof(iface[key]))
    if (typeof(iface[key]) === 'function') {
        result.push([key, iface[key].length])
    }
 }
    console.log(result);
 
 