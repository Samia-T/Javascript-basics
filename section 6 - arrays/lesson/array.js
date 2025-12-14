const numbers = [3, 4];

//end - [3, 4, 5, 6]
numbers.push(5, 6);
//remove - [3, 4, 5]
numbers.pop()

//beginning - [1, 2, 3, 4, 5]
numbers.unshift(1, 2);
//remove - [2, 3, 4, 5]
numbers.shift()

//middle - (idx, no. elem del, elems...) - [2, 3, 'a', 'b', 4, 5]
numbers.splice(2, 0, 'a', 'b');
//remove - 1 element at idx 2 - [2, 3, 'b', 4, 5]
numbers.splice(2, 1)

console.log(numbers);