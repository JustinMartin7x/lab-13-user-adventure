import rooms from '../rooms/rooms.js';
import { getChar } from '../utils.js';




const character = getChar();
if (character.hp <= 0 || character.completed.room5 === true){
    window.location.href = '../results/results.html';
}




const ul = document.querySelector('ul');

rooms.forEach(room => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    li.append(link);
    li.style.position = 'absolute'; 
    li.style.left = room.map.left;
    li.style.top = room.map.top;
    link.textContent = room.title;
    link.href = `../room/?id=${room.id}`;
    ul.append(li);

});
