"use strict";
// Touch start
// Touch move
// Touch end
// Touch enter
// Touch leave
// Touch cancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('end');
    // });
});


// Touches
// targetTouches
// changedTouches