// create element

const divElem =  document.createElement('div') //span, p, etc

divElem.className = 'class-name';

divElem.setAttribute('id', 'red');
divElem.setAttribute('title', 'Red Div');

const conatiner = document.querySelector('.container-class');
const h2Elem = conatiner.querySelector('h2');
conatiner.insertBefore(divElem, h2Elem);

conatiner.appendChild(divElem); // can append one child at a time (at the end), takes in html elem/node (not text), returns html elem/node
conatiner.append('hello'); // can append multiple things (at the end) at once, including text as well, returns undefined

//.remove() and parent.removeChild(child), parent.replaceChild(para, child) !!see parent-child

// container.classList.add('class-name), .remove(), .toggle(), .contains -> adds(/removes/toggles) classes

/*
function openMilestone(elem) {
    const currentPanel =  elem.parentNode.nextElementSibling;
    const shownPanel = document.querySelector('.show');

    // first hide prev panel if open (except for clicked panel)
    if (!currentPanel.classList.contains('show') && shownPanel)
        shownPanel.classList.remove('show'); // -> hides shown stuff other than currentPanel

    currentPanel.classList.toggle('show');
}
    */