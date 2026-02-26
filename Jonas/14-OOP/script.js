'use strict';

//////////////// Constructor Functions and the new Operator //////////////
/*
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

console.log(stanislav.__proto__);
// Object.prototype (top of prototype chain)
console.log(stanislav.__proto__.__proto__);
console.log(stanislav.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 4, 6, 8, 4, 3];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

//////////////// CHALLENGE #1 //////////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
