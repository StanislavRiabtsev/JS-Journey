"use strict";

function createCount() {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter
    }

    return myFunction;
};

const increment = createCount();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
