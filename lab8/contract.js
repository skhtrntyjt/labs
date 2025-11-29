function contract(fn, ...types) {
  return function(...args) {
    if (args.length !== types.length - 1) {
      throw new TypeError('Incorrect number of arguments');
    }
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== types[i].name.toLowerCase()) {
        throw new TypeError(`Argument ${i + 1} is not of type ${types[i].name}`);
      }
    }
    const result = fn(...args);
    const returnType = types[types.length - 1];
    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError(`Return value is not of type ${returnType.name}`);
    }
    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);