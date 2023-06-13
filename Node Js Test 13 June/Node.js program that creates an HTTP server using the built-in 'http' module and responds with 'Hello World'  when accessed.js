const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
