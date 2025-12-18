// visit w3schools - events

const headerElem = document.querySelector('#header');

headerElem.addEventListener('click', (event) => {
    console.log(event);
});

// dbclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove

const inputElem =  document.querySelector('input[type="text"]')

inputElem.addEventListener('keydown', (evnt) => {
    console.log(evnt);
})
// keyup, keypress, focus, blur, cut, paste, input, submit

//multiple eventListeners can be added to the same element

// (event, func, useCapture (false by default -> bubbling true))
h2.addEventListener('click', funct, false);
h2.removeEventListener('click', funct, false); // -> must be same as addEventListener

// Event Bubbling (in-out) vs Event Capture (out-in) - set useCapture to true for Event Capture