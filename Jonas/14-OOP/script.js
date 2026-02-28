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

Person.hey = function () {
  console.log('Hey there');
};

Person.hey();

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

//////////////// CHALLENGE #1 //////////////
/*
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
*/

//////////////// ES6 Classes //////////////

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  caclAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('HEYYYY');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.caclAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
  owner: 'stanislav',
  movements: [20, 2, 520, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 200;

console.log(account.movements);
