const numbers = [1, 2, 3, 4];
let another = numbers;

//to empty an array
//sol 1, if no other ref
//numbers = [];

//sol 2
numbers.length = 0;

//sol 3
//numbers.splice(0. numbers.length);

//sol 4
// while (numbers.length > 0)
//     numbers.pop();