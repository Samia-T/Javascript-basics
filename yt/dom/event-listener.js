// rewatch lesson - 6, 7, visit w3schools, dave gray

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

h2.addEventListener('click', funct, false);
h2.removeEventListener('click', funct, false);