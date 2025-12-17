// parent/child relation
const parent = document.querySelector('#items');
const children = parent.children; // returns collection of children

const child = document.querySelector('.item'); // returns one item

const par = child.parentElement; // returns parent
const grandparent =  child.closest('.class-name'); // returns closest parent/ancestor

const childTwo = child.nextElementSibling; // next sibling
const childOne = childTwo.previousElementSibling; //prev sibling

/* can use dot notation to chain them
.childNodes
.hasChildNodes()
.lastChild
.lastElementChild
.firstChild
.firstElementChild
.nextElementSibling
.previousElementSibling
*/