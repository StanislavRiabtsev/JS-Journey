'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// const interface = 'Auido';


function logger() {
    console.log('My name is Stanislav');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juisce with ${apples} apples and ${oranges} oranges`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrnageJuice = fruitProcessor(2, 4);
console.log(appleOrnageJuice);