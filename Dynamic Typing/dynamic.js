"use strict";

//To string

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2) Concatenation
console.log(typeof (6 + ""));

const num = 5;
console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + "px";
console.log(fontSize);

// To number

// 1)
console.log(typeof (Number("4")));

// 2)
console.log(typeof (+"5"));

// 3)
console.log(typeof (parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To Boolean
// 0, "", null, undefined, NaN; - always false

// 1)
let switcher = null;
if (switcher) {
    console.log("working");
}

switcher = 1;
if (switcher) {
    console.log("working...");
}

// 2)
console.log(typeof (Boolean("4")));

// 3)
console.log(typeof (!!"Bad"));