"use strict"
let num = 20;
function showFirstMassage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMassage("Helloe world");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(10, 23));


function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
    console.log("Hello");
};

logger();


const add = (num1, num2) => { return num1 + num2 };
console.log(add(2, 1000));


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(10, eurCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log("done");
}
test();

function doNothing() { };
console.log(doNothing() === undefined);

// #1
function sayHello(name) {
    return `Hello ${name}`;
}
sayHello("Stanislav");
// #2
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);
// #3
function getMathResult(number1, number2) {

    if (typeof (number2) == String || number2 <= 0) {
        return number1;
    }
    let result = "";
    for (let i = 1; i <= number2; i++) {
        result += number1 * i;
        if (i < number2) {
            result += "---";
        }
    }
    return result;
}
getMathResult(5, 3);