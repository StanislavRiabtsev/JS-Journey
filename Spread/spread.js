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

///////////////////////////////////////////

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


///////////////////////////////////////////

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[2] = "sdfsdf"
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "viedo"],
    blog = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blog, "facebook"];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 99];

log(...num);

const array = ["24234", "rtbtb"];
const newARray = [...array];
console.log(newARray);