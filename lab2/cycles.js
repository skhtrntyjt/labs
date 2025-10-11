function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i); 
    }
    return array; 
}
console.log(range(15, 30));

function rangeodd(start, end) {
     let array = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
        array.push(i); }
    }
    return array; } 
console.log(rangeodd(15, 30));