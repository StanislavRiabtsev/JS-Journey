'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'sss',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`Error in number ${i + 1} don't have id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (e) {
    if (e.name === 'SyntaxError') {
        console.error(e.message);
    } else throw e;
}

// const err = new SyntaxError('wwwwwww');
// console.log(err.name, err.message, err.stack);