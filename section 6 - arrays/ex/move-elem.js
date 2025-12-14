const numbers = [1, 2, 3, 4];

const output = move(numbers, 2, 1);

console.log(output);

function move(array, index, offset) {
    const pos = index + offset;
    const output = [...array];

    if (pos >= array.length || pos< 0){
        console.error('Invalid offset');
        return;
    }

    //let temp = output[index];
    //output.splice(index, 1);

    //instead, store the deleted elem (.splice() returns an array of deleted elems)
    const element = output.splice(index, 1) [0];

    output.splice(pos, 0, element);
    return output;
}

//middle - (idx, no. elem del, elems...) - [2, 3, 'a', 'b', 4, 5]
numbers.splice(2, 0, 'a', 'b');