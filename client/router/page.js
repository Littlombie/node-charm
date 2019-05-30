const fs = require('fs');
const http = require('http');
const path = require('path');
const server = (request, response) => {
    let url = request.url;
    const reDir = request.viewPath;
    
    // console.log('lalalala', request.path, request.viewPath + url,  fs.existsSync(request.viewPath + url));
    if (url === '/') {
        // response.writeHead(响应状态码，相应头对象)：发送一个像迎头给请求
        response.writeHead(200, {'Content-Type': 'text/html'})
        // 如果url='/'， 读取指定文件下的html文件，渲染到页面
        fs.readFile(reDir + '/views/index.html','utf-8', function (err, data) {
            if (err) throw err;
            response.end(data);
        })
    } else  if ( url  && fs.existsSync(reDir + '/views' + url +'.html')) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(reDir + '/views' + url+'.html','utf-8', function (err, data) {
            if (err) throw err;
            response.end(data);
        })
    } 
    else if(fs.existsSync(`${reDir}/public${url}`)){ // fs.existsSync 同步检查 文件是否存在
        fs.readFile(`${reDir}/public${url}`, function(err, data) {
            if (err) throw err;
            path.extname(url) == '.js' && response.writeHead(200, {'Content-Type': 'text/javascript'}); // 如果url的后缀为.js 则以js文件渲染 （本问题解决了 mime 的错误信息）
            response.end(data);
        })
    }else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile( reDir + '/views' + '/404.html', function(err, data) {
            if (err) throw err;
            response.end(data);
        })
    }
}


module.exports = server ;
