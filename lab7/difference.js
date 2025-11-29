function difference(array1, array2) {
   const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
}

const array1 = [3, 6, 8, -2, 5];
const array2 = [4, 7, 6, 9, 8];
const result = difference(array1, array2);
console.log(result); 
