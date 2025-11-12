function seq(fn) {
  const funcs = [fn]; 
  function chain(arg) {
    if (typeof arg === 'function') {
      funcs.push(arg);       
      return chain;          
    } else if (typeof arg === 'number') {
      
      return funcs.reduceRight((acc, f) => f(acc), arg);
    }
  }

  return chain;
}

// console.log(seq(x => x + 7))
// console.log(seq(x => x * 2)(x => x + 7)(5))