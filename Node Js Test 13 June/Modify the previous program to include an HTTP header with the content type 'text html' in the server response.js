
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,
        { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Hello World!</h1></body></html>\n')
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at 3000 `);
});

