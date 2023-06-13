
const fs = require('fs');

const filename = 'mynewfile3.txt';
const content = 'Hello content!';

fs.writeFile(filename, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Content replaced in ${filename} successfully!`);
    }
});

