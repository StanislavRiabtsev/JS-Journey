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


// //  ==== Function declaration ====
// function caclAge1(birthYear) {
//     return 2027 - birthYear;
// }

// const age1 = caclAge1(1991);
// console.log(age1);


// //  ==== Function expressions ====
// const caclAge2 = function (birthYear) {
//     return 2027 - birthYear;
// }

// const age2 = caclAge2(2000);
// console.log(age2);



// const caclAge2 = function (birthYear) {
//     return 2027 - birthYear;
// }

// // ==== Arrow function ====
// const caclAge3 = birthYear => 2027 - birthYear;
// const age3 = caclAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2027 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2000, 'Stanislav'));
// console.log(yearsUntilRetirement(1990, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juisce with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
//     return juice
// }

// console.log(fruitProcessor(2, 3));


const caclAge = function (birthYear) {
    return 2027 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = caclAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return 
}

console.log(yearsUntilRetirement(1991, 'Stanislav'));
console.log(yearsUntilRetirement(1930, 'Stanislav'));


const calcAverange = (a, b, c) => (a + b + c) / 3;
console.log(calcAverange(3, 4, 5));
const scoreDolphins = calcAverange(44, 23, 71);
const scoreKoalas = calcAverange(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas)