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
    const lang = plan.skills.programmingLangs;
    let result = "";
    for (let key in lang) {
        result += `The ${key} language is studied by ${lang[key]}\n`
    }
    return result.trim();
}
console.log(showProgrammingLangs(personalPlanPeter2));

// #3
const personalPlanPeter3 = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ua', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `I am ${age} and I speak the following languages: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};
console.log(personalPlanPeter3.showAgeAndLangs(personalPlanPeter3));

/////////////////////////////////////////////////
// Coding Exercise 13: (*) Advanced Object and Array Task
/////////////////////////////////////////////////

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    for (let key in data) {
        if (typeof (data[key]) === 'object') {
            for (let i in data[key]) {
                console.log(`Property ${i} has meaning: ${data[key][i]}`);
            }
        } else {
            console.log(`Property ${key} has meaning: ${data[key]}`);
        }
    }

    for (let value of data.shops) {
        console.log(value);
    }

    data.shop.forEach((item, index) => {
        const area = item.width * item.length;
        console.log(`Shop ${index + 1} area: ${area}`);
    });

}
isBudgetEnough(shoppingMallData);