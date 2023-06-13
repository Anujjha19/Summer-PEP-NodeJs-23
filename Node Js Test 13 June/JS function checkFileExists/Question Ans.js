/* 
Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
Example Input:checkFileExists('/path/to/file.txt') 
Expected Output:   A promise object that will be resolved if the file exists after a delay of 1 second. If the file does not exist, the promise should be rejected

*/


const fs = require('fs');

function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.access(filePath, fs.constants.F_OK, (error) => {
                if (error) {
                    reject(new Error('File does not exist'));
                } else {
                    resolve();
                }
            });
        }, 1000);
    });
}

checkFileExists('/path/to/file.txt')
    .then(() => {
        console.log('File exists');
    })
    .catch((error) => {
        console.error('File does not exist:', error.message);
    });

