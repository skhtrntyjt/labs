// 'use strict';

// const hash = {
//   first: 7,
//   second: 10,
//   third: 1,
//   fourth: 5,
// };

// hash.fifth = 2;

// Object.defineProperty(hash, 'newField', {
//   enumerable: false,
//   value: 'valueOfNewField',
// });

// Object.prototype.inheritedProperty = 'inherited';

// for (const key in hash) {
//   const value = hash[key];
//   console.log(
//     key, '\t', typeof key, '\t',
//     value, '\t', typeof value
//   );
// }
// 'use strict';

// const numbers = [7, 10, 1, 5, 2];
// numbers.field2 = 'Value2';
// numbers[-10] = 'Value3';

// numbers.field1 = 'Value1';
// numbers[5] = 20;
// numbers[10] = 30;
// Object.defineProperty(numbers, 'newField', {
//   enumerable: false,
//   value: 'valueOfNewField',
// });

// Object.prototype.inheritedProperty = 'inherited';

// for (const i in numbers) {
//   const value = numbers[i];
//   console.log(i, typeof i, value);
// }
// console.log(numbers.length, numbers, numbers.at(-1), numbers[-1], numbers.at(-2));
'use strict';

// const numbers = [7, 10, 1, 5, 2];
// numbers.field2 = 'Value2';
// numbers[-10] = 'Value3';
// numbers.field1 = 'Value1';
// numbers[5] = 20;

// for (const value of numbers) {
//   console.log(value, typeof value);
// }
 const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr[Symbol.iterator] = function() {
//   let index = 1;
//   const step = 3;
//   return {
//     next: () => {
//       const result = {
//         value: this[index],
//         done: false
//       };
//       if (index >= this.length) {
//         result.done = true;
//         return result;
//       }
//       index += step;
//       return result;
//     }
//   };
// };

// for (const value of arr) {
//   console.log(value);
// // }
// for (let i = 0; i < arr.length; i++) {
//     if (i > 4) break;
//     console.log(arr[i]);
// }
// var arr2 = [0, 1, 2, -3, -4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0) continue;
//     console.log(arr2[i]);
// }
'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item);
});

[7, 10, 1].forEach((x) => {
  console.log(x);
});

[7, 10, 1].forEach((x) => console.log(x));

const log = (x) => console.log(x);

[7, 10, 1].forEach(log);
