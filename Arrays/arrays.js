"use strict";

const arr = [11, 2, 14, 6, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach (function (item, i, arr){
//     console.log(`${i} ${item} inside the array ${arr}`);
// });

// arr.pop(); //del last element
// arr.push(10); //add in last element
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log("\n");

// for (let value of arr){
//     console.log(value);
// }

const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product);