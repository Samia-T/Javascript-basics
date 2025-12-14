const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1,2]);

console.log(output);

function except(array, excluded) {
    const newArr = [];
    for (let i of array)
        if (!excluded.includes(i))
                newArr.push(i);
    return newArr;         
}