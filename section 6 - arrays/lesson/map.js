const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

//callback func - val, idx, arr
// const items = filtered.map(n => '<li>' + n + '</li>');
//const html = '<ul>' + items.join('') + '</ul>';

// const items = filtered.map(n => {
//     return obj = {value: n};
// });

//sem as above, one line of code, need first bracket (else, thinks code block)
const items = filtered.map(n => ({value: n}));

//filters, then maps, then filters again, finally maps
const items1 = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items1);