// console.log(1);

// setTimeout(() => {
//     console.log('timeOut');
// }, 4000);

// setTimeout(() => {
//     console.log('timeOut-4s');
// }, 4000);

// console.log(2);


// let k = 0
// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('Done');
// }

// count();

// setTimeout(() => {
//     console.log(1);
// }, 0);
// console.log(2);


setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('promise'));

console.log('code');