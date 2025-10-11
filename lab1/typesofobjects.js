let array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined];
const obj = {number: 0, string: 0, boolean: 0}
console.log(obj['number'])
console.log(obj['number'])
for (const element of array) {
    console.log(typeof element);
    obj[typeof element] += 1
    console.log(obj[typeof element]) 
} 
console.dir(obj)