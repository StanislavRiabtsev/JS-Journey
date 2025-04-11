"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};

// console.log(options.name);
// delete options.name;
// console.log(options);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has meaning: ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has meaning: ${options[key]}`);
    }

}