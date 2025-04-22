"use strict";
// //1)
// let r = 5; alert(r++);
// //2)
// console.log([] + false - null + true);
// //3)
// let y = 1;
// let x = y = 2;
// alert(x);
// //4)
// console.log([] + 1 + 2);
// //5)
// alert("1"[0]);
// //6)
// console.log(2 && 1 && null && 0 && undefined);  // && in false but || in true
// //7)
// console.log(!!(a && b) === (a && b)); // Its false
// //8)
// alert(null || 2 && 3 || 4); // Its 3
// //9)
// console.log((a = [1, 2, 3]) === (b = [1, 2, 3]));
// //10)
// alert(+"Infinity");
// //11)
// const a = "Hedgehog";
// const b = "apple";
// console.log(a < b);
// //12)
// console.log(0 || "" || 2 || undefined || null || false);

/////////////////////////////////////////////////
// Coding Exercise 15: Code Error Finding Tasks
/////////////////////////////////////////////////

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '4$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Open' : answer = 'Close';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Price is below average';
    } else {
        return 'The price is above average';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{ name: 'Mike', age: 32 }];
    return copy;
}

console.log(transferWaitors(restorantData));