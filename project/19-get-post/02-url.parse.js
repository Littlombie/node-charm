var http = require('http');
var url = require('url');
var util = require('util');

// req = request; res = response
http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})

    console.log(req,'\n', res);
    // 解析url参数
    var params = url.parse(req.url, true).query;
    res.write('名称：' + params.name);
    res.write('\n');
    res.write('年龄:' + params.age);
    res.end();

}).listen(3555);
