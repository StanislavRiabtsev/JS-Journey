let js = 'amazing';
if (js === 'amazing') alert('JS is Fun!')


let firstName = 'Stanislav'
let firstNamePerson = 'Jonas'

console.log(firstName);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIJohn < BMIMark) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's ${BMIJohn} is higher than John's ${BMIMark}!`);
}


const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"))
if (favourite === 23) {
    console.log(`Cool! ${favourite} is an amazing number`);
} else if (favourite === 7) {
    console.log(`${favourite} ia also a col number`);
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
}
else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}