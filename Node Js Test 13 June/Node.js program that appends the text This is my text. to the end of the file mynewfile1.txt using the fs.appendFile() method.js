
const fs = require('fs');

const fileName = 'mynewfile1.txt';
const textToAppend = ' This is my text.';

fs.appendFile(fileName, textToAppend, (err) => {
    if (err) {
        console.error('An error occurred while appending to the file:', err);
    } else {
        console.log('Text appended to the file successfully!');
    }
});

