const numbers = [1, -1, 2, 3];

//every()
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive);

//some()
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive);

//filter
const filtered = numbers.filter(function(value) {
    return value >= 0;
});
console.log(filtered);

//arrow func
const filterArr = numbers.filter(n => n >= 0);
console.log(filterArr);