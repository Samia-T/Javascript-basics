const first = [{id: 1}];
const second = [4, 5, 6, 7];
const third = [1, 2, 3];

//for prim -> copied by val
//for obj -> copied by ref
const combined = first.concat(second);
first[0].id = 10;

//slice - start idx, end idx/start idx 
const slice = combined.slice(2, 4);

//copy of original
const slice1 = combined.slice();

//spread
const combined1 =[...third, 'a', ...second, 'b'];
//new copy of combined1
const copy = [...combined1];

console.log(combined);
console.log(slice);
console.log(copy);