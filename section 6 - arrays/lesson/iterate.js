const numbers = [1, 2, 3];

//for-of, for-in works too (esp if idx needed)
for (let number of numbers)
    console.log(number);

//forEach -  iterate over elems of arr, applies a specified func (callback) to each elem (changes org array)
//arr.forEach(callback)
numbers.forEach(function(number) {
    console.log(number);
});

//arrow func
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(index, number));

//yt
numbers.forEach(double);

function double(elem, idx, arr) {
    arr[idx] = elem * 2;
}