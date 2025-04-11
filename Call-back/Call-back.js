"use strict"

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);

}

function second() {
    console.log(2);
}

first();
second();

/////////////////////////////

function learJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log("I learned this lesson");
}

learJS("Java Script", function () {

});