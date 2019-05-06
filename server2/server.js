var http = require('http');
var url = require('url');
var api = require('./route/api');
var static = require('./route/static');

// 匹配静态文件夹路径的正则表达式，用于判断请求是否是静态文件
var staticExp = /\/public\/(img|js|css)\/[a-z]*\.(jpg|png|gif|svg|js|css)/;

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    if (staticExp.test(pathname)) { // 静态文件请求交由static处理
        static.get(__dirname + pathname, res);
    } else if (req.method == 'POST') { // 处理普通post请求
        api.post(req, res);
    } else { //普通请求
        api.get(req, res);
    }
}).listen(8520);

console.log('[Server Info] start server at http://localhost:8520');
