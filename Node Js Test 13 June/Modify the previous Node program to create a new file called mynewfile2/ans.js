const fs = require('fs');

const filename = 'mynewfile2.txt';
fs.open(filename, 'w', (err, file) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log(`File ${filename} created successfully!`);
    }
});
