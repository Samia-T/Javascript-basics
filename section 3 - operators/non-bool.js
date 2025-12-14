//falsy (false)
//undefined
// null
// 0
// false
// ''
// NaN

//truthy - anything not falsy

//short circuiting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);