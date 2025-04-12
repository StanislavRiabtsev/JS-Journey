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