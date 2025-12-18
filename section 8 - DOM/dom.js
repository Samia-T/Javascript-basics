//  document obj models the wbepage - dom - combines js and html, gives js control of webpage
//  html element is converted to js obj
//  proprties, ex - .body, .title
//  methods 
//  (poem) - ptoperties, objects, events, methods

/* console.log(document.querySelector('button'));
document.querySelector('button')
    .innerHTML = 'Changed';

console.log(document.querySelector('.js-button')); */

// document.body.innerHTML = '<button>changed</button>'; // replaces entire html 

// querySelector - use css selectors

document.querySelector('#id')
document.querySelector('.class-name')
document.querySelectorAll('.class-name') // - returns Nodelist (collection of document nodes) - very much like HTML Collection (collection of HTML elements) !! see below

//NodeList items can only be accessed by their index number

function subscribe() {
    const buttonElem = document.querySelector('.js-subscribe-button');
    if (buttonElem.innerText === 'Subscribe') { 
        buttonElem.innerHTML = 'Subscribed';
    } else {
        buttonElem.innerHTML = 'Subscribe';
    }
}

function calculate() {
    let  cost = Number(document.querySelector('.js-cost-input').value);
    (cost < 40) ? cost += 10 : cost;

    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`
}

function handleKeydown(evnt) {
    if (evnt.key === 'Enter') {
        calculate();
    }
}

// get elems - returns HTML Collection (array-like, can loop through, refer to elems with a num, but cannot use array methods)

//items can be accessed by name, id, idx, unlike NodeList items

document.getElementById('id')
document.getElementsByTagName('p') //div, body, etc
document.getElementsByClassName('class-name')
document.forms['id'] // anchors, .body, .embeds, .images, .head, .links, .scripts, .title, .documentElement