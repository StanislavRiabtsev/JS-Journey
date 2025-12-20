// Filter

// const names = ['Stanislav', 'Daniel', 'Anna', 'Max'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);


// Map

// let answers = ['StAnislav', 'ANNa', 'Hello'];
// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers);


// Every/some

// const some = [4, 'qqq', 'sferfw'];
// // console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof (item) === 'number')); //All


// Reduce

// const array = [4, 5, 1, 2, 7, 9];
// const res = array.reduce((sum, current) => sum + current);
// console.log(res);

// const array = ['apple', 'peach', 'plum'];
// const res = array.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const object = {
    stanislav:'person',
    anna: 'person',
    dog: 'animal',
    cat: 'animal'
}

const newArray = Object.entries(object)
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(newArray);