//  document obj models the wbepage - dom - combines js and html, gives js control of webpage
//  html element is converted to js obj
//  proprties, ex - .body, .title
//  methods 

/* console.log(document.querySelector('button'));
document.querySelector('button')
    .innerHTML = 'Changed';

console.log(document.querySelector('.js-button')); */

// document.body.innerHTML = '<button>changed</button>'; // replaces entire html 


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