function unique(array) {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

const result = unique([1, 2, 2, 3, 4, 4, 5]);
console.log(result); 
