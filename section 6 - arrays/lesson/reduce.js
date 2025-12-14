const numbers = [1, -1, 2, 3];

//can use for-of loop to sum elems in array

//callback fn with two params
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
//initialization(, 0) not required 

//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5

//sem, shorter
const sum1= numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);