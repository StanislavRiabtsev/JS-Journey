'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh and you're a millenial ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Stanislav';
// calcAge(1991);
// // console.log(age);
// // printAge();

// // Varibles
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Stanislav';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const stanislav = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// stanislav.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = stanislav.calcAge;
// matilda.calcAge();

// const f = stanislav.calcAge;
// f();

// const stanislav = {
//   firstName: 'Stanislav',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// stanislav.greet();
// stanislav.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   return a + b;
// };
// addArrow(2, 5, 8);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williwams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica, 'David');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'David';
console.log('Before:', jessica);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williwams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before clone:', jessica);
console.log('After clone:', jessicaClone);
