var http = require('http');
var qureystring = require('querystring');

var postHTML = `
<html>
<head>
    <meta charset='utf-8'>
    <title>请求实例</title>
    <body>
        <form method="post">
          名称： <input name="name"><br>
          年龄： <input name="age"><br>
          <input type="submit">
        </form>
    </body> 
</head>
</html>
`

http.createServer( function (req, res) {
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = qureystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        if (body.name && body.age) { // 输出提交的数据
            res.write('姓名： ' + body.name);
            res.write('\n');
            res.write('年龄： ' + body.age)
        } else { // 输出表单 
            res.write(postHTML);
        }
        res.end();
    })
}).listen(3555);