// Функция unique(array) должна возвращать новый массив, не содержащий дубликатов. Примеры вызова:
// const result = unique([2, 1, 1, 3, 2]);
// console.log(result);
// // Результат: [2, 1, 3]
// const result = unique(['top', 'bottom', 'top', 'left']);
// console.log(result);
// // Результат: ['top', 'bottom', 'left']
function unique(array) {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

const result = unique([1, 2, 2, 3, 4, 4, 5]);
console.log(result); 
