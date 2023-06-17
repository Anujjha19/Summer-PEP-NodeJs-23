const url = require('url');

const myURL = new URL('https://www.example.com:8080/path/index.html?id=123&name=John#section');

console.log('Protocol:', myURL.protocol);
console.log('Host:', myURL.host);
console.log('Port:', myURL.port);
console.log('Pathname:', myURL.pathname);
console.log('Search:', myURL.search);
console.log('Hash:', myURL.hash);
console.log('Hostname:', myURL.hostname);
console.log('Origin:', myURL.origin);
