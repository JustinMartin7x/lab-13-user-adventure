import rooms from '../rooms/rooms.js';



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