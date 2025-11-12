
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item);
});

[7, 10, 1].forEach((x) => {
  console.log(x);
});

[7, 10, 1].forEach((x) => console.log(x));

const log = (x) => console.log(x);

[7, 10, 1].forEach(log);
