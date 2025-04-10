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
        if (place === 1 || place === 2 || place === 3 || place === 4) {
            console.log(1);
        } else if (place === 4 || place === 5 || place === 6 || place === 7) {
            console.log(2);
        }
        else if (place === 8 || place === 9 || place === 10 || place === 11) {
            console.log(3);
        }
        else if (place === 12 || place === 13 || place === 14 || place === 15) {
            console.log(4);
        }
        else if (place === 16 || place === 17 || place === 19 || place === 20) {
            console.log(5);
        }
        else if (place === 21 || place === 22 || place === 23 || place === 24) {
            console.log(6);
        }
        else if (place === 25 || place === 26 || place === 27 || place === 28) {
            console.log(7);
        }
        else if (place === 29 || place === 30 || place === 31 || place === 32) {
            console.log(8);
        } else {
            console.log(9);
        }
    }
}
getCoupeNumber(23);