"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const tom = Object.create(soldier);

const john = {
    health: 100,
};

Object.setPrototypeOf(john, soldier);

// john.__proto__ = soldier; //Do not to use
john.sayHello();