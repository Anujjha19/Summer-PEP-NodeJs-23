const fs = require('fs');

// Create a new file
fs.writeFile('example.txt', 'This is a new file', (err) => {
    if (err) throw err;
    console.log('File created');
});

// Add data to a file
fs.writeFile('example.txt', 'Some additional data', { flag: 'a+' }, (err) => {
    if (err) throw err;
    console.log('Data added to the file');
});

// Read an HTML file and display it on the browser
fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
