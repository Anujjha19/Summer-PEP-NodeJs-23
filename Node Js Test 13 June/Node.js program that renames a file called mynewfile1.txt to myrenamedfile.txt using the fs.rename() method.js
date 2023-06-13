
const fs = require('fs');

const oldFileName = 'mynewfile1.txt';
const newFileName = 'myrenamedfile.txt';

fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
        console.error('An error occurred while renaming the file:', err);
    } else {
        console.log('File renamed successfully!');
    }
});

