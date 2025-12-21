function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function () {
    console.log(`${this.name} exit for site `);
}

const stas = new User('Stas', 19);
const alex = new User('Alex', 20);

stas.exit();

stas.hello();
alex.hello();

console.log(stas);
console.log(alex);