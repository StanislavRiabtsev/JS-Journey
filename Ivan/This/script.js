"use strict";

// 1)
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

// 2)
const obj = {
    a: 20,
    b: 20,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
}
obj.sum();

// 3)
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

let stas = new User('Stas', 19);

// 4)
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(10));


// 1) The usual function this is windwo, but if you ‘use strict’ it is undefined.
// 2) The context of the object's methods is the object itself.
// 3) ‘This’ in constructors and classes is a new instance of the object.
// 4) Manual binding This: call, apply, bind


const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     e.target.style.backgroundColor = 'red';
// });

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});

const objs = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        }
        say();
    }
}

obj.sayNumber();

const dobleLong = (a) => {
    return a * 2;
} // Long

const doubleShort = a => a * 2; // Short
