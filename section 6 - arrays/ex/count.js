const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//     let count = 0
//     for (let i of array)
//         if (i === searchElement)
//             count += 1;
//     return count;
// }

// function countOccurrences(array, searchElement) {
//     return array.reduce((count, currentValue) => {
//         if (currentValue === searchElement)
//             count += 1;
//         return count;
//     }, 0);
// }

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}