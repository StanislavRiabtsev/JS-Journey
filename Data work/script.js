// const now = new Date("2025-05 -09");

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18, 40, 20));
// console.log(now);

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

alert(`The cycle worked for ${end - start} ms`);