"use strict";

const str = "test";
const arr = [1, 2, 4];
console.log(str.toLocaleUpperCase());
console.log(str[0].toLocaleUpperCase());
console.log(arr.length);

////////////////////////////////////////

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit'));

////////////////////////////////////////

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

////////////////////////////////////////

const num = 12.3;
console.log(Math.round(num));

const numString = "12.3px";
console.log(parseInt(numString));
console.log(parseFloat(numString));

/////////////////////////////////////////////////
// Coding Exercise 7: (*) Advanced Function Tasks
/////////////////////////////////////////////////

// #1
function calculateVolumeAndArea(num) {
    if (num < 0 || num === String || !Number.isInteger(num)) {
        console.log("An error occurred while calculating");
    } else {
        numVolume = num * num * num;
        numArea = 6 * (num * num);
        console.log(`Cube volume: ${numVolume}, total surface area: ${numArea}`);
    }
}
calculateVolumeAndArea(12);

// #2
function getCoupeNumber(place) {
    if (place < 0 || place === String || !Number.isInteger(place)) {
        console.log("Error. Please check if the seat number you entered is correct.");
    } else if (place === 0 || place > 36) {
        console.log("There are no such seats in the carriage.");
    } else {
        console.log(Math.ceil(place / 4));
    }
}
getCoupeNumber(1);

/////////////////////////////////////////////////
// Coding Exercise 8: (*) Advanced Function Tasks
/////////////////////////////////////////////////

// #1
function getTimeFromMinutes(time) {
    if (time < 0 || time === String || !Number.isInteger(time)) {
        console.log("Error, check the data");
    } else {
        timeHour = time / 60;
        timeMinute = time % 60;
        if (timeHour === 1) {
            console.log(`It's ${parseInt(timeHour)} hour and ${timeMinute} minutes.`);
        } else {
            console.log(`It's ${parseInt(timeHour)} hours and ${timeMinute} minutes.`);
        }
    }
}
getTimeFromMinutes(60);

// #2
function findMaxNumber(num1, num2, num3, num4) {
    if (arguments.length < 4 || [...arguments].some(arg => typeof arg !== 'number')) {
        console.log(0);
    } else {
        console.log(Math.max(num1, num2, num3, num4));
    }
}
findMaxNumber(1, 2, 6, 22);

/////////////////////////////////////////////////
// Coding Exercise 9: (**) Fibonacci Numbers Interview Problem
/////////////////////////////////////////////////

function fib(numFib) {
    let a = 0;
    let b = 1;
    for (i = 0; i < numFib; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
fib(7);