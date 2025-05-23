'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
});

const div = document.createElement('div');
// const text = document.createTextNode('Its here');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); //Old
// wrapper.prepend(div);
// wrapper.insertBefore(div, hearts[0]);  //Old

// hearts[1].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);  //Old

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0] , hearts[0]);  //Old

div.innerHTML = "<h1> Hello world </h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>')