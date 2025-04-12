"use strict";

let a = 5;
b = a;

b = b + 5;
console.log(a);
console.log(b);

////////////////////////////////////////////

const obj = {
    a: 5,
    b: 2
};

const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);

///////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
};

const numbers = {
    a: 3,
    b: 4,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers)
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);