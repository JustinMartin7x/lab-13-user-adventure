import rooms from '../rooms/rooms.js';
import { findById, getChar, saveChar } from '../utils.js';
const CHARACTER = 'CHARACTER';

const section = document.querySelector('section');
const searchP = new URLSearchParams(window.location.search);
const id = searchP.get('id');
const room = findById(rooms, id);




const image = document.createElement('img');
image.src = room.image;
section.append(image);
const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);
div.classList.add('description');
p.textContent = room.description;
section.append(div);
const choicesDiv = document.createElement('div');
section.append(choicesDiv);
const form = document.createElement('form');

section.append(form);
room.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');  
    span.textContent = choice.description;
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);
    form.appendChild(label);
});
choicesDiv.append(form);

const button = document.createElement('button');
button.type = 'submit';
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const checked = document.querySelector(':checked');
    const event = findById(room.choices, checked.value);
    console.log(event);
    alert(`${event.result}`);

    const character = getChar();

    character.hp += event.hp;
    character.gold += event.gold;
    character.completed[id] = true;
    saveChar(character);
    window.location.href = '../map/index.html';


});

button.textContent = 'Confirm';

form.appendChild(button);
