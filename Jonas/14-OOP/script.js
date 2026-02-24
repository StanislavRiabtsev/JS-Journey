'use strict';

//////////////// Constructor Functions and the new Operator //////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do method
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const stanislav = new Person('Stanislav', 1991);
console.log(stanislav);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

const jay = 'Jay';

console.log(stanislav instanceof Person);
console.log(jay instanceof Person);

//////////////// Prototypes //////////////
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

stanislav.calcAge();
matilda.calcAge();

console.log(stanislav.__proto__);
console.log(stanislav.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(jack, matilda);

console.log(stanislav.hasOwnProperty('firstName'));
console.log(stanislav.hasOwnProperty('species'));
