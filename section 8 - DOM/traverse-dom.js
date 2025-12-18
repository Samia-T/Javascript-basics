// Get element by ID

let headerElem = document.getElementById('header');
/*
headerElem.textContent; -> reads from html
headerElem.innerText; -> reads final output (after styling, as displayed in browser)
headerElem.innerHTML; -> gives HTML (as text)
*/

// css - js
// .font-size, .border-bottom, etc -> .fontSize, .borderBottom, etc.
// .style -> .color, .fontSize, .borderBottom, etc.

// Get element by class
let itemUl = document.getElementById('items'); // parent
let items = itemUl.getElementsByClassName('item'); //children

// Get element by tagname
let itemsTag =  document.getElementsByTagName('li')

// Query selector
let header = document.querySelector('.header'); // by class - returns the first instance of the class
let lastItem = document.querySelector('.item:last-child'); // last item in (first) item class (nth-child(idx))/(nth-of-type(idx))
let lastItems =  document.querySelectorAll('.item:last-child'); // last items of all item classes, can use for-of loop 
// lastItem.style.color = 'red';
// .display, .flexDirection, .flexWrap, .margin, etc
// document.write() - will overwrite the enitre doc if used after doc is loaded
let newTask =  document.querySelector('#new-task'); // by ID