import rooms from '../rooms/rooms.js';
import { findById } from '../utils.js';


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
    p.textContent = room.description;
    section.append(div);

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

const button = document.createElement('button');

button.textContent = 'Confirm';

form.appendChild(button);
