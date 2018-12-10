var http = require('http');
var url = require('url');
var util = require('util');

http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Tyoe': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3555)

// 打开浏览器查看 http://localhost:3555?name=zhangsan&age=18
