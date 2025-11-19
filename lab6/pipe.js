function pipe(...fns) {
        if (!fns.every(fn => typeof fn === 'function')) {
            throw new TypeError('All arguments must be functions');
        }

    return function(x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    };
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(9); 
console.log(x); 

