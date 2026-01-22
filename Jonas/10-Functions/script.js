'use strict';

/* ///////////  Default Parameters ////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
*/

/* ///////////  Passing Arguments ////////////
const flight = 'LH234';
const stanislav = {
  name: 'Stanislav Riabtsev',
  passport: 243223452,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 243223452) {
    alert('Check in ');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, stanislav);
// console.log(flight);
// console.log(stanislav);

// const flightNum = flight;
// const passenger = stanislav;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};
newPassport(stanislav);
checkIn(flight, stanislav);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);

  console.log(`Transform by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Callback function
const high5 = function () {
  console.log('👍');
};
document.body.addEventListener('click', high5);
['Stanislav', 'Martha', 'Adam'].forEach(high5);
