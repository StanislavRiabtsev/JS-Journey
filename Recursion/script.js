"use strict";

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));

let students = {
    js: [{
        name: "John",
        progres: 100
    }, {
        name: "Stanislav",
        progres: 60
    }],

    html: {
        basic: [{
            name: "Peter",
            progres: 20
        }, {
            name: "Ann",
            progres: 18
        }],

        pro: [{
            name: "Sam",
            progres: 10
        }],

        semi: {
            students: [{
                name: "Test",
                progres: 20
            }]
        }
    }
}

function getTotalProgresByIteration(data) {
    let total = 0;
    let students = 0;

    for (let cours of Object.values(data)) {
        if (Array.isArray(cours)) {
            students += cours.length;

            for (let i = 0; i < cours.length; i++) {
                total += cours[i].progres;
            }
        } else {
            for (let subCours of Object.values(cours)) {
                students += subCours.length;

                for (let i = 0; i < subCours.length; i++) {
                    total += subCours[i].progres;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgresByIteration(students));

function getTotalProgresByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progres;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgresByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgresByRecursion(students);
console.log(result[0] / result[1]);

/////////////////////////////////////////////////
// Coding Exercise 16: (*) Recursion Problem
/////////////////////////////////////////////////

function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));