// new RegExp('pattern', 'flags'); // OLD
// /pattern/f // NEW

const ans = prompt('Write your numbers');
const reg = /\d/;
console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\D/ig));

// \D - No numbers
// \W - No words


// \d - Numbers
// \w - All words
// \s - All spaces

// i - No (low/up)register
// g - Many regular
// m - Multiline mode

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/\./g, '*'));
console.log('12-23-45'.replace(/-/g, ':'));

