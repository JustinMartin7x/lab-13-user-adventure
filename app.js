// import functions and grab DOM elements

import { saveChar } from './utils.js';


const form = document.querySelector('form');
 

// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const info = new FormData(form);
    console.log(info.get(name));
    saveChar({
        name: info.get('name'),
        class: info.get('class'),
        gold: 0,
        hp: 50,
        completed: {},
        items: {}
    });
    window.location.href = './map/index.html';
});