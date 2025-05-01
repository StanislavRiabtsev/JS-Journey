function func() {
    smth = "String";
}

const someRes = getData();
const node = document.querySelector('.class');

setInterval(function () {
    if (node) {
        node.innerHTML = someRes;

    }
}, 1000);


function outer() {
    const potentiallyHugeArray = [];
    return function inner() {
        potentiallyHugeArray.push('Hello');
        console.log("World");
    }
}
const sayHello = outer();

function createElemnt() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}

createElemnt();

function deletElemnt() {
    document.body.removeChild(document.getElementById('test'));
}
deletElemnt();