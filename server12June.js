
var http = require('http');
var myModule = require('./myModule12June');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Imported this " + myModule.sayHello() 
    + "<br /> " + "<br /> "
    + " Date is : " + myModule.getData()
    );
    res.end();
}).listen(8080);



/* 
var http = require('http');
var myModule = require('./myModule12June');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Imported this " + myModule());
    res.end();
}).listen(8080);

*/


/* Basic Http Server 
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('Hellloooo');
}).listen(8080);

*/