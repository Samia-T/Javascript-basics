// Nodes
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
.nextElementSibling vs nextSibling?
.previousElementSibling
*/

const para =  document.createElement('p'); 
const node = document.createTextNode('hello world');

para.appendChild(node); // -> creates <p>Hello world</p>

const elem = document.getElementById('div1')
elem.appendChild(para); // -> puts <p>Hello world</p> inside existing div (id = "div1") [at the end]
const p1 = document.getElementById('p1');
elem.insertBefore(para, p1) // -> puts para before p1

p1.remove(); // no on older borwsers, use parent.removeChild(child), eg. elem.removeChild(p1)

// parent.replaceChild(para, child);
elem.replaceChild(para, p1);
