"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("TEST");
    }
};


for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has meaning: ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has meaning: ${options[key]}`);
    }
}

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

console.log(Object.keys(options).length);

const about = {
    name: "Stanislav",
    lastname: "Riabtsev",
    learn: "JS",
    age: 19,
    language: {
        ukranian: true,
        english: "A2",
        polish: "B2",
    },
    hobby: {
        football: {
            postion: "forward",
            time: 6,
        },
        computergame: {
            dota: 1700,
            cs: 800,
        }
    }
}

const { dota, cs } = about.hobby.computergame;
console.log(dota);
console.log(Object.keys(about).length);

console.log(options.name);
delete options.name;
console.log(options);

let counter = 0
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has meaning: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} has meaning: ${options[key]}`);
        counter++;
    }
}

console.log(counter);


/////////////////////////////////////////////////
// Coding Exercise 10: Object Problems
/////////////////////////////////////////////////

// #1
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;

}

console.log(showExperience(personalPlanPeter));

// #2
const personalPlanPeter2 = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};


function showProgrammingLangs(plan) {
    for (let key in plan) {
        if (typeof (plan[key]) === 'object') {
            for (let i in plan[key]) {
                console.log(`Property ${i} has meaning: ${plan[key][i]}`);
                if (typeof (plan[i]) === 'object') {
                    for (let j in plan[key][i]) {
                        console.log(`Property ${i} has meaning: ${plan[key][i][j]}`);
                    }
                }
            }

        } else {
            console.log(`Property ${key} has meaning: ${plan[key]}`);
        }
        // return `The ${plan[key][i]} language is studied by ${plan[key]} The ${plan[key]} language is studied by ${plan[key]}`;
    }
}
showProgrammingLangs(personalPlanPeter2);
// console.log(showProgrammingLangs(personalPlanPeter2));