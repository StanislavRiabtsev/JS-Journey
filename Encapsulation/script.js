class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Riabtsev';

    say = () => {
        console.log(`Name user: ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Error");
        }
    }
}

const stas = new User('Stanislav', 19);
console.log(stas.surname);
stas.say();
