'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// const interface = 'Auido';


// function logger() {
//     console.log('My name is Stanislav');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juisce with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrnageJuice = fruitProcessor(2, 4);
// console.log(appleOrnageJuice);


// //  ==== Function declaration ====
// function caclAge1(birthYear) {
//     return 2027 - birthYear;
// }

// const age1 = caclAge1(1991);
// console.log(age1);


// //  ==== Function expressions ====
// const caclAge2 = function (birthYear) {
//     return 2027 - birthYear;
// }

// const age2 = caclAge2(2000);
// console.log(age2);



// const caclAge2 = function (birthYear) {
//     return 2027 - birthYear;
// }

// // ==== Arrow function ====
// const caclAge3 = birthYear => 2027 - birthYear;
// const age3 = caclAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2027 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2000, 'Stanislav'));
// console.log(yearsUntilRetirement(1990, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juisce with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
//     return juice
// }

// console.log(fruitProcessor(2, 3));


// const caclAge = function (birthYear) {
//     return 2027 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = caclAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

//     // return 
// }

// console.log(yearsUntilRetirement(1991, 'Stanislav'));
// console.log(yearsUntilRetirement(1930, 'Stanislav'));


// const calcAverange = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverange(3, 4, 5));
// const scoreDolphins = calcAverange(44, 23, 71);
// const scoreKoalas = calcAverange(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(years);


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // First
// console.log(friends);

// // Remove elements
// friends.pop(); //Last 
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift('John'); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// friends.push(23)
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15
//         console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//     } else {
//         tip = bill * 0.2
//         console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//     }
//     return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(totals);


const stanislav = {
    firstName: 'Stanislav',
    lastName: 'Riabtsev',
    age: 2026 - 2005,
    job: 'student',
    friends: ['michal', 'peter']
};

console.log(stanislav.lastName);

const nameKey = 'Name';
console.log(stanislav['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (stanislav[interestedIn]) {
//     console.log(stanislav[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

stanislav.location = 'Poland'
stanislav['twitter'] = '@stanislavriabtse'
console.log(stanislav);



console.log(`${stanislav.firstName} has ${stanislav.friends.length} friends, and his best friend is called ${stanislav.friends[0]}`);