// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next().value);

function* count(n) {
    for (i = 0; i <= n; i++) {
        yield i;
    }
}

for (let key of count(7)) {
    console.log(key);
}

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);