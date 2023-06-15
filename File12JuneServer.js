var http = require('http');
var fs = require('fs');

var myModule = require('./myModule12June');

http.createServer(function (req, res) {
    fs.readFile('File12June.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
        }
        res.end();
    });
}).listen(8080);
