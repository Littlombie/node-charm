var http = require('http');

// function onRequire(request, response) {
//     response.writeHead(200, {'Content-Type': 'text.plain'});
//     response.write("hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(8888);