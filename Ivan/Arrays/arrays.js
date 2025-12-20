"use strict";

const arr = [11, 2, 14, 6, 111];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

////////////////////////////////////////////

const arr1 = [11, 2, 14, 6, 111];
arr[99] = 0;
console.log(arr1.length);
console.log(arr1);

/////////////////////////////////////////////

const arr2 = [11, 2, 14, 6, 111];
arr2.forEach(function (item, i, arr) {
    console.log(`${i} ${item} inside the array ${arr2}`);
});

/////////////////////////////////////////////

const arr3 = [11, 2, 14, 6, 111];
arr3.pop(); //del last element
arr3.push(10); //add in last element
console.log(arr3);

/////////////////////////////////////////////

const arr4 = [11, 2, 14, 6, 111];
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
console.log("\n");

for (let value of arr4) {
    console.log(value);
}

/////////////////////////////////////////////

const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product);

/////////////////////////////////////////////////
// Coding Exercise 11: Array Problems
/////////////////////////////////////////////////

// #1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr6) {
    if (arr6.length === 0) {
        return "The family is empty";
    } else {
        return `The family consists of: ${arr6.join(' ')}`;
    }
}
console.log(showFamily(family));

// #2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr7) {
    for (let value of arr7) {
        console.log(value.toLowerCase());
    }
}
standardizeStrings(favoriteCities);

/////////////////////////////////////////////////
// Coding Exercise 12: Array Problems Part 2
/////////////////////////////////////////////////

// #3
const someString = 'This is some strange string';
function reverse(str) {
    if (typeof str !== 'string') {
        console.log("Error!");
    } else
        console.log(str.split('').reverse().join(''));
}
reverse(someString);

// #4
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'GPB', 'CNY'];

function availableCurr(arr7, missingCurr) {
    let str = '';
    arr7.length === 0 ? str = 'No currencies available' : str = 'Available currencies:\n';

    arr7.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));