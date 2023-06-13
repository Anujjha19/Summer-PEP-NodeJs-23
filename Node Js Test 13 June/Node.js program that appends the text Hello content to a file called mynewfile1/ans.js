
const fs = require('fs');

const content = 'Hello content!\n';

fs.appendFile('mynewfile1.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Text appended to file successfully!');
    }
});

