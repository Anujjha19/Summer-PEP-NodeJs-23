const http = require('http');
const myDateTime = require('./myDateTime');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Current date and time: ' + myDateTime.getCurrentDateTime());
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
