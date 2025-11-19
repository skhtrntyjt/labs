const compose = (...fns) => {
 const subscribers = [];
 const composed = x => {
     try {
        return fns.reduceRight((v, f) => f(v), x);
        } 
        catch (err) {
    subscribers.forEach(fn => fn(err));
    return undefined;
        }
    };
 composed.on = fn => {
    subscribers.push(fn);
    };
    return composed;
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const fail = x => { throw new Error('Oops!'); };
const j = compose(inc, fail, twice)
j.on(err =>
    console.log('Произошла ошибка:', err.message));
console.log(j(2));
