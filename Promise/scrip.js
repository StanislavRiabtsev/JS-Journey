// console.log('Data request...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Data preparation...');

//         const product = {
//             name: 'TV',
//             price: 300
//         }

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'Ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Error');
// }).finally(() =>{
//     console.log('Finally');
// });

const test = time =>{
    return new Promise(resolve =>{
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});