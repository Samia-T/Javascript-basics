const numbers = [1, 2, 5, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    // maxVal = array[0];
    // for (let elem of array) [or-> for (let i = 1; i < array.length; i++)]
    //     if (elem > maxVal)
    //         maxVal = elem;
    // return maxVal;

    return array.reduce((accumulator,current) => {
        // if (current > maxVal)
        //     maxVal = current;
        //     return maxVal;

        //reduced if-> is c > a? yes c, no a
        return (current > accumulator) ? current : accumulator;
    })
}

//soln
function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}