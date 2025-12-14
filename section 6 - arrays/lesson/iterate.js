const numbers = [1, 2, 3];

//for-of, for-in works too (esp if idx needed)
for (let number of numbers)
    console.log(number);

//forEach
numbers.forEach(function(number) {
    console.log(number);
});

//arrow func
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(index, number));
