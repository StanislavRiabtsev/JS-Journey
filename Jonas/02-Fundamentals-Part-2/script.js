'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// const interface = 'Auido';


// function logger() {
//     console.log('My name is Stanislav');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juisce with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrnageJuice = fruitProcessor(2, 4);
// console.log(appleOrnageJuice);


//  ==== Function declaration ====
function caclAge1(birthYear) {
    return 2027 - birthYear;
}

const age1 = caclAge1(1991);
console.log(age1);


//  ==== Function expressions ====
const caclAge2 = function (birthYear) {
    return 2027 - birthYear;
}

const age2 = caclAge2(2000);
console.log(age2);