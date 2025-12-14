const numbers = [1, 2, 3, 4, 1];

try {
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch(e){
    // alert(e);
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error ('not an array')
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}