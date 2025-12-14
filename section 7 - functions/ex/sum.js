//sum(1,2,3,4) => 10
//sum([1,2,3,4]) => 10
// Array.isArray() -> true/false

function sum(...numbers) {
    // item1 = numbers[0];
    // if (typeof item1 === 'number')
    //     return numbers.reduce((a, b) => a + b);
    // return item1.reduce((a,b) => a + b);

    if (numbers.length === 1 && Array.isArray(numbers[0]))
        numbers = [...numbers[0]];
    return numbers.reduce((a, b) => a + b);
}

s = sum(1,2,3,4);
a =sum([1,2,3,4, 5]);
console.log(s);
console.log(a);

//obj-array of numbers [1,2,3,4]
//obj-array of array of numbers [[1,2,3,4]]