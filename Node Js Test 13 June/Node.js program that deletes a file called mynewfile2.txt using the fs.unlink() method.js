
const fs = require('fs');
const fileName = 'mynewfile2.txt';

fs.unlink(fileName, (err) => {
    if (err) {
        console.error('An error occurred while deleting the file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});

