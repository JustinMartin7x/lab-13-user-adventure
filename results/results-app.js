import { getChar } from '../utils.js';



const results = document.querySelector('h1');

const character = getChar();

if (character.hp <= 0) {
    results.textContent = 'YOU DIED!!';
} if (character.hp > 0 && character.completed.room5 === true) {
    results.textContent = `YOU LIVED CONGRATS you survived with ${character.gold} gold`;
}


