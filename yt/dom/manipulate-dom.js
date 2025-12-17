// create element

const divElem =  document.createElement('div') //span, p, etc

divElem.className = 'class-name';

divElem.setAttribute('id', 'red');
divElem.setAttribute('title', 'Red Div');

const conatiner = document.querySelector('.container-class');
const h2Elem = conatiner.querySelector('h2');
conatiner.insertBefore(divElem, h2Elem);

conatiner.appendChild(divElem); // can append one last child at a time, takes in html elem/node (not text), returns html elem/node
conatiner.append('hello'); // can append multiple things (at the end) at once,including text as well, returns undefined

//.remove()
