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

////////////////////////////////////////
// EXERCISE
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